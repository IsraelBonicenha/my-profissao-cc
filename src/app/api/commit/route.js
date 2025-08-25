import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { diff } = await req.json();

    if (!diff || diff.trim() === "") {
      return NextResponse.json(
        { error: "Diff não pode estar vazio." },
        { status: 400 }
      );
    }

const response = await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    {
      role: "system",
      content: 
        "Você é um assistente que gera mensagens de commit claras e objetivas com base no diff de código. " +
        "Todos os commits devem seguir a convenção: <tipo>(<escopo>): <descrição>. " +
        "Se o diff afetar apenas 1 a 2 arquivos e a mudança for curta, gere apenas uma linha. " +
        "Se o diff for extenso (3+ arquivos ou múltiplas responsabilidades), use o formato expandido: " +
        "<tipo>(<escopos>): <título> " +
        "- detalhe 1 " +
        "- detalhe 2 " +
        "- detalhe N. " +
        "Sempre escolha apenas um dos dois formatos de acordo com a extensão do diff."
    },
    { role: "user", content: diff },
  ],
});

    const commitMessage = response.choices[0].message.content;

    return NextResponse.json({ commit: commitMessage });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao gerar commit." },
      { status: 500 }
    );
  }
}

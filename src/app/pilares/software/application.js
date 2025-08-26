'use client';
import { useState } from "react";
import { FiCopy, FiRefreshCw } from "react-icons/fi";

const planos = [
  {
    nome: "Gratuito",
    limiteCommits: 3,
    limiteDiffChars: 500,
    preco: "Grátis",
    descricao: [
      "Limite de 3 commits por dia",
      "Limite de 500 caracteres",
    ],
  },
  {
    nome: "Starter",
    limiteCommits: 25,
    preco: "R$ 4,23 /mês",
    descricao: ["Limite de 25 commits por dia", 
        "Limite de 5.000 caracteres"],
  },
  {
    nome: "Pro",
    preco: "R$ 32,10 /mês",
    descricao: ["Ilimitado"],
  },
];

export default function ApplicationPage() {
  const [diff, setDiff] = useState("");
  const [commit, setCommit] = useState("");
  const [loading, setLoading] = useState(false);

  const gerarCommit = async () => {
    if (!diff.trim()) {
      setCommit("Por favor, insira um diff válido.");
      return;
    }

    // if (diff.length > planos[0].limiteDiffChars) {
    //   setCommit(
    //     `No plano gratuito, o diff não pode exceder ${planos[0].limiteDiffChars} caracteres.`
    //   );
    //   return;
    // }

    setLoading(true);
    setCommit("");

    try {
      const response = await fetch("/api/commit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ diff }),
      });

      const data = await response.json();

      if (response.ok) {
        setCommit(formatCommitMessage(data.commit));
      } else {
        setCommit(data.error || "Erro ao gerar commit.");
      }
    } catch (err) {
      console.error(err);
      setCommit("Erro inesperado.");
    } finally {
      setLoading(false);
    }
  };

  const formatCommitMessage = (commit) => {
    return commit
      .replace(/\s+-\s+/g, "\n- ")
      .replace(/(: .+?)( - )/s, "$1\n\n- ")
      .trim();
  };

  const copiarCommit = () => {
    if (commit) navigator.clipboard.writeText(commit);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">

        <style jsx>{`
            textarea::-webkit-scrollbar {
                width: 6px;
            }
            textarea::-webkit-scrollbar-thumb {
                background-color: #4b5563;
                border-radius: 4px;
            }
            textarea::-webkit-scrollbar-track {
                border-radius: 4px;
            }
        `}</style>

        <header className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
        <h1 className="text-xl font-bold">commitGenerator</h1>
        <nav className="flex gap-4 text-gray-400 text-sm">
            <a href="#">Sobre</a>
            <a href="#">Docs</a>
            <a href="#">GitHub</a>
        </nav>
        </header>

        <main className="flex-grow flex flex-col items-center justify-center px-6 py-12">
        <h2 className="text-3xl font-bold mb-3 text-center">
            Gerador Automático de Commits
        </h2>
        <p className="text-gray-400 mb-10 text-center max-w-xl">
            Transforme diffs de código em commits claros e padronizados com um clique.
        </p>

        <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl mb-12">
            <div className="flex flex-col">
            <label className="mb-2 font-medium">Seu diff</label>
            <textarea
                className="flex-1 h-64 p-4 border border-gray-700 bg-gray-900 rounded-xl resize-none focus:ring-2 focus:ring-blue-500"
                placeholder="Cole aqui o diff do seu código..."
                value={diff}
                onChange={(e) => setDiff(e.target.value)}
                spellCheck={false}
                autoCorrect="off"
            />
            </div>

            <div className="flex flex-col">
            <label className="mb-2 font-medium">Commit gerado</label>
            <div className="relative">
                <textarea
                className="flex-1 h-64 p-4 border border-gray-700 bg-gray-800 rounded-xl resize-none focus:ring-2 focus:ring-green-500 w-full"
                placeholder="O commit aparecerá aqui..."
                value={commit}
                readOnly
                />
                {commit && (
                <button
                    onClick={copiarCommit}
                    className="absolute top-4 right-5 text-gray-400 hover:text-white"
                >
                    <FiCopy />
                </button>
                )}
            </div>
            </div>
        </div>

        <button
            onClick={gerarCommit}
            disabled={loading}
            className="mt-10 px-8 py-3 bg-blue-600 rounded-xl text-white font-medium hover:bg-blue-500 transition disabled:opacity-50"
        >
            {loading ? (
            <span className="flex items-center gap-2">
                <FiRefreshCw className="animate-spin" /> Gerando...
            </span>
            ) : (
            "Gerar Commit"
            )}
        </button>

        {/* Seção de Planos Profissionalizada */}
        <section className="mt-18 w-full max-w-6xl">
        <h3 className="text-3xl font-bold mb-8 text-center">Escolha o seu plano</h3>
        <div className="grid md:grid-cols-3 gap-8">
            {planos.map((plano, index) => {
            const destaque = plano.nome === "Starter"; // Plano recomendado
            return (
                <div
                key={plano.nome}
                className={`p-8 rounded-2xl border ${
                    destaque ? "border-blue-500 bg-gray-800 shadow-xl" : "border-gray-700 bg-gray-900"
                } flex flex-col items-center text-center transition hover:scale-105`}
                >
                <h4 className="text-2xl font-bold mb-3">{plano.nome}</h4>
                <p className={`text-lg font-semibold mb-4 ${destaque ? "text-blue-400" : "text-gray-400"}`}>
                    {plano.preco}
                </p>
                <ul className="text-gray-300 text-sm mb-6 space-y-2">
                    {plano.descricao?.map((item, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                        <span className="text-green-400 font-bold">✓</span>
                        <span>{item}</span>
                    </li>
                    ))}
                </ul>
                <button
                    className={`mt-auto px-6 py-3 rounded-xl font-medium transition ${
                    destaque
                        ? "bg-blue-500 hover:bg-blue-400 text-white"
                        : "bg-gray-700 hover:bg-gray-600 text-gray-200"
                    }`}
                >
                    {destaque ? "Mais popular" : "Selecionar plano"}
                </button>
                </div>
            );
            })}
        </div>
        </section>
        </main>

        <footer className="py-6 text-center text-gray-600 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} commitGenerator. Todos os direitos reservados.
        </footer>
    </div>
  );
}

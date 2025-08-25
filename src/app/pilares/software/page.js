'use client';
import { useState } from 'react';
import { FiRefreshCw } from 'react-icons/fi'; // ícone para alternar

export default function Software() {
    
    const [diff, setDiff] = useState('');
    const [commit, setCommit] = useState('');

    const gerarCommit = async () => {
        if (!diff.trim()) {
            setCommit("Por favor, insira um diff válido.");
            return;
        }

        setCommit("Gerando commit...");

        try {
            const response = await fetch("/api/commit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ diff }),
            });

            const data = await response.json();

            if (response.ok) {
            setCommit(data.commit);
            } else {
            setCommit(data.error || "Erro ao gerar commit.");
            }
        } catch (err) {
            console.error(err);
            setCommit("Erro inesperado.");
        }
    };

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">

            <style jsx>{`
                textarea::-webkit-scrollbar {
                    width: 6px;
                }
                textarea::-webkit-scrollbar-thumb {
                    background-color: #4b5563;
                    border-radius: 4px;
                }
                textarea::-webkit-scrollbar-track {
                    background-color: #000000;
                    border-radius: 4px;
                }
            `}</style>

            <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-10 md:px-20 mt-16 mb-16">
                <h1 className="text-2xl font-bold mb-6 text-gray-400">Gerador de Commits</h1>

                <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl">
                    {/* Campo Diff */}
                    <textarea
                        className="flex-1 h-100 p-4 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-400 overflow-y-auto"
                        placeholder="Cole aqui o diff do seu código..."
                        value={diff}
                        onChange={(e) => setDiff(e.target.value)}
                        spellCheck={false}      // <-- desativa correção automática
                        autoCorrect="off"       // <-- desativa autocorreção no mobile
                    />

                    {/* Campo Commit */}
                    <textarea
                        className="flex-1 h-100 p-4 border border-gray-300 rounded-md resize-none bg-gray-400 text-gray-800 focus:ring-2 focus:ring-green-400"
                        placeholder="Commit gerado aparecerá aqui..."
                        value={commit}
                        spellCheck={false}      // <-- desativa correção automática
                        autoCorrect="off"       // <-- desativa autocorreção no mobile
                        readOnly
                    />
                </div>
                
                <button
                    className="mt-7 px-10 py-2 bg-gray-400 text-gray-800 rounded-md hover:bg-gray-400 transition"
                    onClick={gerarCommit}
                >
                    Gerar Commit
                </button>
            </main>
        </div>
    );
}
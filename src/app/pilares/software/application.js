'use client';
import { useState } from 'react';
import { FiCopy, FiRefreshCw } from 'react-icons/fi';

export default function ApplicationPage() {
    const [diff, setDiff] = useState('');
    const [commit, setCommit] = useState('');
    const [loading, setLoading] = useState(false);

    const gerarCommit = async () => {
    if (!diff.trim()) {
        setCommit("Por favor, insira um diff válido.");
        return;
    }

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

            {/* Navbar */}
            <header className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
            <h1 className="text-xl font-bold">commitGenerator</h1>
            <nav className="flex gap-4 text-gray-400 text-sm">
                <a href="#">Sobre</a>
                <a href="#">Docs</a>
                <a href="#">GitHub</a>
            </nav>
            </header>

            {/* Main */}
            <main className="flex-grow flex flex-col items-center justify-center px-6 py-12">
            <h2 className="text-3xl font-bold mb-3 text-center">
                Gerador Automático de Commits
            </h2>
            <p className="text-gray-400 mb-10 text-center max-w-xl">
                Transforme diffs de código em commits claros e padronizados com um clique.
            </p>

            <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
                {/* Campo Diff */}
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

                {/* Campo Commit */}
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
            </main>

            {/* Footer */}
            <footer className="py-6 text-center text-gray-600 text-sm border-t border-gray-800">
            © {new Date().getFullYear()} commitGenerator. Todos os direitos reservados.
            </footer>
        </div>
    );
}

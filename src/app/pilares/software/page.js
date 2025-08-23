import React from 'react';

export default function Software() {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-10 md:px-20 mt-16 mb-16">
                <div className="text-center">
                    <div className="animate-pulse">
                        <svg className="mx-auto h-16 w-16 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <br />
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Em Construção</h1>
                    <p className="text-lg md:text-xl mb-8">Já é uma hora da manhã e eu ainda não terminei essa página.</p>
                </div>
            </main>
        </div>
    );
}
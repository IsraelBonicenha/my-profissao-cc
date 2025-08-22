export default function Pilares() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Main Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-10 md:px-20 mt-16 mb-16">
        <section className="max-w-4xl w-full text-center">
          {/* Call to Action */}
          <div className="flex justify-center">
            <a
              href="#pilares"
              className="bg-[#F75262] text-black font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              TESTE
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full h-12 flex items-center justify-center text-[#888888] text-sm">
        Desenvolvido por Israel Bonicenha - 2025 |{" "}
        <a
          href="https://github.com/IsraelBonicenha"
          className="ml-2 hover:text-[#78F540]"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Main Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-10 md:px-20 mt-16 mb-16">
        <section className="max-w-4xl w-full text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-[#78F540] drop-shadow-md">
              Ciências da Computação
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl leading-relaxed mb-8">
            A Computação está por trás de tudo o que você usa no dia a dia:
            dos apps no seu celular às redes sociais, da inteligência artificial
            que cria vídeos até os sistemas que controlam foguetes e carros autônomos.{" "}
            <span className="text-[#78F540] font-bold">Tudo pulsa com código</span>!
            O semáforo que regula o tráfego, o iPhone que conecta você ao mundo,
            o microondas que esquenta sua comida, a televisão, o foguete da SpaceX, etc.
          </p>

          <p className="text-base sm:text-lg md:text-2xl leading-relaxed mb-8">
            Vamos explorar cinco dos muitos pilares que envolvem essa área fascinante!
          </p>

          {/* Call to Action */}
          <div className="flex justify-center">
            <a
              href="#pilares"
              className="bg-[#78F540] text-black font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Explorar Pilares
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

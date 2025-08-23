import { FaCode, FaGamepad, FaDatabase, FaShieldAlt, FaMicrochip } from "react-icons/fa";

export default function Pilares() {
  const pilares = [
    {
      icon: FaCode,
      title: "Software",
      desc: "Crie apps que mudam vidas",
      color: "bg-[#1E90FF] hover:bg-[#1E90FF]",
    },
    {
      icon: FaDatabase,
      title: "Dados e IA",
      desc: "Preveja o futuro com dados",
      color: "bg-[#66CC3D] hover:bg-[#66CC3D]",
    },
    {
      icon: FaGamepad,
      title: "Games",
      desc: "Entretenimento que conecta pessoas",
      color: "bg-[#E63946] hover:bg-[#E63946]",
    },
    {
      icon: FaShieldAlt,
      title: "Segurança",
      desc: "Proteja o mundo digital",
      color: "bg-[#E0AA2F] hover:bg-[#E0AA2F]"
    },
    {
      icon: FaMicrochip,
      title: "Hardware",
      desc: "Construa o cérebro das máquinas",
      color: "bg-[#7B2CBF] hover:bg-[#7B2CBF]",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Main Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-10 md:px-20 mt-16 mb-16">
        <section id="pilares" className="max-w-6xl w-full text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {pilares.map((pilar, i) => {
              const Icon = pilar.icon;
              return (
                <div
                  key={i}
                  className={`group ${pilar.color} text-white rounded-xl p-6 flex flex-col items-center justify-center h-40 w-48 hover:scale-105 transition-transform duration-200 shadow-lg`}
                >
                  <Icon className="text-4xl mb-2" />
                  <span className="text-lg font-bold">{pilar.title}</span>
                  <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity mt-1 text-center">
                    {pilar.desc}
                  </span>
                </div>
              );
            })}
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

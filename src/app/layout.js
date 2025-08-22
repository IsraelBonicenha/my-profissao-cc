import "./globals.css";

export const metadata = {
  title: "My Profissão",
  description: "Entenda mais sobre Ciências da Computação.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}

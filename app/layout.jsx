import localFont from "next/font/local";
import "./globals.css"; // Ensure this path is correct
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Votacle",
  description: "Votacle is a platform for secure and transparent elections.",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1>Votacle</h1>
    </header>
  );

  const footer = <footer>asdfasdf</footer>;

  return (
    <html lang="en">
      <body
      //  max-w-[1000px]
        className={`w-full mx-auto text-sm sm:text-base min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

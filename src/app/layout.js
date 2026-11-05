import { Catamaran, Montserrat, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const catamaran = Catamaran({
  variable: "--font-catamaran",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Green Care",
  description: "Thoughtful care from the ground up.",
};

// Runs before first paint, so a dark-mode visitor never sees a flash of white. A saved choice wins over the device setting.
const setInitialTheme = `(function(){var t;try{t=localStorage.getItem("theme")}catch(e){}if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t)})()`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${catamaran.variable} ${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

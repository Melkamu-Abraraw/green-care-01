import { Catamaran, Montserrat, Playfair_Display } from "next/font/google";
import Image from "next/image";
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

// The splash plays once per visit; later page loads in the same tab skip it.
const skipSeenSplash = `(function(){try{if(sessionStorage.getItem("splash-seen"))document.documentElement.setAttribute("data-splash-seen","");else sessionStorage.setItem("splash-seen","1")}catch(e){}})()`;

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
        <script dangerouslySetInnerHTML={{ __html: skipSeenSplash }} />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Pure CSS: it fades itself out, so it never stays up even without JavaScript. */}
        <div className="splash" aria-hidden="true">
          <Image src="/logo.png" alt="" width={640} height={505} loading="eager" className="splash-logo" />
          <span className="splash-bar" />
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

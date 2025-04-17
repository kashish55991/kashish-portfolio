import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kashish Shah Portfolio",
  description: "Embedded Systems | Firmware | TinyML | IoT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`bg-[#0f0f0f] text-gray-100 ${geistSans.variable} ${geistMono.variable} font-sans`}
      >
        {/* background animation */}
        <div className="animated-bg" />
        
        {/* page content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}

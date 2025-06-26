import type { Metadata } from "next";
import "./globals.css";
import { Lora } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rika | Portfolio Website",
  description: "Portfolio website as a full-stack developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
        suppressHydrationWarning
      >
        <div className="noise-bg" />
        <div className="bg-[#f25c54] absolute top-[-6rem] -z-10 right[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#ffa69e]"></div>
        <div className="bg-[#abc4ff] absolute top-[-1rem] -z-10 left[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#5d83dcd2]"></div>
        
        <ThemeContextProvider>
          <Header />
          {children}
          <Footer />
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}

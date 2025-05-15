import { Fira_Code, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import CustomCursor from "@/components/CustomCursor";
import { ScrollArea } from "@/components/ui/scroll-area";
import FireflyBackground from "@/components/FireflyBackground";
import "react-photo-view/dist/react-photo-view.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: "400",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: "400",
});

const spaceGrostek = Space_Grotesk({
  variable: "--font-space-grostek",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Nando Abdillah Salam",
  description: "This is my Personal Web",
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable}   `}>
        <FireflyBackground />
        <ScrollArea className="h-screen w-full  ">
          <Header />

          <CustomCursor />

          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </ScrollArea>
      </body>
    </html>
  );
}

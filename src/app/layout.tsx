import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/topbar/Topbar";
import ParticlesEffect from "./particles";

export const metadata: Metadata = {
  title: "WSDM - Wisdomia",
  description: "Your next step to success!",
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <html lang="en">
      <body className={`mainLayout`}>
        <ParticlesEffect/>
        <TopBar /> 
        {children}
      </body>
    </html>
  );
}
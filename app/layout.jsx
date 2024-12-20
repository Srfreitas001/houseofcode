import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/PageTransition"
import StairTransition from "@/components/StairTransition";
import { Analytics } from "@vercel/analytics/react"

const jetbrainsMono = JetBrains_Mono({

  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",

});


export const metadata = {
  title: "House Of Code",
  description: "Tech Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      
      <body className= {jetbrainsMono.variable}>
        
        <Header />
        <StairTransition />
        <PageTransition> {children} </PageTransition>
        
        
        

      </body>

      <Analytics />

    </html>
  );
}

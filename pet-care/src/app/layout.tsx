import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classes from "./page.module.css"

import MainNavBar from "./_components/navBar/NavBar";
import Footer from "./_components/footer/Footer";
import { MSWComponent } from "./_components/MSWComponent";
import Provider from "@/app/_components/sessionProvider"
// import Provider from "@/app/lib/sessionProvider";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pet-Care",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal,
  pageProps,
}: Readonly<{
  children: React.ReactNode,
  modal: React.ReactNode,
  pageProps: any,
}>) {

  console.log(modal)

  return (
    <html lang="en">
        <body className={inter.className}>
          <MSWComponent/>
          <Provider>
            <main className={classes.main}>
                <div className={classes.navContainer}>
                    <MainNavBar></MainNavBar>
                </div>
                <div className={classes.contentContainer}>
                    {children}
                </div>
                <div className={classes.footerContainer}>
                    <Footer></Footer>
                </div>
                {modal}
            </main>
          </Provider>
        </body>
    </html>
  );
}

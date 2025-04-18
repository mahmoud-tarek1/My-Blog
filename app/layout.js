import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
       <nav style={{backgroundColor:"teal",width:"100%",fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Link  style={{margin:"7px"}} href="/">Home</Link>
        <Link  style={{margin:"7px"}} href="/Articles">Articles</Link>
        <Link style={{margin:"7px"}}  href="/Posts">Posts</Link>
        </nav> {children}
      </body>
    </html>
  );
}

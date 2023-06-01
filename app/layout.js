"use client";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { UserProvider } from "@/components/UserContext";
import Footer from "@/components/Footer/Footer";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <Navbar />
          {children}
					<Footer />
        </body>
      </UserProvider>
    </html>
  );
}

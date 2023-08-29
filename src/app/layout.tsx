/* eslint-disable @next/next/no-img-element */
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./components/Provider";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Logout, NavLogin } from "./components/Button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real time chat",
  description: "Real time chat with supabase",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <nav className="flex justify-between items-center  px-10 py-5 fixed top-0 left-0 w-full bg-white">
            <h1 className="text-2xl">
              NextJs<span className="text-teal-500">Chat</span>
            </h1>
            {session ? (
              <div className="flex items-center">
                <img
                  src={session.user?.image as string}
                  alt="user profile photo"
                  className="w-8 h-8 rounded-full mr-3 sm:w-12 sm:h-12"
                  width={50}
                  height={50}
                />
                <Logout />
              </div>
            ) : (
              <NavLogin />
            )}
          </nav>
          <main>{children}</main>
        </NextAuthProvider>
      </body>
    </html>
  );
}

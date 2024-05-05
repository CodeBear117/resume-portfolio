import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahil Kumar",
  description: "Sahil Kumar's Resume and Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className} antialiased sm:mx-40 px-4 my-10`}>
        <header>
          <p className="text-sm text-blue-500">Resume / Portfolio</p>
          <div className="flex items-baseline justify-between flex-wrap gap-4">
            <h1 className="text-3xl font-bold">Sahil Kumar</h1>
            <div className="flex gap-4">
              <a href="mailto:sahilkumar.melb@gmail.com">
                <MdOutlineMailOutline className="block w-6 h-6" />
              </a>
              <a
                href="https://github.com/CodeBear117"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="block w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sahilkumar-au/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="block w-6 h-6" />
              </a>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
    // {/* </ClerkProvider> */}
  );
}

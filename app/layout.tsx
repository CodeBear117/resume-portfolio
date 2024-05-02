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
      <body className={`${inter.className} antialiased md:mx-40 px-4 my-10`}>
        <header>
          <p className="text-sm text-blue-500">Resume / Portfolio</p>
          <div className="flex items-baseline justify-between flex-wrap gap-4">
            <h1 className="text-3xl font-bold">Sahil Kumar</h1>
            <div className="flex gap-4">
              <a
                href="mailto:sahilkumar.melb@gmail.com"
                className="hidden sm:block bg-[]"
              >
                Email
              </a>
              <MdOutlineMailOutline
                href="mailto:sahilkumar.melb@gmail.com"
                className="block sm:hidden w-6 h-6"
              />
              <a
                href="https://github.com/CodeBear117"
                target="_blank"
                className="hidden sm:block"
              >
                Github
              </a>
              <FaGithub
                href="https://github.com/CodeBear117"
                className="block sm:hidden w-6 h-6"
              />
              <a
                href="https://www.linkedin.com/in/sahilkumar-au/"
                target="_blank"
                className="hidden sm:block"
              >
                LinkedIn
              </a>
              <FaLinkedin
                href="https://www.linkedin.com/in/sahilkumar-au/"
                className="block sm:hidden w-6 h-6"
              />
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
    // {/* </ClerkProvider> */}
  );
}

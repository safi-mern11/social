import { Inter } from "next/font/google";
import "./styles/globals.css";
import { ThemeProvider } from "next-themes";
import Sidebar from "./components/common/Sidebar";
import PostAdder from "./components/common/PostAdder";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Threads",
  description: "connect yourself with globe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
        >
          <div className="bg-white dark:bg-black flex  min-h-[100vh] max-h-fit">
            <PostAdder />
            <Sidebar />
            <div className="mx-auto h-fit w-full">
              <div className="max-w-[700px] w-full mx-auto ">
                {children}
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

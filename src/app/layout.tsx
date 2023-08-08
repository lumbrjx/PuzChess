import "./globals.css";
import Navbar from "@/components/layout/navbar";
import AuthProvider from "./context/AuthProvider";
import { Jost } from "next/font/google";
import Footer from "@/components/layout/footer";
import QueryProvider from "./context/QueryProvider";
// setting font family
const inter = Jost({ subsets: ["latin"] });
// metadata
export const metadata = {
  title: "PuzChess",
  description:
    "PuzChess is new fresh platform with friendly design and endless chesspuzzle to skyrock your chess skills and middlegame logic, we give a type of challenge to make our user experience more fun.",
  generator: "Next.Js",
  keyword: ["chess", "puzzles", "games", "free", "Next.Js", "platform"],
  authors: [{ name: "Tayeb" }],
  creator: "Tayeb aka CLOG",
  publisher: "Tayeb aka CLOG",
  openGraph: {
    title: "PuzChess",
    description:
      "PuzChess is new fresh platform with friendly design and endless chesspuzzle to skyrock your chess skills and middlegame logic, we give a type of challenge to make our user experience more fun.",
    url: "https://puzchess.vercel.app",
    siteName: "PuzChess",

    openGraph: {
      url: "https://puzchess.vercel.app",
      type: "website",
      title: "PuzChess",
      description:
        "PuzChess is new fresh platform with friendly design and endless chesspuzzle to skyrock your chess skills and middlegame logic, we give a type of challenge to make our user experience more fun.",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <QueryProvider>
          <AuthProvider>
            <Navbar />

            {children}
            <Footer />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

import localFont from "next/font/local";
import CustomLink from "./components/CustomLink";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>
          <ul className="flex space-x-4 p-4 bg-gray-100">
            <li>
              <CustomLink path="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink path="/about">About</CustomLink>
            </li>
            <li>
              <CustomLink path="/blog">Blog</CustomLink>
            </li>
            <li>
              <CustomLink path="/contact">Contact</CustomLink>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}

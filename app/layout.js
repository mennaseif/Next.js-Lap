import "./globals.css";

import Navbar from "./components/Navbar";

export const metadata = {
  title: "Shop App",
  description: "Simple shop app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />

        <main className="flex-1 flex items-center justify-center px-6 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}

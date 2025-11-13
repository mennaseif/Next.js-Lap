import Navbar from "./Navbar"; export default function RootLayout({ children })
{ return (
<html lang="en">
  <body className="min-h-screen flex flex-col bg-gray-50">
    <Navbar />
    <main className="flex-1 px-6 py-6">{children}</main>
  </body>
</html>
); }

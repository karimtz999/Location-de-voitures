import "./globals.css";

export const metadata = {
  title: "My Tailwind Page",
  description: "A simple Next.js + Tailwind CSS example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center font-sans text-gray-800 bg-gray-50">
        {children}
      </body>
    </html>
  );
}



import "./globals.css";

export const metadata = {
  title: "Car Showroom",
  description: "The best car showroom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}


import "./globals.css";

export const metadata = {
  title: "social media",
  description: "this is a hiring task website and i wish i get the job :D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}

import "./globals.css"; 
import { Providers } from "./providers";
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-background`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

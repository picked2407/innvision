import Script from "next/script";
import FooterBar from "./components/Shared/FooterBar";
import NavBar from "./components/Shared/NavBar";
import "./globals.css";

export const metadata = {
  title: "Innvision",
  description: "We're more than a web development agency – we're innovators, creators, and your digital partner. Our passionate team brings your brand to life with cutting-edge tech and sleek design. Whether it's a modern website, e-commerce platform, or custom solution, we're here for you. Join us in building a captivating digital presence that propels your brand forward. InnVision - Where Possibilities Shine, Excellence Defined.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="bg-color-primary text-white tracking-wider"
        suppressHydrationWarning={false}
      >
        <NavBar />
        {children}
        <FooterBar />
        <Script
          src="https://kit.fontawesome.com/8330d3dfaf.js"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}

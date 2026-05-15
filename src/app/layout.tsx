import type { Metadata } from "next";
import { Activity, MapPin, Mail } from "lucide-react";
import Link from "next/link";
import Header from "@/src/components/layout/Header";
import "./globals.css";

// Advanced SEO Configuration
export const metadata: Metadata = {
  title: {
    template: "%s | Life Care Physiotherapy",
    default: "Life Care | Expert Physiotherapy Clinic", 
  },
  description: "Experience a new standard of vital restoration. Our expert practitioners deliver personalized, clinical excellence to help you recover and thrive.",
  keywords: ["physiotherapy", "physical therapy", "rehabilitation", "sports injury", "clinic", "pain management"],
  openGraph: {
    title: "Life Care | Expert Physiotherapy Clinic",
    description: "Expert practitioners delivering personalized, clinical excellence.",
    url: "https://lifecarephysio.com", // Replace with actual URL later
    siteName: "Life Care Physiotherapy",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface antialiased font-sans flex flex-col min-h-screen">
        
        {/* Accessibility: Skip to Main Content Link */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-primary focus:text-on-primary focus:font-bold focus:rounded-br-lg outline-none"
        >
          Skip to main content
        </a>

        <Header />

        {/* Added id="main-content" for the skip link to target */}
        <main id="main-content" className="pt-24 flex-grow">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer className="w-full mt-stack-lg bg-secondary text-on-secondary">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter max-w-container-max mx-auto px-margin-mobile py-stack-md">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Activity className="text-secondary-fixed w-8 h-8" />
                <span className="text-2xl font-bold">Life Care</span>
              </div>
              <p className="opacity-80 max-w-xs leading-relaxed">
                Empowering patients through motion and specialized clinical expertise since 2012.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-secondary-fixed mb-6 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="opacity-80 hover:text-secondary-fixed transition-opacity">Home</Link></li>
                <li><Link href="/shop" className="opacity-80 hover:text-secondary-fixed transition-opacity">Shop</Link></li>
                <li><Link href="/blog" className="opacity-80 hover:text-secondary-fixed transition-opacity">Blog</Link></li>
                <li><Link href="/locations" className="opacity-80 hover:text-secondary-fixed transition-opacity">Locations</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-secondary-fixed mb-6 uppercase tracking-wider">Our Clinic</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <p className="opacity-80">123 Wellness Way, Suite 100<br/>Healthcare Park, ST 12345</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 shrink-0" />
                  <p className="opacity-80">hello@lifecarephysio.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-container-max mx-auto px-margin-mobile py-6 border-t border-on-secondary/10 text-center">
            <p className="opacity-60 text-sm">© {new Date().getFullYear()} Life Care Physiotherapy. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
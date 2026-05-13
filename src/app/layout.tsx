"use client";

import { useState } from "react";
import { Activity, MapPin, Mail, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to check if link is active
  const isActive = (path: string) => {
    return pathname === path 
      ? "text-primary font-bold border-b-2 border-primary pb-1" 
      : "text-on-surface-variant font-medium hover:text-primary transition-colors";
  };

  // Helper for mobile links (closes menu on click)
  const mobileLinkClass = (path: string) => {
    return pathname === path
      ? "text-2xl font-bold text-primary bg-primary-fixed/20 px-4 py-2 rounded-lg"
      : "text-2xl font-medium text-on-surface hover:text-primary px-4 py-2 transition-colors";
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Life Care | Physiotherapy Clinic</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface antialiased font-sans flex flex-col min-h-screen">
        
        {/* TOP NAVIGATION BAR */}
        <header className="fixed top-0 w-full z-50 bg-surface border-b border-surface-container shadow-sm">
          <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-gutter h-20">
            <Link href="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm p-1 z-50">
              <Activity className="text-primary w-8 h-8" />
              <span className="text-2xl font-bold text-primary tracking-tight">Life Care</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link href="/" className={isActive("/")}>Home</Link>
              <Link href="/services" className={isActive("/services")}>Services</Link>
              <Link href="/about" className={isActive("/about")}>About</Link>
              <Link href="/shop" className={isActive("/shop")}>Shop</Link>
              <Link href="/blog" className={isActive("/blog")}>Blog</Link>
              <Link href="/locations" className={isActive("/locations")}>Locations</Link>
              <Link href="/contact" className={isActive("/contact")}>Contact</Link>
            </nav>
            
            {/* Desktop CTA Button */}
            <button className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-full font-semibold hover:bg-primary/90 active:scale-95 transition-all focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none">
              Call to Book
            </button>

            {/* Mobile Hamburger Button */}
            <button 
              className="md:hidden text-primary p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-md z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </header>

        {/* MOBILE NAVIGATION OVERLAY */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-surface flex flex-col items-center justify-center md:hidden"
            >
              <nav className="flex flex-col items-center gap-6 w-full px-6">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass("/")}>Home</Link>
                <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass("/services")}>Services</Link>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass("/about")}>About</Link>
                <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass("/shop")}>Shop</Link>
                <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass("/blog")}>Blog</Link>
                <Link href="/locations" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass("/locations")}>Locations</Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass("/contact")}>Contact</Link>
                
                <a href="tel:5551234567" className="mt-8 bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-xl hover:bg-primary/90 active:scale-95 transition-all shadow-md w-full text-center">
                  Call to Book
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MAIN PAGE CONTENT */}
        <main className="pt-20 flex-grow">
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
            <p className="opacity-60 text-sm">© 2026 Life Care Physiotherapy. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
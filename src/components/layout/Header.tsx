"use client";

import { useState, useEffect } from "react";
import { Activity, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for the glassmorphism header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path 
      ? "text-primary font-bold border-b-2 border-primary pb-1" 
      : "text-on-surface-variant font-medium hover:text-primary transition-colors";
  };

  const mobileLinkClass = (path: string) => {
    return pathname === path
      ? "text-2xl font-bold text-primary bg-primary-fixed/20 px-4 py-2 rounded-lg"
      : "text-2xl font-medium text-on-surface hover:text-primary px-4 py-2 transition-colors";
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? "bg-surface/85 backdrop-blur-md border-outline-variant/50 shadow-sm py-2" 
            : "bg-surface border-transparent py-4"
        }`}
      >
        <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <Link href="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm p-1 z-50">
            <Activity className="text-primary w-8 h-8" />
            <span className="text-2xl font-bold text-primary tracking-tight">Life Care</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/" className={isActive("/")}>Home</Link>
            <Link href="/services" className={isActive("/services")}>Services</Link>
            <Link href="/about" className={isActive("/about")}>About</Link>
            <Link href="/shop" className={isActive("/shop")}>Shop</Link>
            <Link href="/blog" className={isActive("/blog")}>Blog</Link>
            <Link href="/locations" className={isActive("/locations")}>Locations</Link>
            <Link href="/contact" className={isActive("/contact")}>Contact</Link>
          </nav>
          
          <button className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-full font-semibold hover:bg-primary/90 active:scale-95 transition-all focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none shadow-sm">
            Call to Book
          </button>

          <button 
            className="md:hidden text-primary p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-md z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

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
    </>
  );
}
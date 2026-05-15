"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, CarFront, Map, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Locations() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <>
      {/* Page Header & Booking Instructions */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-stack-md mt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface mb-stack-sm tracking-tight">
            Our Locations
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-primary-container text-on-primary-container p-6 md:p-8 lg:p-10 rounded-2xl shadow-sm border-l-4 border-primary"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-stack-sm">
            <div>
              <p className="text-xl md:text-2xl font-semibold mb-2">
                To book an appointment at either location, please call us during our operating hours.
              </p>
              <p className="text-sm font-bold uppercase tracking-wider opacity-80 mt-6 mb-1">
                Operating Hours
              </p>
              <p className="text-2xl md:text-3xl font-bold">
                Mon-Fri 8 AM - 6 PM, Sat 9 AM - 2 PM
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center p-6 bg-primary/10 rounded-full shadow-inner">
              <Clock className="w-12 h-12 text-primary" aria-hidden="true" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Locations Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pb-stack-lg">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          
          {/* Location 1: Downtown */}
          {/* Location 1: Okokomaiko */}
          <motion.article 
            variants={fadeUp}
            className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-outline-variant flex flex-col focus-within:ring-2 focus-within:ring-primary"
          >
            <div className="h-64 md:h-80 w-full relative overflow-hidden group bg-surface-container">
              <Image 
                src="/locations/downtown-clinic.jpg" 
                alt="Exterior view of Life Care Okokomaiko Clinic" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 md:p-10 flex-grow flex flex-col">
              <div className="flex items-center gap-3 mb-6 border-b border-surface-container pb-6">
                <MapPin className="w-8 h-8 text-primary" aria-hidden="true" />
                <h2 className="text-2xl md:text-3xl font-bold text-on-surface">Life Care - Okokomaiko</h2>
              </div>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <Map className="w-6 h-6 text-secondary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-sm text-on-surface-variant uppercase tracking-wider mb-1">Address</p>
                    <address className="text-lg text-on-surface font-medium not-italic">
                      Ojo, Okokomaiko 102101<br />
                      Lagos, Nigeria
                    </address>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-secondary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-sm text-on-surface-variant uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+2348038245635" className="text-lg font-bold text-secondary hover:text-secondary-fixed transition-colors outline-none focus:underline rounded-sm">
                      +234 803 824 5635
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <a 
                  href="https://maps.google.com/?q=Okokomaiko,+Ojo,+Lagos,+Nigeria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-secondary text-on-secondary py-4 rounded-xl font-bold hover:bg-secondary/90 active:scale-[0.98] transition-all outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 gap-2"
                >
                  View on Google Maps <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.article>

          {/* Location 2: Festac */}
          <motion.article 
            variants={fadeUp}
            className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-outline-variant flex flex-col focus-within:ring-2 focus-within:ring-primary"
          >
            <div className="h-64 md:h-80 w-full relative overflow-hidden group bg-surface-container">
              <Image 
                src="/locations/westside-clinic.jpg" 
                alt="Exterior view of Life Care Festac Clinic" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 md:p-10 flex-grow flex flex-col">
              <div className="flex items-center gap-3 mb-6 border-b border-surface-container pb-6">
                <MapPin className="w-8 h-8 text-primary" aria-hidden="true" />
                <h2 className="text-2xl md:text-3xl font-bold text-on-surface">Life Care - Festac</h2>
              </div>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <Map className="w-6 h-6 text-secondary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-sm text-on-surface-variant uppercase tracking-wider mb-1">Address</p>
                    <address className="text-lg text-on-surface font-medium not-italic">
                      3004e Festac Access Rd<br />
                      Festac Town, Lagos 102313
                    </address>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-secondary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-sm text-on-surface-variant uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+2348038245635" className="text-lg font-bold text-secondary hover:text-secondary-fixed transition-colors outline-none focus:underline rounded-sm">
                      +234 803 824 5635
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <a 
                  href="https://maps.google.com/?q=3004e+Festac+Access+Rd,+Festac+Town,+Lagos,+Nigeria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-secondary text-on-secondary py-4 rounded-xl font-bold hover:bg-secondary/90 active:scale-[0.98] transition-all outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 gap-2"
                >
                  View on Google Maps <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.article>

        </motion.div>
      </section>
    </>
  );
}
"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, CarFront, Map } from "lucide-react";
import Image from "next/image";

export default function Locations() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
          <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-stack-sm tracking-tight">
            Our Locations
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-primary-container text-on-primary-container p-6 md:p-8 rounded-xl shadow-sm border-l-4 border-primary"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-stack-sm">
            <div>
              <p className="text-xl md:text-2xl font-semibold mb-2">
                To book an appointment at either location, please call us during our operating hours.
              </p>
              <p className="text-sm font-bold uppercase tracking-wider opacity-80 mt-4 mb-1">
                Operating Hours
              </p>
              <p className="text-2xl md:text-3xl font-bold">
                Mon-Fri 8 AM - 6 PM, Sat 9 AM - 2 PM
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center p-4 bg-primary/10 rounded-full">
              <Clock className="w-12 h-12 text-primary" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Locations Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pb-stack-lg">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          
          {/* Location 1: Downtown */}
          <motion.article 
            variants={fadeUp}
            className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-outline-variant flex flex-col focus-within:ring-2 focus-within:ring-primary"
          >
            <div className="h-64 md:h-72 w-full relative overflow-hidden group">
              <Image 
                src="/locations/downtown-clinic.jpg" 
                alt="Downtown Clinic Exterior" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 md:p-8 flex-grow flex flex-col">
              <div className="flex items-center gap-3 mb-6 border-b border-surface-container pb-4">
                <MapPin className="w-8 h-8 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-on-surface">Life Care - Downtown</h2>
              </div>
              
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <Map className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm text-on-surface-variant uppercase tracking-wider mb-1">Address</p>
                    <p className="text-lg text-on-surface">123 Wellness Way, Central District</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm text-on-surface-variant uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:5551234567" className="text-lg font-bold text-secondary hover:text-secondary-fixed transition-colors outline-none focus:underline rounded-sm">
                      (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="bg-surface-container-low p-4 rounded-lg flex items-center gap-4 border border-surface-container">
                  <CarFront className="w-6 h-6 text-primary shrink-0" />
                  <p className="italic text-on-surface-variant leading-relaxed">
                    Free underground parking available beneath the main building.
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <a href="#" className="inline-flex items-center justify-center w-full bg-secondary text-on-secondary py-4 rounded-lg font-bold hover:bg-secondary/90 active:scale-[0.98] transition-all outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">
                  View Map & Directions
                </a>
              </div>
            </div>
          </motion.article>

          {/* Location 2: Westside */}
          <motion.article 
            variants={fadeUp}
            className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-outline-variant flex flex-col focus-within:ring-2 focus-within:ring-primary"
          >
            <div className="h-64 md:h-72 w-full relative overflow-hidden group">
              <Image 
                src="/locations/westside-clinic.jpg" 
                alt="Westside Clinic Exterior" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 md:p-8 flex-grow flex flex-col">
              <div className="flex items-center gap-3 mb-6 border-b border-surface-container pb-4">
                <MapPin className="w-8 h-8 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-on-surface">Life Care - Westside</h2>
              </div>
              
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <Map className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm text-on-surface-variant uppercase tracking-wider mb-1">Address</p>
                    <p className="text-lg text-on-surface">456 Recovery Lane, West Park</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm text-on-surface-variant uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:5559876543" className="text-lg font-bold text-secondary hover:text-secondary-fixed transition-colors outline-none focus:underline rounded-sm">
                      (555) 987-6543
                    </a>
                  </div>
                </div>
                <div className="bg-surface-container-low p-4 rounded-lg flex items-center gap-4 border border-surface-container">
                  <CarFront className="w-6 h-6 text-primary shrink-0" />
                  <p className="italic text-on-surface-variant leading-relaxed">
                    Street parking and dedicated patient lot behind the building.
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <a href="#" className="inline-flex items-center justify-center w-full bg-secondary text-on-secondary py-4 rounded-lg font-bold hover:bg-secondary/90 active:scale-[0.98] transition-all outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">
                  View Map & Directions
                </a>
              </div>
            </div>
          </motion.article>

        </motion.div>
      </section>
    </>
  );
}
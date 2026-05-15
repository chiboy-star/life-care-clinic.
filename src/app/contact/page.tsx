"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

// Real location data mapped for the interactive iframe
const LOCATIONS = {
  okokomaiko: {
    name: "Life Care - Okokomaiko",
    address: "Ojo, Okokomaiko 102101",
    city: "Lagos, Nigeria",
    phone: "+234 803 824 5635",
    // URL-encoded string for Google Maps Embed
    mapQuery: "Okokomaiko,+Ojo,+Lagos,+Nigeria"
  },
  festac: {
    name: "Life Care - Festac",
    address: "3004e Festac Access Rd",
    city: "Festac Town, Lagos 102313",
    phone: "+234 803 824 5635",
    mapQuery: "3004e+Festac+Access+Rd,+Festac+Town,+Lagos,+Nigeria"
  }
};

export default function Contact() {
  const [activeMap, setActiveMap] = useState<"okokomaiko" | "festac">("okokomaiko");
  
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-stack-lg">
        {/* Intro Section */}
        <section className="mb-stack-lg mt-8">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-4 tracking-tight">Get in Touch</h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
              Whether you're beginning your recovery journey or have questions about our specialized clinical services, our team in Lagos is here to support your path to vital restoration.
            </p>
          </motion.div>
        </section>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Okokomaiko Branch (Interactive Button) */}
            <button 
              onClick={() => setActiveMap("okokomaiko")}
              className={`w-full text-left p-6 md:p-8 rounded-2xl border-l-4 shadow-sm transition-all focus:outline-none focus:ring-4 focus:ring-primary/30 ${
                activeMap === "okokomaiko" 
                  ? "bg-surface border-primary ring-2 ring-primary/20" 
                  : "bg-surface-container-low border-transparent hover:bg-surface hover:shadow-md"
              }`}
            >
              <h2 className="text-2xl font-bold text-primary mb-4">{LOCATIONS.okokomaiko.name}</h2>
              <div className="space-y-4 text-on-surface-variant">
                <div className="flex items-start gap-3">
                  <MapPin className="text-secondary w-6 h-6 shrink-0 mt-1" />
                  <address className="not-italic text-lg font-medium">
                    {LOCATIONS.okokomaiko.address}<br/>
                    {LOCATIONS.okokomaiko.city}
                  </address>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-secondary w-6 h-6 shrink-0" />
                  <a href={`tel:${LOCATIONS.okokomaiko.phone.replace(/\s+/g, '')}`} onClick={(e) => e.stopPropagation()} className="text-lg hover:text-secondary hover:underline font-bold transition-colors outline-none focus:ring-2 focus:ring-secondary rounded-sm">
                    {LOCATIONS.okokomaiko.phone}
                  </a>
                </div>
              </div>
            </button>

            {/* Festac Branch (Interactive Button) */}
            <button 
              onClick={() => setActiveMap("festac")}
              className={`w-full text-left p-6 md:p-8 rounded-2xl border-l-4 shadow-sm transition-all focus:outline-none focus:ring-4 focus:ring-primary/30 ${
                activeMap === "festac" 
                  ? "bg-surface border-primary ring-2 ring-primary/20" 
                  : "bg-surface-container-low border-transparent hover:bg-surface hover:shadow-md"
              }`}
            >
              <h2 className="text-2xl font-bold text-primary mb-4">{LOCATIONS.festac.name}</h2>
              <div className="space-y-4 text-on-surface-variant">
                <div className="flex items-start gap-3">
                  <MapPin className="text-secondary w-6 h-6 shrink-0 mt-1" />
                  <address className="not-italic text-lg font-medium">
                    {LOCATIONS.festac.address}<br/>
                    {LOCATIONS.festac.city}
                  </address>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-secondary w-6 h-6 shrink-0" />
                  <a href={`tel:${LOCATIONS.festac.phone.replace(/\s+/g, '')}`} onClick={(e) => e.stopPropagation()} className="text-lg hover:text-secondary hover:underline font-bold transition-colors outline-none focus:ring-2 focus:ring-secondary rounded-sm">
                    {LOCATIONS.festac.phone}
                  </a>
                </div>
              </div>
            </button>

            {/* Shared Info & Hours */}
            <div className="bg-secondary-container/30 p-6 md:p-8 rounded-2xl border border-secondary-container shadow-sm">
              <h3 className="font-bold text-sm text-secondary uppercase tracking-wider mb-4">Clinic Operations</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <Mail className="text-secondary w-6 h-6 shrink-0" />
                  <a href="mailto:care@lifecarephysio.com" className="text-primary font-bold hover:underline transition-colors outline-none focus:ring-2 focus:ring-primary rounded-sm text-lg">care@lifecarephysio.com</a>
                </div>
                <div className="pt-5 border-t border-secondary-container">
                  <h4 className="font-bold text-on-surface mb-3">Operating Hours</h4>
                  <div className="space-y-2 text-on-surface-variant text-lg">
                    <div className="flex justify-between"><span>Mon - Fri</span><span className="font-bold text-on-surface">8 AM - 6 PM</span></div>
                    <div className="flex justify-between"><span>Saturday</span><span className="font-bold text-on-surface">9 AM - 2 PM</span></div>
                    <div className="flex justify-between"><span>Sunday</span><span className="text-error font-semibold italic">Closed</span></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-surface-container-lowest p-6 md:p-10 rounded-2xl shadow-sm border border-outline-variant">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Send an Inquiry</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-semibold text-on-surface-variant px-1 text-sm">Name</label>
                    <input type="text" required className="w-full bg-surface-container-low border border-transparent focus:border-secondary focus:ring-2 focus:ring-secondary/20 rounded-xl p-4 transition-all outline-none" placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-semibold text-on-surface-variant px-1 text-sm">Email</label>
                    <input type="email" required className="w-full bg-surface-container-low border border-transparent focus:border-secondary focus:ring-2 focus:ring-secondary/20 rounded-xl p-4 transition-all outline-none" placeholder="email@address.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-semibold text-on-surface-variant px-1 text-sm">Subject</label>
                  <select className="w-full bg-surface-container-low border border-transparent focus:border-secondary focus:ring-2 focus:ring-secondary/20 rounded-xl p-4 transition-all outline-none appearance-none cursor-pointer font-medium">
                    <option>New Patient Appointment</option>
                    <option>Billing Inquiry</option>
                    <option>Recovery Program Question</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-semibold text-on-surface-variant px-1 text-sm">Message</label>
                  <textarea rows={6} required className="w-full bg-surface-container-low border border-transparent focus:border-secondary focus:ring-2 focus:ring-secondary/20 rounded-xl p-4 transition-all outline-none resize-y" placeholder="How can we help you today?"></textarea>
                </div>
                <button type="submit" className="w-full md:w-auto bg-primary text-on-primary px-10 py-4 rounded-xl font-bold shadow-md hover:bg-primary/90 active:scale-95 transition-all flex items-center justify-center gap-3 focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Interactive Google Map Section */}
        <section className="mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative w-full h-[450px] rounded-2xl overflow-hidden bg-surface-container border border-outline-variant shadow-lg"
          >
             <iframe
               width="100%"
               height="100%"
               style={{ border: 0 }}
               loading="lazy"
               allowFullScreen
               referrerPolicy="no-referrer-when-downgrade"
               // The src URL dynamically changes based on the activeMap state!
               src={`https://maps.google.com/maps?q=${LOCATIONS[activeMap].mapQuery}&t=m&z=15&output=embed&iwloc=near`}
             ></iframe>
             
             {/* Small overlay to tell the user which map is active */}
             <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-outline-variant flex items-center gap-2 pointer-events-none">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-bold text-primary">{LOCATIONS[activeMap].name}</span>
             </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
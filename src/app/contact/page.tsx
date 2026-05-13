"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">Get in Touch</h1>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Whether you're beginning your recovery journey or have questions about our specialized clinical services, our team is here to support your path to vital restoration.
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
            {/* Downtown Branch */}
            <div className="bg-surface-container-low p-6 md:p-8 rounded-2xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-primary mb-4">Life Care - Downtown</h2>
              <div className="space-y-4 text-on-surface-variant">
                <div className="flex items-start gap-3">
                  <MapPin className="text-secondary w-6 h-6 shrink-0 mt-1" />
                  <span>450 Clinical Way, Suite 200<br/>Central Business District, Metropolis 54321</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-secondary w-6 h-6 shrink-0" />
                  <a href="tel:5551234567" className="hover:text-secondary hover:underline font-medium transition-colors outline-none focus:ring-2 focus:ring-secondary rounded-sm">(555) 123-4567</a>
                </div>
              </div>
            </div>

            {/* Westside Branch */}
            <div className="bg-surface-container-low p-6 md:p-8 rounded-2xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-primary mb-4">Life Care - Westside</h2>
              <div className="space-y-4 text-on-surface-variant">
                <div className="flex items-start gap-3">
                  <MapPin className="text-secondary w-6 h-6 shrink-0 mt-1" />
                  <span>820 Vitality Ave<br/>Wellness Park, Metropolis 54322</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-secondary w-6 h-6 shrink-0" />
                  <a href="tel:5559876543" className="hover:text-secondary hover:underline font-medium transition-colors outline-none focus:ring-2 focus:ring-secondary rounded-sm">(555) 987-6543</a>
                </div>
              </div>
            </div>

            {/* Shared Info & Hours */}
            <div className="bg-secondary-container/30 p-6 md:p-8 rounded-2xl border border-secondary-container shadow-sm">
              <h3 className="font-bold text-sm text-secondary uppercase tracking-wider mb-4">Clinic Operations</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <Mail className="text-secondary w-6 h-6 shrink-0" />
                  <a href="mailto:care@lifecarephysio.com" className="text-primary font-bold hover:underline transition-colors outline-none focus:ring-2 focus:ring-primary rounded-sm">care@lifecarephysio.com</a>
                </div>
                <div className="pt-5 border-t border-secondary-container">
                  <h4 className="font-bold text-on-surface mb-3">Operating Hours</h4>
                  <div className="space-y-2 text-on-surface-variant">
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
              <h2 className="text-2xl font-bold text-primary mb-6">Send an Inquiry</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-semibold text-on-surface-variant px-1 text-sm">Name</label>
                    <input type="text" className="w-full bg-surface-container-low border border-transparent focus:border-secondary focus:ring-2 focus:ring-secondary/20 rounded-xl p-4 transition-all outline-none" placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-semibold text-on-surface-variant px-1 text-sm">Email</label>
                    <input type="email" className="w-full bg-surface-container-low border border-transparent focus:border-secondary focus:ring-2 focus:ring-secondary/20 rounded-xl p-4 transition-all outline-none" placeholder="email@address.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-semibold text-on-surface-variant px-1 text-sm">Subject</label>
                  <select className="w-full bg-surface-container-low border border-transparent focus:border-secondary focus:ring-2 focus:ring-secondary/20 rounded-xl p-4 transition-all outline-none appearance-none cursor-pointer">
                    <option>New Patient Appointment</option>
                    <option>Billing Inquiry</option>
                    <option>Recovery Program Question</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-semibold text-on-surface-variant px-1 text-sm">Message</label>
                  <textarea rows={5} className="w-full bg-surface-container-low border border-transparent focus:border-secondary focus:ring-2 focus:ring-secondary/20 rounded-xl p-4 transition-all outline-none resize-y" placeholder="How can we help you today?"></textarea>
                </div>
                <button type="submit" className="w-full md:w-auto bg-primary text-on-primary px-10 py-4 rounded-xl font-bold shadow-md hover:bg-primary/90 active:scale-95 transition-all flex items-center justify-center gap-3 focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Decorative Map Section (using generic background block until image is added) */}
        <section className="mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-surface-container-high border border-outline-variant shadow-inner flex items-center justify-center"
          >
             {/* Note: Update src to your map graphic later */}
             <div className="text-on-surface-variant opacity-60 font-semibold flex flex-col items-center gap-2">
                <MapPin className="w-10 h-10" />
                [Map Graphic Placeholder]
             </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
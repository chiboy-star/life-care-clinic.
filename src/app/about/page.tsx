"use client";

import { motion } from "framer-motion";
import { Mail, Share2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-surface-container-high">
          {/* Add '/about/clinic-interior.jpg' to your public folder later */}
          <Image src="/about/clinic-interior.png" alt="Clinic Interior" fill className="object-cover" /> 
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-gutter w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl bg-surface/95 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-xl border border-surface-container"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
              Our Mission: Restoring Your Vitality.
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Exceptional physiotherapy care tailored to your journey of healing and movement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-stack-lg bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="order-2 md:order-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-1 bg-primary rounded-full"></span>
                <span className="font-bold text-sm text-primary uppercase tracking-widest">Our Heritage</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-6">Clinical Excellence Since 2012</h2>
              <div className="space-y-4 text-lg text-on-surface-variant leading-relaxed">
                <p>Founded on the principles of empathy and vital restoration, Life Care has spent over a decade redefining the patient experience. What started as a small local practice has grown into a beacon of clinical excellence.</p>
                <p>Our approach combines technical proficiency with an emotionally supportive environment. We believe that true healing happens when patients feel heard, understood, and empowered throughout their recovery journey.</p>
                <div className="p-6 bg-surface-container-low border-l-4 border-primary rounded-r-lg mt-6 shadow-sm">
                  <p className="italic font-medium text-on-surface">"We don't just treat symptoms; we restore the freedom of movement that defines your quality of life."</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2 relative"
            >
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-secondary/20 rounded-2xl"></div>
              <div className="relative z-10 rounded-2xl shadow-lg w-full aspect-[4/3] bg-surface-container overflow-hidden">
                 {/* Add '/about/physio-assisting.jpg' to public folder later */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-stack-lg bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">Meet Our Specialist Team</h2>
            <p className="text-lg text-on-surface-variant max-w-xl mx-auto">
              Our practitioners are world-class experts dedicated to your physical well-being and clinical recovery.
            </p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { name: "Sarah Jenkins", role: "Lead Physiotherapist", desc: "Expert in sports recovery with 10+ years experience." },
              { name: "David Miller", role: "Senior Physiotherapist", desc: "Specializes in post-surgical rehab and mobility." },
              { name: "Dr. Lisa Chen", role: "Specialist Physiotherapist", desc: "Clinical specialist in pelvic floor and chronic pain." }
            ].map((member, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-surface p-6 rounded-2xl shadow-sm border border-outline-variant hover:shadow-md transition-shadow group">
                <div className="mb-6 overflow-hidden rounded-xl aspect-square bg-surface-container relative">
                   {/* Add team images here later */}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="font-semibold text-secondary mb-4">{member.role}</p>
                <p className="text-on-surface-variant">{member.desc}</p>
                <div className="mt-6 flex gap-4">
                  <button className="text-outline hover:text-primary transition-colors outline-none focus:ring-2 focus:ring-primary rounded"><Share2 className="w-5 h-5" /></button>
                  <button className="text-outline hover:text-primary transition-colors outline-none focus:ring-2 focus:ring-primary rounded"><Mail className="w-5 h-5" /></button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-stack-lg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary-container text-on-secondary-container p-10 md:p-16 rounded-[2rem] flex flex-col items-center text-center shadow-inner"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your journey?</h2>
            <p className="text-lg mb-8 max-w-2xl opacity-90">
              Book an initial assessment with one of our specialists today and take the first step towards pain-free movement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-on-secondary-container text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-md active:scale-95 focus:ring-2 focus:ring-on-secondary-container focus:ring-offset-2 outline-none">
                Book Online
              </button>
              <a href="/contact" className="border-2 border-on-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold hover:bg-on-secondary-container hover:text-white transition-all focus:ring-2 focus:ring-on-secondary-container focus:ring-offset-2 outline-none">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
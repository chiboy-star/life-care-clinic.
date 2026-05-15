"use client";

import { motion } from "framer-motion";
import { Calendar, ShieldCheck, Stethoscope, Bone, RotateCcw, Dumbbell, Activity, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Imported Link for internal routing

export default function Home() {
  // Framer Motion Variants for smooth, non-jarring animations
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          {/* The actual image */}
          <div className="absolute right-0 top-0 w-full md:w-2/3 h-full">
            <Image
              src="/hero-image.png" 
              alt="Patient receiving expert physiotherapy care"
              fill
              className="object-cover object-center"
              priority // Crucial for LCP/SEO
              sizes="(max-width: 768px) 100vw, 66vw" // Optimizes download size per device
            />
          </div>
          {/* Gradient Overlay: Bottom-to-top on mobile, Left-to-right on desktop for perfect contrast */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface via-surface/95 md:via-surface/90 to-surface/40 md:to-transparent w-full md:w-3/4 z-10" />
        </div>
        
        <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-gutter w-full mt-12 md:mt-0">
          <motion.div 
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-on-background mb-stack-sm leading-[1.1] tracking-tight">
              Reclaim Your Movement, Restore Your Life.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant mb-stack-md max-w-lg leading-relaxed">
              Expert physiotherapy tailored to your journey. We combine clinical excellence with empathetic care to get you back to what you love.
            </p>
            {/* Converted to an accessible 'tel:' link */}
            <a 
              href="tel:+2348038245635" 
              className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-primary/90 active:scale-95 transition-all focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface outline-none"
            >
              <Calendar className="w-5 h-5" />
              Call to Schedule Your Visit
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar (Semantic <aside> to indicate supporting content) */}
      <aside className="bg-surface-container py-10 border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-2xl font-bold text-primary tracking-tight">Over 5,000 Patients Treated</span>
              <p className="text-on-surface-variant font-medium">Trusted excellence in rehabilitation</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2"><ShieldCheck className="w-8 h-8 text-primary" /><span className="font-bold text-on-surface">HealthBoard™</span></div>
              <div className="flex items-center gap-2"><Stethoscope className="w-8 h-8 text-primary" /><span className="font-bold text-on-surface">PhysioCert</span></div>
              <div className="flex items-center gap-2"><Bone className="w-8 h-8 text-primary" /><span className="font-bold text-on-surface">JointCare Alliance</span></div>
            </div>
          </div>
        </div>
      </aside>

      {/* Services Section */}
      <section className="py-stack-lg bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="text-center mb-stack-md">
            <h2 className="text-3xl md:text-4xl font-bold text-on-background tracking-tight">Our Specialized Care</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Service 1 */}
            <Link href="/services" passHref>
              <motion.article variants={fadeUp} className="h-full bg-surface-container-low p-8 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-all group cursor-pointer focus-within:ring-2 focus-within:ring-primary outline-none">
                <div className="w-14 h-14 bg-primary-fixed rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300 shadow-sm">
                  <RotateCcw className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-on-background group-hover:text-primary transition-colors">Post-Surgery Rehab</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Dedicated recovery protocols designed to restore strength and mobility following orthopedic procedures.
                </p>
              </motion.article>
            </Link>

            {/* Service 2 */}
            <Link href="/services" passHref>
              <motion.article variants={fadeUp} className="h-full bg-surface-container-low p-8 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-all group cursor-pointer focus-within:ring-2 focus-within:ring-primary outline-none">
                <div className="w-14 h-14 bg-primary-fixed rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300 shadow-sm">
                  <Dumbbell className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-on-background group-hover:text-primary transition-colors">Sports Injuries</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Specialized treatment for athletes to recover quickly and prevent future injuries through performance biomechanics.
                </p>
              </motion.article>
            </Link>

            {/* Service 3 */}
            <Link href="/services" passHref>
              <motion.article variants={fadeUp} className="h-full bg-surface-container-low p-8 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-all group cursor-pointer focus-within:ring-2 focus-within:ring-primary outline-none">
                <div className="w-14 h-14 bg-primary-fixed rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300 shadow-sm">
                  <Activity className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-on-background group-hover:text-primary transition-colors">Joint Pain</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Evidence-based management for chronic pain, arthritis, and stiffness to improve your daily quality of life.
                </p>
              </motion.article>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-stack-lg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-secondary rounded-[2rem] p-stack-md md:p-stack-lg text-center shadow-xl relative overflow-hidden focus-within:ring-4 focus-within:ring-secondary focus-within:ring-offset-4"
          >
            {/* Decorative background elements */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary-container opacity-10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-primary opacity-20 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-container rounded-full mb-8 text-on-secondary-container shadow-inner">
                <Phone className="w-10 h-10" aria-hidden="true" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-secondary mb-6 leading-tight tracking-tight">
                Ready to start your recovery? <br className="hidden md:block" /> Call us today to find a time that works.
              </h2>
              <a 
                href="tel:+2348038245635" 
                className="inline-block text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-fixed hover:text-white transition-colors focus:ring-4 focus:ring-white rounded-xl px-6 py-3 outline-none"
                aria-label="Call +234 803 824 5635"
              >
                +234 803 824 5635
              </a>
              <div className="mt-8">
                <p className="text-on-secondary opacity-90 font-medium text-lg">Available Monday — Friday, 8am — 6pm</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
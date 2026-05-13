"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Bone, BrainCircuit, Baby, MonitorSmartphone } from "lucide-react";
import Image from "next/image";

export default function Services() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-surface-container-low py-stack-lg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter grid md:grid-cols-2 gap-stack-md items-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeUp}
            className="space-y-stack-sm"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-on-surface leading-tight tracking-tight">
              Comprehensive Physiotherapy Services
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Experience a new standard of vital restoration. Our expert practitioners deliver personalized, clinical excellence to help you recover, strengthen, and thrive in your daily life.
            </p>
            <div className="pt-2">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-primary/90 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none">
                Schedule Assessment
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden shadow-md h-[400px] bg-surface-container"
          >
            {/* Note: Update src to your actual services image later */}
            <div className="absolute inset-0 flex items-center justify-center text-on-surface-variant opacity-50">
              [Services Image Placeholder]
            </div>
             <Image src="/services-hero.jpg" alt="Physiotherapy treatment" fill className="object-cover" /> 
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="mb-stack-md">
          <h2 className="text-3xl font-bold text-on-surface mb-2">Specialized Clinical Care</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <motion.div 
          className="flex flex-col gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Card 1 */}
          <motion.div variants={fadeUp} className="group bg-surface-container-lowest border-l-4 border-primary rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-surface-container-low transition-colors focus-within:ring-2 focus-within:ring-primary">
            <div className="bg-primary-container p-4 rounded-xl shrink-0">
              <Activity className="w-8 h-8 text-on-primary-container" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-bold text-on-surface">Post-Surgical Rehabilitation</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Accelerate your recovery after surgery with a structured, evidence-based program. We focus on restoring mobility, strength, and confidence through gentle, targeted exercises tailored to your procedure.
              </p>
              <a href="#" className="inline-flex items-center text-secondary font-semibold hover:underline gap-1 group-hover:gap-2 transition-all outline-none rounded-sm focus:ring-2 focus:ring-secondary">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeUp} className="group bg-surface-container-lowest border-l-4 border-primary rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-surface-container-low transition-colors focus-within:ring-2 focus-within:ring-primary">
            <div className="bg-primary-container p-4 rounded-xl shrink-0">
              <Bone className="w-8 h-8 text-on-primary-container" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-bold text-on-surface">Sports Injury Recovery</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Get back to peak performance with high-performance athletes' recovery protocols. From acute sprains to long-term ligament repair, we ensure your return to the field is safe, fast, and permanent.
              </p>
              <a href="#" className="inline-flex items-center text-secondary font-semibold hover:underline gap-1 group-hover:gap-2 transition-all outline-none rounded-sm focus:ring-2 focus:ring-secondary">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeUp} className="group bg-surface-container-lowest border-l-4 border-primary rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-surface-container-low transition-colors focus-within:ring-2 focus-within:ring-primary">
            <div className="bg-primary-container p-4 rounded-xl shrink-0">
              <BrainCircuit className="w-8 h-8 text-on-primary-container" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-bold text-on-surface">Chronic Pain Management</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Move beyond symptom relief and address the root cause of persistent pain. Our empathetic approach combines manual therapy with neurological education to help you reclaim your daily activities.
              </p>
              <a href="#" className="inline-flex items-center text-secondary font-semibold hover:underline gap-1 group-hover:gap-2 transition-all outline-none rounded-sm focus:ring-2 focus:ring-secondary">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={fadeUp} className="group bg-surface-container-lowest border-l-4 border-primary rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-surface-container-low transition-colors focus-within:ring-2 focus-within:ring-primary">
            <div className="bg-primary-container p-4 rounded-xl shrink-0">
              <Baby className="w-8 h-8 text-on-primary-container" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-bold text-on-surface">Pelvic Floor Therapy</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Private and specialized care for intimate health. We provide expert clinical guidance for postnatal recovery, pelvic discomfort, and functional restoration in a supportive, empathetic environment.
              </p>
              <a href="#" className="inline-flex items-center text-secondary font-semibold hover:underline gap-1 group-hover:gap-2 transition-all outline-none rounded-sm focus:ring-2 focus:ring-secondary">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 5 */}
          <motion.div variants={fadeUp} className="group bg-surface-container-lowest border-l-4 border-primary rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-surface-container-low transition-colors focus-within:ring-2 focus-within:ring-primary">
            <div className="bg-primary-container p-4 rounded-xl shrink-0">
              <MonitorSmartphone className="w-8 h-8 text-on-primary-container" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-bold text-on-surface">Workplace Ergonomics Assessment</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Optimize your work environment to prevent strain and fatigue. We provide detailed assessments for office setups or industrial roles, ensuring your posture supports your long-term physical health.
              </p>
              <a href="#" className="inline-flex items-center text-secondary font-semibold hover:underline gap-1 group-hover:gap-2 transition-all outline-none rounded-sm focus:ring-2 focus:ring-secondary">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-stack-lg text-on-secondary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your journey to recovery?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Book an initial consultation with our clinical experts and receive a customized treatment plan designed for your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-surface text-secondary px-8 py-3 rounded-full font-semibold shadow-md hover:bg-surface-container transition-colors focus:ring-2 focus:ring-surface focus:ring-offset-2 focus:ring-offset-secondary outline-none">
              Book Appointment
            </button>
            <a href="/locations" className="border border-on-secondary text-on-secondary px-8 py-3 rounded-full font-semibold hover:bg-on-secondary/10 transition-colors focus:ring-2 focus:ring-surface focus:ring-offset-2 focus:ring-offset-secondary outline-none inline-flex justify-center items-center">
              Find a Location
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
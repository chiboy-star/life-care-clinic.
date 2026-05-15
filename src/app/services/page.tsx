"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Bone, BrainCircuit, Baby, MonitorSmartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Imported for internal routing

export default function Services() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
      <section className="relative bg-surface-container-low py-stack-lg overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter grid md:grid-cols-2 gap-stack-md items-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeUp}
            className="space-y-stack-sm z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface leading-tight tracking-tight">
              Comprehensive Physiotherapy Services
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Experience a new standard of vital restoration. Our expert practitioners deliver personalized, clinical excellence to help you recover, strengthen, and thrive in your daily life.
            </p>
            <div className="pt-2">
              <Link 
                href="/contact"
                className="inline-block bg-primary text-on-primary px-8 py-4 rounded-xl font-bold shadow-md hover:bg-primary/90 active:scale-95 transition-all focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-low outline-none"
              >
                Schedule Assessment
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[450px] bg-surface-container w-full"
          >
            <Image 
              src="/services-hero.jpg" 
              alt="Physiotherapist performing shoulder assessment on a patient" 
              fill 
              className="object-cover"
              priority // Crucial for LCP
              sizes="(max-width: 768px) 100vw, 50vw"
            /> 
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="mb-stack-md">
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-2 tracking-tight">Specialized Clinical Care</h2>
          <div className="h-1.5 w-24 bg-primary rounded-full"></div>
        </div>

        <motion.div 
          className="flex flex-col gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Card 1 */}
          <motion.article variants={fadeUp} className="group bg-surface-container-lowest border-l-4 border-primary rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-md hover:bg-surface-container-low transition-all">
            <div className="bg-primary-container p-4 rounded-xl shrink-0">
              <Activity className="w-8 h-8 text-on-primary-container" aria-hidden="true" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">Post-Surgical Rehabilitation</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Accelerate your recovery after surgery with a structured, evidence-based program. We focus on restoring mobility, strength, and confidence through gentle, targeted exercises tailored to your procedure.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-secondary font-bold hover:text-secondary-fixed transition-colors outline-none rounded-sm focus:ring-2 focus:ring-secondary mt-2"
                aria-label="Learn more about Post-Surgical Rehabilitation by contacting us"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.article>

          {/* Card 2 */}
          <motion.article variants={fadeUp} className="group bg-surface-container-lowest border-l-4 border-primary rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-md hover:bg-surface-container-low transition-all">
            <div className="bg-primary-container p-4 rounded-xl shrink-0">
              <Bone className="w-8 h-8 text-on-primary-container" aria-hidden="true" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">Sports Injury Recovery</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Get back to peak performance with high-performance athletes' recovery protocols. From acute sprains to long-term ligament repair, we ensure your return to the field is safe, fast, and permanent.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-secondary font-bold hover:text-secondary-fixed transition-colors outline-none rounded-sm focus:ring-2 focus:ring-secondary mt-2"
                aria-label="Learn more about Sports Injury Recovery by contacting us"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.article>

          {/* Card 3 */}
          <motion.article variants={fadeUp} className="group bg-surface-container-lowest border-l-4 border-primary rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-md hover:bg-surface-container-low transition-all">
            <div className="bg-primary-container p-4 rounded-xl shrink-0">
              <BrainCircuit className="w-8 h-8 text-on-primary-container" aria-hidden="true" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">Chronic Pain Management</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Move beyond symptom relief and address the root cause of persistent pain. Our empathetic approach combines manual therapy with neurological education to help you reclaim your daily activities.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-secondary font-bold hover:text-secondary-fixed transition-colors outline-none rounded-sm focus:ring-2 focus:ring-secondary mt-2"
                aria-label="Learn more about Chronic Pain Management by contacting us"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.article>

          {/* Card 4 */}
          <motion.article variants={fadeUp} className="group bg-surface-container-lowest border-l-4 border-primary rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-md hover:bg-surface-container-low transition-all">
            <div className="bg-primary-container p-4 rounded-xl shrink-0">
              <Baby className="w-8 h-8 text-on-primary-container" aria-hidden="true" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">Pelvic Floor Therapy</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Private and specialized care for intimate health. We provide expert clinical guidance for postnatal recovery, pelvic discomfort, and functional restoration in a supportive, empathetic environment.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-secondary font-bold hover:text-secondary-fixed transition-colors outline-none rounded-sm focus:ring-2 focus:ring-secondary mt-2"
                aria-label="Learn more about Pelvic Floor Therapy by contacting us"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.article>

          {/* Card 5 */}
          <motion.article variants={fadeUp} className="group bg-surface-container-lowest border-l-4 border-primary rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-md hover:bg-surface-container-low transition-all">
            <div className="bg-primary-container p-4 rounded-xl shrink-0">
              <MonitorSmartphone className="w-8 h-8 text-on-primary-container" aria-hidden="true" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">Workplace Ergonomics Assessment</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Optimize your work environment to prevent strain and fatigue. We provide detailed assessments for office setups or industrial roles, ensuring your posture supports your long-term physical health.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-secondary font-bold hover:text-secondary-fixed transition-colors outline-none rounded-sm focus:ring-2 focus:ring-secondary mt-2"
                aria-label="Learn more about Workplace Ergonomics Assessments by contacting us"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.article>

        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-stack-lg text-on-secondary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Ready to start your journey to recovery?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book an initial consultation with our clinical experts and receive a customized treatment plan designed for your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-surface text-secondary px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-surface-container active:scale-95 transition-all focus:ring-4 focus:ring-surface focus:ring-offset-2 focus:ring-offset-secondary outline-none"
            >
              Book Appointment
            </Link>
            <Link 
              href="/locations" 
              className="border-2 border-on-secondary/50 text-on-secondary px-8 py-4 rounded-xl font-bold hover:bg-on-secondary/10 active:scale-95 transition-all focus:ring-4 focus:ring-surface focus:ring-offset-2 focus:ring-offset-secondary outline-none inline-flex justify-center items-center"
            >
              Find a Location
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
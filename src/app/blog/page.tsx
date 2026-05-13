"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bookmark, Filter, Award } from "lucide-react";
import Image from "next/image";

// Mock data for the blog posts
const posts = [
  {
    id: 1,
    category: "Exercise",
    title: "5 Essential Morning Stretches for Hip Mobility",
    readTime: "4 min read",
    image: "/blog/hip-mobility.jpg",
    alt: "Athlete performing stretching routine",
  },
  {
    id: 2,
    category: "Recovery",
    title: "What to Expect During Your First Post-Op Session",
    readTime: "7 min read",
    image: "/blog/post-op.jpg",
    alt: "Person practicing mindfulness in clinical room",
  },
  {
    id: 3,
    category: "Posture",
    title: "The Truth About Posture Correctors: Expert Review",
    readTime: "5 min read",
    image: "/blog/posture.jpg",
    alt: "Detailed view of spinal brace",
  },
];

export default function Blog() {
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
      <section className="px-margin-mobile pt-stack-md pb-stack-sm max-w-container-max mx-auto">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp}
          className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full border-2 border-primary-fixed overflow-hidden">
              <Image 
                src="/blog/doctor-headshot.jpg" 
                alt="Lead Doctor Portrait" 
                fill 
                className="object-cover"
              />
            </div>
            <span className="font-semibold text-primary bg-primary-fixed px-3 py-1 rounded-full text-sm">
              Expert Advice
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-on-background max-w-2xl tracking-tight leading-tight">
            Life Care Health Hub: Tips for a Pain-Free Life
          </h1>
        </motion.div>
      </section>

      {/* Featured Article */}
      <section className="px-margin-mobile mb-stack-lg max-w-container-max mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative group overflow-hidden rounded-xl bg-surface-container-low shadow-sm border border-outline-variant cursor-pointer focus-within:ring-2 focus-within:ring-primary"
        >
          <div className="aspect-video w-full overflow-hidden relative">
            <Image 
              src="/blog/featured-ergonomics.jpg" 
              alt="Clean, minimalist workplace environment" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-secondary font-semibold text-sm">
              <Award className="w-5 h-5" />
              Featured Guide
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-on-background leading-tight group-hover:text-primary transition-colors">
              Improving Workplace Ergonomics: A Comprehensive Guide to Daily Comfort
            </h2>
            <p className="text-lg text-on-surface-variant line-clamp-3 leading-relaxed">
              Discover how small adjustments to your desk setup and sitting habits can significantly reduce chronic back pain and neck strain. Our lead specialists break down the science of posture for the modern office worker.
            </p>
            <span className="inline-flex items-center gap-2 font-semibold text-primary group-hover:gap-3 transition-all mt-2">
              Read More
              <ArrowRight className="w-5 h-5" />
            </span>
          </div>
        </motion.div>
      </section>

      {/* Article Grid */}
      <section className="px-margin-mobile pb-stack-lg max-w-container-max mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-on-background">Recent Insights</h3>
          <button className="text-secondary font-semibold flex items-center gap-2 hover:bg-surface-container px-3 py-1.5 rounded-md transition-colors focus:ring-2 focus:ring-primary outline-none">
            Filter <Filter className="w-4 h-4" />
          </button>
        </div>

        <motion.div 
          className="flex flex-col gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {posts.map((post) => (
            <motion.article 
              key={post.id}
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-surface-container-lowest border border-outline-variant hover:shadow-md transition-shadow cursor-pointer focus-within:ring-2 focus-within:ring-primary group"
            >
              <div className="relative w-full sm:w-48 h-48 sm:h-32 shrink-0 rounded-lg overflow-hidden border-l-4 border-primary">
                <Image 
                  src={post.image} 
                  alt={post.alt} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-between flex-1 py-1">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                    {post.category}
                  </span>
                  <h4 className="text-lg font-bold text-on-background line-clamp-2 mt-1 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                </div>
                <div className="flex items-center justify-between mt-4 sm:mt-2 border-t sm:border-t-0 border-outline-variant/30 pt-3 sm:pt-0">
                  <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden">
                      <Image 
                        src="/blog/doctor-headshot.jpg" 
                        alt="Author headshot" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm text-on-surface-variant">{post.readTime}</span>
                  </div>
                  <button className="text-outline hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-stack-lg p-8 md:p-10 rounded-2xl bg-secondary-container border border-outline-variant shadow-inner"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-on-secondary-fixed-variant">Join the Vitality List</h3>
            <p className="text-lg text-on-secondary-fixed-variant opacity-90 mt-2 mb-6">
              Get monthly physiotherapy tips delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                required
                className="flex-1 bg-surface-container-lowest border border-outline/30 rounded-lg p-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none text-on-background placeholder:text-on-surface-variant/60" 
                placeholder="Your email address" 
              />
              <button 
                type="submit"
                className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 active:scale-95 transition-all focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-secondary-container outline-none whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </motion.div>
      </section>
    </>
  );
}
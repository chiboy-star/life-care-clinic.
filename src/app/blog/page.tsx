"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Bookmark, Filter, Award, CheckCircle2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Added for routing

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
  // State for the newsletter toast notification
  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setShowToast(true);
    setEmail(""); // Clear the input
    
    // Auto-hide the toast after 5 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="px-margin-mobile pt-stack-md pb-stack-sm max-w-container-max mx-auto">
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full border-2 border-primary-fixed overflow-hidden shadow-sm">
              <Image 
                src="/blog/doctor-headshot.jpg" 
                alt="Lead Doctor Portrait" 
                fill 
                className="object-cover"
              />
            </div>
            <span className="font-bold text-primary bg-primary-fixed px-3 py-1 rounded-full text-sm shadow-sm">
              Expert Advice
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-background max-w-2xl tracking-tight leading-tight">
            Life Care Health Hub: Tips for a Pain-Free Life
          </h1>
        </motion.div>
      </section>

      {/* Featured Article */}
      <section className="px-margin-mobile mb-stack-lg max-w-container-max mx-auto">
        <Link href="/blog/workplace-ergonomics" className="block focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-4 rounded-xl">
          <motion.article 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative group overflow-hidden rounded-xl bg-surface-container-low shadow-sm border border-outline-variant hover:shadow-md transition-all"
          >
            <div className="aspect-video w-full overflow-hidden relative bg-surface-container">
              <Image 
                src="/blog/featured-ergonomics.jpg" 
                alt="Clean, minimalist workplace environment" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority // Crucial for LCP
                sizes="(max-width: 1200px) 100vw, 1140px"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-wider">
                <Award className="w-5 h-5" />
                Featured Guide
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-on-background leading-tight group-hover:text-primary transition-colors">
                Improving Workplace Ergonomics: A Comprehensive Guide to Daily Comfort
              </h2>
              <p className="text-lg text-on-surface-variant line-clamp-3 leading-relaxed">
                Discover how small adjustments to your desk setup and sitting habits can significantly reduce chronic back pain and neck strain. Our lead specialists break down the science of posture for the modern office worker.
              </p>
              <span className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all mt-2">
                Read More
                <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </motion.article>
        </Link>
      </section>

      {/* Article Grid */}
      <section className="px-margin-mobile pb-stack-lg max-w-container-max mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-on-background tracking-tight">Recent Insights</h3>
          <button className="text-secondary font-bold flex items-center gap-2 hover:bg-surface-container px-4 py-2 rounded-lg transition-colors focus:ring-2 focus:ring-primary outline-none">
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
              className="relative flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-surface-container-lowest border border-outline-variant hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-primary group"
            >
              {/* Invisible link overlay to make the whole card clickable for routing */}
              <Link href={`/blog/${post.id}`} className="absolute inset-0 z-10" aria-label={`Read article: ${post.title}`}></Link>
              
              <div className="relative w-full sm:w-48 h-48 sm:h-32 shrink-0 rounded-lg overflow-hidden border-l-4 border-primary bg-surface-container">
                <Image 
                  src={post.image} 
                  alt={post.alt} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 192px"
                />
              </div>
              <div className="flex flex-col justify-between flex-1 py-1 relative z-20 pointer-events-none">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                    {post.category}
                  </span>
                  <h4 className="text-xl font-bold text-on-background line-clamp-2 mt-1 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                </div>
                <div className="flex items-center justify-between mt-4 sm:mt-2 border-t sm:border-t-0 border-outline-variant/30 pt-3 sm:pt-0 pointer-events-auto">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-sm">
                      <Image 
                        src="/blog/doctor-headshot.jpg" 
                        alt="Author headshot" 
                        fill 
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                    <span className="text-sm font-medium text-on-surface-variant">{post.readTime}</span>
                  </div>
                  <button 
                    className="text-outline hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm p-2 -mr-2 z-20"
                    aria-label={`Bookmark ${post.title}`}
                    onClick={(e) => {
                      e.preventDefault(); // Prevents the card link from firing
                      // Bookmark logic would go here
                    }}
                  >
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
          className="mt-16 p-8 md:p-12 rounded-[2rem] bg-secondary-container border border-outline-variant shadow-inner"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-on-secondary-fixed-variant tracking-tight">Join the Vitality List</h3>
            <p className="text-lg text-on-secondary-fixed-variant opacity-90 mt-3 mb-8 leading-relaxed">
              Get monthly physiotherapy tips and clinic updates delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 relative" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-surface-container-lowest border border-outline/30 rounded-xl p-4 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none text-on-background placeholder:text-on-surface-variant/60 shadow-sm" 
                placeholder="Your email address" 
              />
              <button 
                type="submit"
                className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 active:scale-95 transition-all shadow-md focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-secondary-container outline-none whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-8 right-8 z-50 bg-surface-container-lowest border-l-4 border-primary shadow-xl rounded-xl p-4 pr-12 max-w-sm flex items-start gap-3"
            role="alert"
          >
            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-on-surface">You're on the list!</h4>
              <p className="text-sm text-on-surface-variant mt-1">Please check your email to confirm your subscription.</p>
            </div>
            <button 
              onClick={() => setShowToast(false)}
              className="absolute top-4 right-4 text-outline hover:text-on-surface transition-colors outline-none rounded focus:ring-2 focus:ring-primary"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

// Enhanced mock database with categories
const products = [
  {
    id: 1,
    name: "Knee Brace",
    price: "$45.00",
    category: "Braces",
    image: "/products/knee-brace.jpg",
    alt: "Professional medical-grade hinged knee brace",
  },
  {
    id: 2,
    name: "Foam Roller",
    price: "$32.00",
    category: "Massage Tools",
    image: "/products/foam-roller.jpg",
    alt: "High-density black foam roller",
  },
  {
    id: 3,
    name: "Resistance Band Set",
    price: "$25.00",
    category: "TheraBands",
    image: "/products/resistance-bands.jpg",
    alt: "Set of professional latex resistance bands",
  },
  {
    id: 4,
    name: "Lumbar Support Pillow",
    price: "$55.00",
    category: "Support",
    image: "/products/lumbar-pillow.jpg",
    alt: "Ergonomic lumbar support pillow",
  },
  {
    id: 5,
    name: "Massage Ball",
    price: "$15.00",
    category: "Massage Tools",
    image: "/products/massage-ball.jpg",
    alt: "Textured rubber massage ball",
  },
  {
    id: 6,
    name: "Neoprene Dumbbell Pair",
    price: "$40.00",
    category: "Fitness",
    image: "/products/dumbbells.jpg",
    alt: "Non-slip neoprene dumbbells for muscle building",
  },
  {
    id: 7,
    name: "Speed Jump Rope",
    price: "$18.00",
    category: "Fitness",
    image: "/products/jump-rope.jpg",
    alt: "Adjustable speed jump rope for outdoor cardio",
  },
];

const categories = ["All", "Braces", "Massage Tools", "TheraBands", "Fitness", "Support"];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter logic
  const filteredProducts = products.filter(
    (product) => activeCategory === "All" || product.category === activeCategory
  );

  return (
    <>
      {/* Hero / Sub-navigation Section */}
      <section className="bg-surface-container-low pt-stack-md pb-stack-sm border-b border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-on-surface mb-stack-sm tracking-tight"
          >
            Equipment & Supplies
          </motion.h1>
          
          {/* Dynamic Category Filter */}
          <div 
            className="flex overflow-x-auto no-scrollbar gap-3 pb-4 -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0"
            role="tablist"
            aria-label="Product categories"
          >
            {categories.map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full font-semibold transition-all focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none ${
                  activeCategory === category
                    ? "bg-primary text-on-primary shadow-md"
                    : "bg-surface-container-lowest border border-outline/30 text-on-surface-variant hover:bg-surface-container-high hover:border-outline/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-stack-md min-h-[60vh]">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <motion.div
            layout // This enables the smooth gliding animation when filtering
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                  key={product.id}
                  className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow flex flex-col border border-surface-container group focus-within:ring-2 focus-within:ring-primary outline-none"
                >
                  <div className="aspect-square bg-surface-container-low rounded-lg mb-4 overflow-hidden relative">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 4} // Optimizes LCP for the first row of products
                    />
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-1">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-bold text-on-surface mb-1 leading-tight group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-on-surface-variant font-medium text-lg mb-6 mt-auto">
                      {product.price}
                    </p>
                    
                    <button 
                      className="w-full bg-primary text-on-primary py-3.5 rounded-lg font-bold hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none shadow-sm"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingCart className="w-5 h-5" aria-hidden="true" />
                      Add to Cart
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State Fallback */}
          {filteredProducts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-on-surface-variant font-medium">No products found in this category.</p>
              <button 
                onClick={() => setActiveCategory("All")}
                className="mt-4 text-primary font-bold hover:underline"
              >
                Clear filters
              </button>
            </motion.div>
          )}

        </div>
      </section>
    </>
  );
}
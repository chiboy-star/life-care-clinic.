"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

// We define our product data here. In a real app, this would come from your database.
const products = [
  {
    id: 1,
    name: "Knee Brace",
    price: "$45.00",
    image: "/products/knee-brace.jpg", // Path to your image in the public folder
    alt: "Professional medical-grade hinged knee brace",
  },
  {
    id: 2,
    name: "Foam Roller",
    price: "$32.00",
    image: "/products/foam-roller.jpg",
    alt: "High-density black foam roller",
  },
  {
    id: 3,
    name: "Resistance Band Set",
    price: "$25.00",
    image: "/products/resistance-bands.jpg",
    alt: "Set of professional latex resistance bands",
  },
  {
    id: 4,
    name: "Lumbar Support Pillow",
    price: "$55.00",
    image: "/products/lumbar-pillow.jpg",
    alt: "Ergonomic lumbar support pillow",
  },
  {
    id: 5,
    name: "Massage Ball",
    price: "$15.00",
    image: "/products/massage-ball.jpg",
    alt: "Textured rubber massage ball",
  },
];

export default function Shop() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <>
      {/* Hero / Sub-navigation Section */}
      <section className="bg-surface-container-low pt-stack-md pb-stack-sm">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-stack-sm tracking-tight">
            Equipment & Supplies
          </h1>
          
          {/* Category Filter */}
          <div className="flex overflow-x-auto no-scrollbar gap-4 pb-4">
            <button className="whitespace-nowrap px-6 py-2 rounded-full bg-primary text-on-primary font-semibold focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none">
              All
            </button>
            <button className="whitespace-nowrap px-6 py-2 rounded-full border border-outline text-on-surface-variant font-semibold hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none">
              Braces
            </button>
            <button className="whitespace-nowrap px-6 py-2 rounded-full border border-outline text-on-surface-variant font-semibold hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none">
              Massage Tools
            </button>
            <button className="whitespace-nowrap px-6 py-2 rounded-full border border-outline text-on-surface-variant font-semibold hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none">
              TheraBands
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-stack-md">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeUp}
                className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col border border-surface-container group"
              >
                <div className="aspect-square bg-surface rounded-lg mb-4 overflow-hidden relative">
                  {/* Next.js Image Component for optimization */}
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold text-on-surface mb-1 truncate">
                  {product.name}
                </h3>
                <p className="text-secondary font-bold text-lg mb-4">
                  {product.price}
                </p>
                <button className="mt-auto w-full bg-primary text-on-primary py-3 rounded-lg font-semibold hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
'use client'

import { motion } from "framer-motion"

export default function MetaAd() {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meta Ads Experience
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Created and optimized Meta (Facebook & Instagram) ad campaigns to
            increase engagement, drive conversions, and grow businesses online.
            Here are some of the previously managed campaigns:
          </p>
        </div>

        {/* Ads Grid */}
        <div className="grid grid-cols-1  gap-6">
          {["M1.jpg", "M2.jpg", "M3.jpg", "M4.jpg","M5.jpg","M6.jpg","M7.jpg","M8.jpg",].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <img
                src={`./Images/${img}`}
                alt={`Meta Ad ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition">
            Explore More Campaigns
          </button>
        </div>
      </div>
    </section>
  )
}

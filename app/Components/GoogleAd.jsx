'use client'

import { motion } from "framer-motion"

export default function GoogleAd() {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Google Ads Experience
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Successfully managed and executed Google Ads campaigns to drive
            digital marketing growth, brand visibility, and ROI.  
            Here are some of the previously done campaigns:
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1  gap-6 py-12">
          {["G1.jpg", "G2.jpg", "G3.jpg", "G4.jpg"].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="overflow-hidden rounded-2xl shadow-lg bg-white py-6"
            >
              <img
                src={`./Images/${img}`}
                alt={`Google Ad ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Explore More Campaigns
          </button>
        </div>
      </div>
    </section>
  )
}

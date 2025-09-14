'use client'

import { motion } from "framer-motion"

export default function EmailMarketing() {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Email Marketing Experience
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Designed and executed personalized email campaigns to boost
            engagement, nurture leads, and drive customer retention.  
            Here are some of the previous email marketing creatives:
          </p>
        </div>

        {/* Email Campaigns Grid */}
        <div className="grid grid-cols-1  gap-6">
          {["E4.jpg", "E3.jpg", "E1.jpg", "E2.jpg"].map(
            (img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="overflow-hidden rounded-2xl shadow-lg bg-white"
              >
                <img
                  src={`./Images/${img}`}
                  alt={`Email Campaign ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition">
            Explore More Campaigns
          </button>
        </div>
      </div>
    </section>
  )
}

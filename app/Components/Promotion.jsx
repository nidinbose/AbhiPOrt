'use client'

import { motion } from "framer-motion"

export default function AppPromotionExperience() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            App Promotion Experience
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Successfully crafted and executed app promotion strategies that
            boosted installs, enhanced engagement, and maximized visibility on
            app stores.  
            Here are some app promotion creatives showcased inside mobile
            screens:
          </p>
        </div>

        {/* App Promotion Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {["A1.jpg"].map(
            (img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex justify-center"
              >
                {/* Phone Mockup */}
                <div className="relative w-64 h-[500px] bg-black rounded-[2.5rem] shadow-xl overflow-hidden border-4 border-gray-900">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl"></div>

                  {/* App Promotion Creative */}
                  <img
                    src={`./Images/${img}`}
                    alt={`App Promotion ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )
          )}
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

'use client'

import { motion } from "framer-motion"

export default function Pages() {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading Section */}
      <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Social Media Pages Handled
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Successfully managed and optimized social media pages for different
            brands across Facebook, Instagram, LinkedIn, and more.  
            Here are some previews of the social media pages I have handled,
            displayed inside a mobile screen view:
          </p>
        </div>

        {/* Responsive Phone Mockup Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {["P1.jpg", "P2.jpg", "P3.jpg", "P4.jpg", "P5.jpg", "P6.jpg","P7.jpg","P8.jpg","P9.jpg","P10.jpg","P11.jpg","P12.jpg","P13.jpg"].map(
            (img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex justify-center"
              >
                {/* Phone Frame */}
                <div className="relative w-64 h-[500px] bg-black rounded-[2.5rem] shadow-xl overflow-hidden border-4 border-gray-900">
                  {/* Camera Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl"></div>

                  {/* Campaign Image */}
                  <img
                    src={`./Images/${img}`}
                    alt={`Email Campaign ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
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

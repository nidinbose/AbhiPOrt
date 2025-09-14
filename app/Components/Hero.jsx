'use client'

import Image from "next/image"
import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <main className="w-full bg-gradient-to-br from-white via-gray-50 to-blue-50 text-gray-900">
      
      {/* Hero Section */}
      <section className="w-full py-16">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-12">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2 text-center md:text-left space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A2C56] mt-7">
              Hi, I’m <span className="text-blue-600">Abijith PS</span>
            </h1>
            <p className="text-lg font-medium text-gray-700">
              Digital Marketing Specialist | SEO | Meta Ads | Google Ads
            </p>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Results-driven marketer with proven expertise in driving online growth, 
              building brand presence, and generating quality leads through 
              innovative campaigns and data-driven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#0A2C56] text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-900">
                Contact Me
              </button>
              <button variant="outline" className="px-6 py-3 rounded-xl border-blue-600 text-blue-600 hover:bg-blue-100">
                Download CV
              </button>
            </div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="">
                <img
                  src="./Images/ab1.jpg"
                  alt="Abijith PS"
                  className="rounded-2xl w-96 h-96"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

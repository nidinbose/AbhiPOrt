'use client'

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between container mx-auto p-6">
        {/* Left side - Avatar */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative">
            <div className="bg-[#0A2C56] rounded-l-3xl p-6">
              <Image
                src="/avatar.png"   // place avatar image inside public/
                alt="Louis Dao"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
          <h1 className="text-4xl font-bold text-[#0A2C56]">Louis Dao</h1>
          <p className="text-gray-600 text-sm">@LouisDao2024</p>

          <p className="mt-4 text-lg font-semibold italic text-gray-900">
            “Let me provide your brand’s passport to the world.”
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed max-w-md">
            Results-driven digital marketing specialist with 3 years of
            experience driving online growth and engagement. Proven track
            record in SEO, advertising, social media management. Passionate
            about leveraging data-driven insights to achieve measurable
            marketing objectives.
          </p>

          {/* Signature */}
          <div className="mt-6">
            <Image
              src="/signature.png"   // place signature image inside public/
              alt="Signature"
              width={150}
              height={80}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

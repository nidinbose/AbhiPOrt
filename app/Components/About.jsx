'use client'

import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12">
        
        {/* Left Column - Intro */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Header */}
          <div>
            <h2 className="text-3xl font-bold text-[#0A2C56]">About Me</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Hi, I’m <span className="font-semibold text-[#0A2C56]">Abijith PS</span>, 
              a passionate <span className="font-semibold">Digital Marketing Specialist</span> 
              with hands-on experience in social media management, Google & Meta Ads, SEO, 
              branding, and campaign strategy. My goal is to drive impactful digital growth 
              and deliver creative marketing solutions that generate results.
            </p>
          </div>

          {/* Objective */}
          <div>
            <h3 className="text-xl font-semibold text-[#0A2C56]">Objective</h3>
            <p className="mt-2 text-gray-700">
              To enhance my professional skills, capabilities, and knowledge in an 
              organization that values hard work and trusts me with responsibilities 
              and challenges.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold text-[#0A2C56]">Education</h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li><span className="font-semibold">BA English</span> – St Mary’s College (2023)</li>
              <li><span className="font-semibold">Hospital Administration</span> – Avodha Edutech (2023)</li>
              <li><span className="font-semibold">Digital Marketing</span> – Inmakes Infotech (2023)</li>
              <li>Humanities – MCM HSS Pattimattam (2020)</li>
              <li>SSLC – KNMMES High School Edathala (2018)</li>
            </ul>
          </div>
        </motion.div>

        {/* Right Column - Experience, Skills, Projects */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Experience */}
          <div>
            <h3 className="text-xl font-semibold text-[#0A2C56]">Experience</h3>
            <ul className="mt-2 space-y-3 text-gray-700 list-disc list-inside">
              <li><span className="font-semibold">Senior Digital Marketing Executive</span> – Flipmaxx Global LLP</li>
              <li><span className="font-semibold">Digital Marketing Executive</span> – Adhimeds App</li>
              <li><span className="font-semibold">Social Media Executive</span> – Afra India Innovations Pvt Ltd</li>
              <li><span className="font-semibold">Digital Marketing Executive</span> – Afra Engineers</li>
              <li><span className="font-semibold">Digital Marketing Intern</span> – Inmakes Infotech</li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xl font-semibold text-[#0A2C56]">Key Projects</h3>
            <ul className="mt-2 space-y-2 text-gray-700 list-disc list-inside">
              <li>Boldminds Foundation – Personal branding & Google Ads campaigns</li>
              <li>Buggy Wedding Cinemas – Wedding photography lead generation campaigns</li>
              <li>Nexis LED Screen – Social media strategy & brand visibility</li>
              <li>Design World – Signboard company marketing</li>
              <li>Stylish Unisex Salon – Social media growth & client engagement</li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold text-[#0A2C56]">Skills</h3>
            <p className="mt-2 text-gray-700">
              Digital Marketing, Social Media Strategy, Google & Meta Ads, SEO, Campaign Optimization, 
              Content Creation, Video Scripting, Trend Analysis, Brand Building, Team Collaboration
            </p>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-xl font-semibold text-[#0A2C56]">Languages</h3>
            <p className="mt-2 text-gray-700">English | Malayalam | Tamil</p>
          </div>

          {/* Contact */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-[#0A2C56]">Contact</h3>
            <p className="mt-2 text-gray-700"><span className="font-semibold">Phone:</span> 9074603243</p>
            <p className="text-gray-700"><span className="font-semibold">Email:</span> 
              <a href="mailto:abijithps948@gmail.com" className="text-blue-600 underline ml-1">
                abijithps948@gmail.com
              </a>
            </p>
            <p className="text-gray-700"><span className="font-semibold">Address:</span> Pallath House, Edathala North PO, NAD Junction, Kerala</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

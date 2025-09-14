'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ToolsPage() {
  const tools = [
    { id: 1, name: 'Google Ads', category: 'PPC', url: 'https://ads.google.com', img: 'https://logos-world.net/wp-content/uploads/2022/05/Google-AdWords-Logo.png' },
    { id: 2, name: 'Semrush', category: 'SEO', url: 'https://www.semrush.com', img: 'https://avatars.githubusercontent.com/u/3648654?s=280&v=4' },
    { id: 3, name: 'Google Analytics', category: 'Analytics', url: 'https://analytics.google.com', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCswCYnhK7o9KobHw5jmOtXQKY6JV8xuixdQ&s' },
    { id: 4, name: 'Keyword Researcher', category: 'SEO', url: '#', img: 'https://cdn-icons-png.flaticon.com/512/282/282769.png' },
    { id: 5, name: 'Ads Manager', category: 'PPC', url: '#', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png' },
    { id: 6, name: 'Galabox', category: 'Automation', url: '#', img: 'https://5.imimg.com/data5/SELLER/Default/2024/1/377859838/XR/TB/JS/45605621/gallabox-whatsapp-marketing-software.png' },
    { id: 7, name: 'Zoho', category: 'CRM', url: 'https://www.zoho.com', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSDg2XjvGaOqlCaN8Bjt7YCfY0bOQlJTXdASRJV2KgYPz2QMjaQXQvb8ZaFtY3GRoHQs&usqp=CAU' },
    { id: 8, name: 'Ahrefs', category: 'SEO', url: 'https://ahrefs.com', img: 'data:image/jpeg;base64,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' }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-blue-50 text-gray-900">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl py-7 px-3 font-extrabold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
         Digital Marketing Toolbox
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore the essential tools every marketer uses — SEO, PPC, analytics, and automation at your fingertips.
          </p>
        </header>

        {/* Tools Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tools.map(tool => (
            <Link key={tool.id} href={tool.url} target="_blank" className="group">
              <motion.article
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 flex flex-col items-center gap-3 hover:shadow-xl transition"
              >
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image
                    src={tool.img}
                    alt={`${tool.name} logo`}
                    width={80}
                    height={80}
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <h3 className="text-sm font-semibold text-center">{tool.name}</h3>
                <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-600 rounded-full">
                  {tool.category}
                </span>
              </motion.article>
            </Link>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-12 text-sm text-gray-500 text-center">
          <p>Tip: Replace logos with official brand assets for the cleanest look. All tools open in a new tab.</p>
        </footer>
      </div>
    </main>
  )
}

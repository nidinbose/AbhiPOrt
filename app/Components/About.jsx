'use client'

export default function About() {
  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div>
          {/* About me */}
          <h2 className="text-xl font-semibold text-[#0A2C56]">About me</h2>

          {/* Education */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-[#0A2C56]">Education</h3>
            <p className="mt-2 text-gray-700">
              2019 - 2023: National Economics University
            </p>
          </div>

          {/* Work experience */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-[#0A2C56]">Work experience</h3>
            <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
              <li>Marketing Manager - RSL Group</li>
              <li>Senior Digital Marketing - AVADA Group</li>
              <li>
                Founder - Dasown &amp; Co. | Marketing Agency
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-[#0A2C56]">
              Courses &amp; Certification
            </h3>
            <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
              <li>IELTS Academic C1</li>
              <li>
                Fundamentals of Digital Marketing –{" "}
                <a
                  href="https://learndigital.withgoogle.com/digitalgarage"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  Google Digital Garage
                </a>
              </li>
              <li>
                Advance as a Digital Marketing Specialist –{" "}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                Google Ads Search Certification –{" "}
                <a
                  href="https://skillshop.exceedlms.com/student/catalog/list?category_ids=53-google-ads-search"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  Google Digital Academy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Contact */}
          <div className="mt-0 md:mt-10">
            <h3 className="text-lg font-bold text-[#0A2C56]">Contact</h3>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold">Phone:</span> +84 917983399
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">E-mail:</span>{" "}
              <a
                href="mailto:louisdao.xvii@gmail.com"
                className="text-blue-600 underline"
              >
                louisdao.xvii@gmail.com
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Address:</span> Hanoi, Vietnam
            </p>
          </div>

          {/* Languages */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-[#0A2C56]">Languages</h3>
            <p className="mt-2 text-gray-700">
              Vietnamese | <span className="font-semibold">Native</span>
            </p>
            <p className="text-gray-700">
              English | <span className="font-semibold">Advanced</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

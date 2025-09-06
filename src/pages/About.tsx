import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans pt-[120px] min-h-screen">
      <section className="pb-20 bg-gradient-to-br from-blue-50 via-orange-50 to-orange-100 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              About Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get to know ArciSol — our story, our values, and the people behind
              our ERP innovation.
            </p>
          </div>
          {/* Company Profile */}
          <div className="mb-16 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-600">
              About NexiSol IT Solutions
            </h2>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">ArciSol</span> is a flagship
              product of{" "}
              <span className="font-semibold">NexiSol IT Solutions</span>, a
              next-generation IT consultancy and digital transformation partner
              based in Addis Ababa, Ethiopia. NexiSol empowers businesses to
              innovate, grow, and thrive in the digital era by delivering
              tailored technology solutions that drive operational excellence
              and business success.
            </p>
            <p className="text-gray-700 mb-2">
              With over a decade of experience, NexiSol has become a trusted
              partner for organizations seeking to leverage technology for
              strategic advantage. Our passionate team of tech experts combines
              deep industry knowledge with creative problem-solving to deliver
              solutions that exceed expectations.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-2">
              <li>10+ Years of Experience</li>
              <li>20+ Projects Completed</li>
              <li>10+ Tech Experts</li>
            </ul>
            <p className="text-gray-700">
              We believe in building long-term relationships with our clients,
              helping them transform their operations and achieve their goals
              through innovation, collaboration, and a relentless focus on
              quality.
            </p>
          </div>
          {/* Vision, Mission & Approach */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">
                Our Vision
              </h2>
              <p className="text-gray-700 text-center">
                To be the leading IT consultancy in Africa, empowering
                organizations to achieve digital transformation and sustainable
                growth through innovative technology solutions.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-4 text-green-600">
                Our Mission
              </h2>
              <p className="text-gray-700 text-center">
                To empower businesses with cutting-edge technology solutions
                that drive growth, efficiency, and innovation.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-4 text-orange-500">
                Our Approach
              </h2>
              <p className="text-gray-700 text-center">
                We combine technical expertise with strategic thinking, working
                closely with clients to deliver solutions that exceed
                expectations and create lasting value.
              </p>
            </div>
          </div>
          {/* Services */}
          <div className="mb-16 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-cyan-600">
              Our Services
            </h2>
            <p className="text-gray-700 mb-4">
              NexiSol offers a comprehensive suite of technology services
              designed to help businesses succeed in a rapidly evolving digital
              landscape:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <li>Custom Software Development</li>
              <li>Web Development & Web Applications</li>
              <li>Mobile App Development (Native & Cross-Platform)</li>
              <li>Quality Assurance & Testing</li>
              <li>Software Maintenance & Support</li>
              <li>E-commerce Solutions</li>
              <li>ERP Solutions (including ArciSol ERP)</li>
              <li>CRM Solutions</li>
            </ul>
            <p className="text-gray-700">
              Our solutions are tailored to each client’s unique needs, ensuring
              seamless integration, scalability, and outstanding user
              experiences.
            </p>
          </div>
          {/* Products */}
          <div className="mb-16 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">
              Our Products
            </h2>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">ArciSol ERP</span> is NexiSol’s
              complete digital solution for businesses to manage their
              operations efficiently. We also offer:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-2">
              <li>
                Nexi Jobs: A job board platform for posting and applying to
                opportunities
              </li>
              <li>Custom digital solutions for diverse industries</li>
            </ul>
            <p className="text-gray-700">
              Explore our innovative products and discover how NexiSol can help
              your business achieve its goals.
            </p>
          </div>
          {/* Testimonials */}
          <div className="mb-16 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-pink-600">
              Client Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col items-center">
                <p className="italic text-gray-700 mb-4">
                  “NexiSol delivered an exceptional Labour Recruitment platform
                  that exceeded our expectations. Their team was professional,
                  responsive, and truly understood our business needs.”
                </p>
                <div className="font-bold text-gray-900">Ahmed Kemal</div>
                <div className="text-gray-500 text-sm">
                  Cyberspace Organization Affair Officer
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col items-center">
                <p className="italic text-gray-700 mb-4">
                  “Working with NexiSol transformed our digital presence. Their
                  team's technical expertise and strategic approach helped us
                  achieve our business goals faster than expected.”
                </p>
                <div className="font-bold text-gray-900">Dina Asnake</div>
                <div className="text-gray-500 text-sm">
                  Cyberspace IT Officer
                </div>
              </div>
            </div>
          </div>
          {/* Team */}
          <div className="mb-16 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-8 text-purple-600 text-center">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Team Member"
                  className="w-28 h-28 rounded-full mb-4 shadow-lg border-4 border-orange-100"
                />
                <h3 className="font-bold text-lg text-gray-900">
                  Samuel Tadesse
                </h3>
                <p className="text-gray-600">CEO & Co-Founder</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Team Member"
                  className="w-28 h-28 rounded-full mb-4 shadow-lg border-4 border-blue-100"
                />
                <h3 className="font-bold text-lg text-gray-900">
                  Liya Mekonnen
                </h3>
                <p className="text-gray-600">CTO & Co-Founder</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/65.jpg"
                  alt="Team Member"
                  className="w-28 h-28 rounded-full mb-4 shadow-lg border-4 border-green-100"
                />
                <h3 className="font-bold text-lg text-gray-900">
                  Abel Getachew
                </h3>
                <p className="text-gray-600">Lead Developer</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Team Member"
                  className="w-28 h-28 rounded-full mb-4 shadow-lg border-4 border-purple-100"
                />
                <h3 className="font-bold text-lg text-gray-900">Mimi Asfaw</h3>
                <p className="text-gray-600">Head of Customer Success</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  alt="Team Member"
                  className="w-28 h-28 rounded-full mb-4 shadow-lg border-4 border-yellow-100"
                />
                <h3 className="font-bold text-lg text-gray-900">Yonas Alemu</h3>
                <p className="text-gray-600">Product Manager</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/22.jpg"
                  alt="Team Member"
                  className="w-28 h-28 rounded-full mb-4 shadow-lg border-4 border-pink-100"
                />
                <h3 className="font-bold text-lg text-gray-900">Sara Bekele</h3>
                <p className="text-gray-600">UI/UX Designer</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/77.jpg"
                  alt="Team Member"
                  className="w-28 h-28 rounded-full mb-4 shadow-lg border-4 border-red-100"
                />
                <h3 className="font-bold text-lg text-gray-900">Dawit Fikru</h3>
                <p className="text-gray-600">QA Engineer</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/33.jpg"
                  alt="Team Member"
                  className="w-28 h-28 rounded-full mb-4 shadow-lg border-4 border-cyan-100"
                />
                <h3 className="font-bold text-lg text-gray-900">Helen Mulu</h3>
                <p className="text-gray-600">Marketing Lead</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer is rendered globally in App.tsx */}
    </div>
  );
};

export default About;

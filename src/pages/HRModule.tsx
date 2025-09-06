import React from "react";
import Footer from "../components/Footer";

const HRModule: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans pt-24">
      {/* Main Content starts below, with extra top padding for navbar */}
      <section
        id="hero"
        className="relative pb-16 bg-gradient-to-br from-blue-50 via-orange-50 to-orange-100 overflow-hidden"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center min-h-[500px] relative z-10">
          {/* Left: Text Content */}
          <div className="md:w-1/2 text-left mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow">
              <span className="text-orange-500">Smart HR & Payroll</span>
              <br />
              for Modern Teams
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-serif italic max-w-xl mb-10">
              Streamline hiring, attendance, payroll, and employee records — all
              in one secure platform built for local compliance and business
              realities.
            </p>
            <div className="flex gap-5 flex-wrap mb-8">
              <a
                href="#"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow hover:bg-blue-500 hover:text-black transition"
              >
                Start Free Trial
              </a>
              <a
                href="#video"
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow hover:bg-orange-400 hover:text-black transition"
              >
                Schedule for Demo
              </a>
            </div>
          </div>
          {/* Right: Floating Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-orange-200 rounded-full opacity-40 blur-2xl z-0"></div>
              <img
                src="HRD.jpeg"
                alt="HR Dashboard"
                className="w-full max-w-md animate-float relative z-10 shadow-2xl rounded-2xl border-4 border-white"
              />
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-200 rounded-full opacity-30 blur-2xl z-0"></div>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          .animate-float { animation: float 3s ease-in-out infinite; }
        `}</style>
        {/* Decorative SVGs */}
        <svg
          className="absolute top-0 left-0 w-64 h-64 opacity-10 z-0"
          fill="none"
          viewBox="0 0 400 400"
        >
          <circle cx="200" cy="200" r="200" fill="#f59e42" />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-80 h-80 opacity-10 z-0"
          fill="none"
          viewBox="0 0 400 400"
        >
          <circle cx="200" cy="200" r="200" fill="#3b82f6" />
        </svg>
      </section>

      {/* Video About HR Module Section */}
      <section id="video" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">
              See the HR Module in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch how ArciSol HR can transform your human resource management.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl aspect-video rounded-lg shadow-lg min-h-[350px] overflow-hidden flex items-center justify-center bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/enyLIVOkDqI"
                title="HR Module Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* Download Brochure Banner */}
      <section className="py-6 bg-blue-400">
        <div className="container mx-auto px-4">
          <a
            href="#"
            className="block w-full md:w-auto bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-md shadow hover:bg-orange-700 transition text-left"
            style={{ maxWidth: 600, marginLeft: 0 }}
          >
            Download HR Module Brochure
          </a>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Core Features
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Comprehensive tools to manage your entire employee lifecycle
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Employee Information Management */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-user-tie text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Employee Information Management
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>Centralized digital records for all employees.</li>
                <li>Store documents: contracts, IDs, certifications.</li>
                <li>Track employee history, promotions, and role changes.</li>
              </ul>
            </div>
            {/* Recruitment & Onboarding */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-handshake text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Recruitment & Onboarding
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>Post job openings and manage applications.</li>
                <li>Candidate evaluation and interview tracking.</li>
                <li>Digital onboarding checklists and documentation.</li>
              </ul>
            </div>
            {/* Attendance & Leave Management */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-calendar-check text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Attendance & Leave Management
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>Shift scheduling and roster planning.</li>
                <li>Time tracking via biometric devices or manual input.</li>
                <li>Leave requests and approvals with balance tracking.</li>
              </ul>
            </div>
            {/* Payroll Processing */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-money-check text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Payroll Processing
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>
                  Automatic salary calculation based on attendance, deductions,
                  and benefits.
                </li>
                <li>Multi-currency support.</li>
                <li>Tax, pension, and statutory deductions auto-applied.</li>
              </ul>
            </div>
            {/* Performance & Appraisals */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-chart-line text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Performance & Appraisals
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>Track KPIs and performance reviews.</li>
                <li>Set goals and track achievement progress.</li>
              </ul>
            </div>
            {/* Employee Self-Service Portal */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-user-lock text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Employee Self-Service Portal
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>Access pay slips and tax forms.</li>
                <li>
                  Submit leave requests or update personal details online.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ArciSol HR Module Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">
              Why Choose ArciSol HR Module?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built for local workforce needs, inspired by global best
              practices.
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-orange-500">
              <h3 className="font-bold text-lg mb-2">
                Built for Local Workforce Needs
              </h3>
              <p className="text-gray-700">
                Unlike generic HR software, ArciSol’s HR Module is designed with
                local labor laws, payroll structures, and cultural practices in
                mind — ensuring compliance and smooth adoption from day one.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2">
                Employee-Centric Approach
              </h3>
              <p className="text-gray-700">
                We believe HR isn’t just about records — it’s about empowering
                people. Our system includes self-service portals, performance
                tracking, and training management to boost employee engagement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-2">
                Compliance Without the Headache
              </h3>
              <p className="text-gray-700">
                Automated tax calculations, labor regulation updates, and
                digital contract storage mean you can stay compliant without
                hiring extra compliance staff.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-pink-500">
              <h3 className="font-bold text-lg mb-2">
                Scalable for Any Organization Size
              </h3>
              <p className="text-gray-700">
                Whether you have 10 employees or 10,000, ArciSol HR grows with
                you. Add departments, branches, and workflows without system
                limitations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-cyan-500">
              <h3 className="font-bold text-lg mb-2">
                Inspired by Global Best Practices
              </h3>
              <p className="text-gray-700">
                We blend Silicon Valley efficiency with local operational wisdom
                — giving you a modern, intuitive experience that still
                understands the realities of your region.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-10 flex-wrap">
            <a
              href="#"
              className="bg-orange-600 text-white px-8 py-3 rounded-md font-bold shadow hover:bg-orange-700 transition text-lg"
            >
              Start Free Trial
            </a>
            <a
              href="#contact-us"
              className="bg-white border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-md font-bold shadow hover:bg-gray-100 transition text-lg"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HRModule;

import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AgencyModule: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans pt-24">
      <Navbar />
      {/* Main Content starts below, with extra top padding for navbar */}
      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 via-orange-50 to-orange-100 overflow-hidden"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center min-h-[500px] relative z-10">
          {/* Left: Text Content */}
          <div className="md:w-1/2 text-left mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow border-b-4 border-orange-400 pb-2">
              Agency Module
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-serif italic max-w-xl mb-10">
              Comprehensive foreign recruitment management solution designed to
              streamline your agency operations.
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
                Schedule Demo
              </a>
            </div>
          </div>
          {/* Right: Floating Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-orange-200 rounded-full opacity-40 blur-2xl z-0"></div>
              <img
                src="https://arcisol.com/assets/heroBgImgUpdated.png"
                alt="ArciSol Recruitment Solution"
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

      {/* Video About Agency Module Section */}
      <section id="video" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">
              See the Agency Module in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch how ArciSol Agency can transform your recruitment
              operations.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl aspect-video rounded-lg shadow-lg min-h-[350px] overflow-hidden flex items-center justify-center bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/enyLIVOkDqI"
                title="Agency Module Demo"
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
            Download Agency Module Brochure
          </a>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Key Features
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Explore the powerful features designed to streamline your
              recruitment process.
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Intelligent Document Management */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-file-alt text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Intelligent Document Management
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>
                  Upload, store, and extract data from passports and documents
                  using OCR.
                </li>
                <li>Visa form interface for easy document handling.</li>
              </ul>
            </div>
            {/* Application Lifecycle Management */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-tasks text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Application Lifecycle Management
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>Track applications from draft to deployment.</li>
                <li>Real-time status updates and KPIs dashboard.</li>
              </ul>
            </div>
            {/* Partner Portal */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-users text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Partner Portal
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>Invite partners and assign custom CV templates.</li>
                <li>
                  Real-time collaboration for resume selection and processing.
                </li>
              </ul>
            </div>
            {/* Automated Form Generation */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-file-signature text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Automated Form Generation
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>Generate visa applications and forms with barcodes.</li>
                <li>Easy embassy processing and tracking.</li>
              </ul>
            </div>
            {/* CV Sharing & Export */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-share-square text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                CV Sharing & Export
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>Download candidate CVs as PDF.</li>
                <li>Share CVs via social media with one click.</li>
              </ul>
            </div>
            {/* Candidate Registration */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-user-plus text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Candidate Registration
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>
                  KPIs, recent activities, notifications, and quick links.
                </li>
                <li>Comprehensive reporting capabilities.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transform How Your Recruitment Agency Operates Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">
              Transform How Your Recruitment Agency Operates
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Digitize and streamline your operations from candidate
              registration to deployment.
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-orange-500">
              <h3 className="font-bold text-lg mb-2">
                Comprehensive Candidate Management
              </h3>
              <p className="text-gray-700">
                Customizable CV templates and automated document processing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2">
                Seamless Partner Collaboration
              </h3>
              <p className="text-gray-700">
                Real-time communication and document sharing capabilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-2">
                End-to-End Application Tracking
              </h3>
              <p className="text-gray-700">
                Track every stage from draft to deployment with stage-specific
                data collection and validation.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <img
              src="https://arcisol.com/assets/officeApplicantImg.png"
              alt="Applicant"
              className="rounded-lg shadow-lg max-h-64"
            />
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">
              Integrations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Seamless connectivity with key platforms in the recruitment
              process.
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500 flex flex-col items-center">
              <img
                src="https://arcisol.com/assets/integrationPlatforms/enjazlogo.png"
                alt="Enjaz"
                className="h-12 mb-4"
              />
              <h3 className="font-bold text-lg mb-2">Enjaz</h3>
              <p className="text-gray-700">
                Automate visa entry application PDFs with barcodes and reduce
                manual operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500 flex flex-col items-center">
              <img
                src="https://arcisol.com/assets/integrationPlatforms/musanedlogo.png"
                alt="Musaned"
                className="h-12 mb-4"
              />
              <h3 className="font-bold text-lg mb-2">Musaned</h3>
              <p className="text-gray-700">
                Seamlessly transfer data to Musaned during registration,
                minimizing manual data entry.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-orange-500 flex flex-col items-center">
              <img
                src="https://arcisol.com/assets/integrationPlatforms/elmislogo.png"
                alt="ELMIS"
                className="h-12 mb-4"
              />
              <h3 className="font-bold text-lg mb-2">E-LMIS</h3>
              <p className="text-gray-700">
                Integrate with ELMIS to streamline recruitment with automated
                data population from ArciSol.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Agency Module Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">
              Why Choose Our Agency Module?
            </h2>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-orange-500">
              <h3 className="font-bold text-lg mb-2">Lightning Fast</h3>
              <p className="text-gray-700">
                Process applications 10x faster with automated workflows and
                intelligent document processing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2">Secure & Compliant</h3>
              <p className="text-gray-700">
                Bank-level security with full compliance to international
                recruitment regulations and data protection laws.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
              <p className="text-gray-700">
                Round-the-clock expert support to ensure your recruitment
                operations never skip a beat.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-10 flex-wrap">
            <a
              href="#"
              className="bg-orange-600 text-white px-8 py-3 rounded-md font-bold shadow hover:bg-orange-700 transition text-lg"
            >
              Get Started Today
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

export default AgencyModule;

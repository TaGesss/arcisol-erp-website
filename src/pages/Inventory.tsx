import React from "react";
import Footer from "../components/Footer";

const Inventory: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 via-orange-50 to-orange-100 overflow-hidden"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center min-h-[500px] relative z-10">
          {/* Left: Text Content */}
          <div className="md:w-1/2 text-left mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow">
              Smart Inventory & Procurement for Smarter Businesses
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-serif italic max-w-xl mb-10">
              Control stock levels, streamline purchasing, and reduce wastage —
              all in one powerful platform tailored to local business realities.
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
                src="inventory-dashboard.png"
                alt="Inventory Dashboard"
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

      {/* Video About Inventory Module Section */}
      <section id="video" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">
              See the Inventory & Procurement Module in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch how ArciSol Inventory can transform your supply chain and
              stock management.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl aspect-video rounded-lg shadow-lg min-h-[350px] overflow-hidden flex items-center justify-center bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/enyLIVOkDqI"
                title="Inventory Module Demo"
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
            Download Module Brochure
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
              Comprehensive tools to manage your entire inventory and
              procurement lifecycle
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Inventory Management */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-boxes text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Inventory Management
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>Real-time stock tracking per location/warehouse.</li>
                <li>Stock valuation methods (FIFO, LIFO, Weighted Average).</li>
                <li>Batch & serial number tracking.</li>
                <li>Expiry date monitoring for perishable goods.</li>
              </ul>
            </div>
            {/* Procurement Management */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-shopping-cart text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Procurement Management
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>Purchase requisition and approval workflows.</li>
                <li>Automated purchase order creation.</li>
                <li>Supplier database with rating and performance tracking.</li>
                <li>Contract and price list management.</li>
              </ul>
            </div>
            {/* Stock Movements */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-exchange-alt text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Stock Movements
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>Internal transfers between warehouses.</li>
                <li>Goods receipt and goods issue tracking.</li>
                <li>Return-to-supplier handling.</li>
              </ul>
            </div>
            {/* Reporting & Analytics */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-chart-bar text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Reporting & Analytics
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>Inventory aging reports.</li>
                <li>Supplier spend analysis.</li>
                <li>Purchase vs. consumption comparison.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ArciSol Inventory & Procurement Module Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">
              Why Choose ArciSol Inventory & Procurement Module?
            </h2>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-orange-500">
              <h3 className="font-bold text-lg mb-2">
                Designed for Local Supply Chains
              </h3>
              <p className="text-gray-700">
                ArciSol understands regional supplier networks, import/export
                workflows, and local market dynamics, making it ideal for
                Ethiopian and African business environments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2">
                Full Inventory Visibility
              </h3>
              <p className="text-gray-700">
                Track stock levels across multiple warehouses, branches, and
                retail points in real-time — no more overstocking,
                understocking, or guessing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-2">
                Smarter Procurement Decisions
              </h3>
              <p className="text-gray-700">
                Automated purchase requisitions, supplier comparisons, and
                approval workflows help you buy the right products, at the right
                time, at the right price.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-pink-500">
              <h3 className="font-bold text-lg mb-2">
                Seamless Module Integration
              </h3>
              <p className="text-gray-700">
                Your inventory and procurement data sync directly with Finance,
                Sales, and Production — ensuring smooth operations and accurate
                reporting.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-cyan-500">
              <h3 className="font-bold text-lg mb-2">Reduce Waste & Loss</h3>
              <p className="text-gray-700">
                Batch tracking, expiry date management, and audit logs minimize
                product loss, theft, and stock mismanagement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
              <h3 className="font-bold text-lg mb-2">Scalable & Flexible</h3>
              <p className="text-gray-700">
                Whether you manage a single storeroom or a multi-branch
                operation, ArciSol adapts to your business structure without
                over complication.
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

export default Inventory;

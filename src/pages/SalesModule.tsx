import React from "react";
import Footer from "../components/Footer";

const SalesModule: React.FC = () => {
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
              Sell Smarter, Close Faster, Grow Bigger
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-serif italic max-w-xl mb-10">
              From lead to payment, manage your entire sales cycle in one
              intelligent platform — built for local market realities and global
              competitiveness.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose ArciSol Sales Module Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">
              Why Choose ArciSol Sales Module?
            </h2>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-orange-500">
              <h3 className="font-bold text-lg mb-2">
                Tailored for Local & Regional Markets
              </h3>
              <p className="text-gray-700">
                ArciSol is built to handle Ethiopian pricing structures, local
                tax rules, and diverse sales channels — whether you’re selling
                B2B, B2C, or wholesale.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2">
                Complete Sales Pipeline Visibility
              </h3>
              <p className="text-gray-700">
                From quote to cash, track every stage of the sales process with
                real-time updates, ensuring no lead or opportunity slips through
                the cracks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-2">
                Faster Quoting & Invoicing
              </h3>
              <p className="text-gray-700">
                Generate custom quotes, pro-forma invoices, and receipts in
                seconds, fully compliant with local regulations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-pink-500">
              <h3 className="font-bold text-lg mb-2">
                Integrated with All Modules
              </h3>
              <p className="text-gray-700">
                Sales data flows directly into Finance, Inventory, CRM, and
                Procurement, keeping numbers accurate and eliminating duplicate
                work.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-cyan-500">
              <h3 className="font-bold text-lg mb-2">
                Performance Insights That Drive Growth
              </h3>
              <p className="text-gray-700">
                Monitor team performance, product sales trends, and customer
                buying patterns to make informed business decisions instantly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
              <h3 className="font-bold text-lg mb-2">
                Multi-Channel & Multi-Currency Ready
              </h3>
              <p className="text-gray-700">
                Sell across in-person, online, and distributor networks with
                full currency and tax adaptability.
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

export default SalesModule;

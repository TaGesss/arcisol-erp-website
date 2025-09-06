import React from "react";
import Footer from "../components/Footer";

const FinanceModule: React.FC = () => {
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
            <span className="inline-block bg-orange-100 text-orange-600 font-bold px-4 py-1 rounded-full mb-4 text-sm tracking-widest shadow">
              NEW FOR 2025
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow">
              Stay in Control of Your Business Finances
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-serif italic max-w-xl mb-10">
              Track income, expenses, budgets, and compliance in one secure
              platform — built to match local accounting standards and reporting
              needs.
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
                alt="Finance Dashboard"
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

      {/* Video About Finance Module Section */}
      <section id="video" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">
              See the Finance Module in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch how ArciSol Finance can transform your financial management.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl aspect-video rounded-lg shadow-lg min-h-[350px] overflow-hidden flex items-center justify-center bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/enyLIVOkDqI"
                title="Finance Module Demo"
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
            Download Finance Module Brochure
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
              Comprehensive tools to manage your entire financial lifecycle
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* General Ledger */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-book text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                General Ledger
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>Multi-level chart of accounts.</li>
                <li>Journal entries, adjustments, and closing entries.</li>
                <li>Support for multiple financial periods.</li>
              </ul>
            </div>
            {/* Accounts Payable */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-file-invoice-dollar text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Accounts Payable
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>Supplier invoice management.</li>
                <li>Payment scheduling and tracking.</li>
                <li>Bulk payment processing.</li>
              </ul>
            </div>
            {/* Accounts Receivable */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-cash-register text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Accounts Receivable
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>Customer invoicing and receipt tracking.</li>
                <li>Automated reminders for overdue payments.</li>
                <li>Credit limit and aging reports.</li>
              </ul>
            </div>
            {/* Budgeting & Forecasting */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-chart-pie text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Budgeting & Forecasting
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>Annual and monthly budget setup.</li>
                <li>Variance analysis against actuals.</li>
              </ul>
            </div>
            {/* Multi-Currency & Multi-Company Support */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-coins text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Multi-Currency & Multi-Company Support
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>Exchange rate management.</li>
                <li>Consolidated reporting across companies.</li>
              </ul>
            </div>
            {/* Tax & Compliance */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 hover:shadow-lg transition">
              <i className="fas fa-balance-scale text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Tax & Compliance
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                <li>VAT, withholding tax, and payroll tax integration.</li>
                <li>Audit-ready financial statements.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ArciSol Finance Module Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">
              Why Choose ArciSol Finance Module?
            </h2>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-orange-500">
              <h3 className="font-bold text-lg mb-2">
                Local Compliance Built-In
              </h3>
              <p className="text-gray-700">
                ArciSol Finance is preconfigured for Ethiopian and regional
                accounting standards, VAT/GST rules, and currency formats — so
                you stay compliant without spending weeks on setup.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2">
                End-to-End Financial Control
              </h3>
              <p className="text-gray-700">
                From accounts payable/receivable to bank reconciliation and
                financial statements, everything is managed in one place with
                complete visibility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-2">
                Real-Time Financial Insights
              </h3>
              <p className="text-gray-700">
                No more waiting for month-end reports. Get instant dashboards
                showing your cash flow, expenses, and profitability to make
                smarter, faster decisions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-pink-500">
              <h3 className="font-bold text-lg mb-2">
                Seamless Module Integration
              </h3>
              <p className="text-gray-700">
                Finance connects effortlessly with Sales, Inventory,
                Procurement, HR, and more — ensuring your numbers are always
                accurate and up-to-date.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-cyan-500">
              <h3 className="font-bold text-lg mb-2">Scalable for Growth</h3>
              <p className="text-gray-700">
                Whether you’re a startup, SME, or enterprise, the Finance Module
                can handle multiple branches, companies, and currencies without
                complexity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
              <h3 className="font-bold text-lg mb-2">
                Security & Audit Readiness
              </h3>
              <p className="text-gray-700">
                Enterprise-grade encryption, user access controls, and built-in
                audit trails protect your data and prepare you for any
                inspection.
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

export default FinanceModule;

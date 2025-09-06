import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-white pt-[120px] pb-24 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-3 flex flex-col md:flex-row items-center min-h-[60vh]">
          {/* Left: Text Content */}
          <div className="md:w-1/2 text-left mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-5">
              <span className="text-orange-400">ArciSol ERP</span>
              <br />
              <span className="text-gray-800">
                The All-in-One ERP Solution for Growing Businesses
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-serif italic max-w-lg mb-10">
              Streamline your operations, reduce costs, and scale effortlessly —
              from procurement to payroll.
            </p>
            <div className="flex gap-5 flex-wrap">
              <Link
                to="/demo"
                className="bg-orange-400 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-500 hover:text-black transition transform"
              >
                Request Demo
              </Link>
              <Link
                to="/demo"
                className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-400 hover:text-black transition transform"
              >
                Watch Product Video
              </Link>
            </div>
          </div>
          {/* Right: Floating Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/Image.png"
              alt="Floating Illustration"
              className="w-full max-w-[400px] min-w-[220px] h-auto animate-float drop-shadow-xl"
              style={{ aspectRatio: "1/1" }}
            />
          </div>
        </div>
      </section>

      {/* Floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-200 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
              Comprehensive ERP Modules
            </h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
              Our modular approach allows you to start with what you need and
              expand as you grow
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* HR Card */}
            <div className="bg-white p-6 rounded-lg shadow border border-blue-300 hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
              <div className="flex justify-left mb-4">
                <i className="fas fa-users text-4xl text-orange-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-left">
                HR
              </h3>
              <h4 className="text-lg font-semibold text-orange-400 mb-3 text-left">
                Human Resource Management
              </h4>
              <p className="text-gray-700 mb-4 text-left">
                Complete HR management system covering employee lifecycle,
                payroll processing, performance management, attendance tracking,
                and organizational development.
              </p>
              <p className="text-gray-800 font-semibold mb-2">Key Features:</p>
              <ul className="list-none text-gray-700 mb-4 space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-id-badge text-orange-500 mr-2"></i>
                  Employee Management
                </li>
                <li className="flex items-center">
                  <i className="fas fa-money-check-alt text-orange-500 mr-2"></i>
                  Payroll Processing
                </li>
                <li className="flex items-center">
                  <i className="fas fa-chart-line text-orange-500 mr-2"></i>
                  Performance Tracking
                </li>
                <li className="flex items-center">
                  <i className="fas fa-calendar-check text-orange-500 mr-2"></i>
                  Attendance System
                </li>
              </ul>
              <Link
                to="/hr-module#hero"
                className="block w-full text-center bg-orange-600 text-white font-semibold px-4 py-3 rounded hover:bg-blue-500 transition"
              >
                Learn More
              </Link>
            </div>
            {/* Finance Card */}
            <div className="bg-white p-6 rounded-lg shadow border border-blue-300 hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
              <div className="flex justify-left mb-4">
                <i className="fas fa-coins text-4xl text-orange-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-left">
                Finance
              </h3>
              <h4 className="text-lg font-semibold text-orange-400 mb-3 text-left">
                Financial Management System
              </h4>
              <p className="text-gray-700 mb-4 text-left">
                Robust financial management platform for accounting, budgeting,
                financial reporting, invoice management, and comprehensive
                financial analytics.
              </p>
              <p className="text-gray-800 font-semibold mb-2">Key Features:</p>
              <ul className="list-none text-gray-700 mb-4 space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-calculator text-orange-500 mr-2"></i>
                  Accounting
                </li>
                <li className="flex items-center">
                  <i className="fas fa-wallet text-orange-500 mr-2"></i>
                  Budgeting
                </li>
                <li className="flex items-center">
                  <i className="fas fa-file-invoice-dollar text-orange-500 mr-2"></i>
                  Financial Reports
                </li>
                <li className="flex items-center">
                  <i className="fas fa-file-invoice text-orange-500 mr-2"></i>
                  Invoice Management
                </li>
              </ul>
              <Link
                to="/finance-module#hero"
                className="block w-full text-center bg-orange-600 text-white font-semibold px-4 py-3 rounded hover:bg-blue-500 transition"
              >
                Learn More
              </Link>
            </div>
            {/* Inventory Card */}
            <div className="bg-white p-6 rounded-lg shadow border border-blue-300 hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
              <div className="flex justify-left mb-4">
                <i className="fas fa-boxes text-4xl text-orange-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-left">
                Inventory
              </h3>
              <h4 className="text-lg font-semibold text-orange-400 mb-3 text-left">
                Inventory Management
              </h4>
              <p className="text-gray-700 mb-4 text-left">
                Advanced inventory control system with real-time stock tracking,
                automated reordering, warehouse management, and comprehensive
                supply chain optimization.
              </p>
              <p className="text-gray-800 font-semibold mb-2">Key Features:</p>
              <ul className="list-none text-gray-700 mb-4 space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-cubes text-orange-500 mr-2"></i>Stock
                  Tracking
                </li>
                <li className="flex items-center">
                  <i className="fas fa-warehouse text-orange-500 mr-2"></i>
                  Warehouse Management
                </li>
                <li className="flex items-center">
                  <i className="fas fa-sync-alt text-orange-500 mr-2"></i>
                  Automated Reordering
                </li>
                <li className="flex items-center">
                  <i className="fas fa-truck-moving text-orange-500 mr-2"></i>
                  Supply Chain
                </li>
              </ul>
              <Link
                to="/inventory#hero"
                className="block w-full text-center bg-orange-600 text-white font-semibold px-4 py-3 rounded hover:bg-blue-500 transition"
              >
                Learn More
              </Link>
            </div>
            {/* Sales Card */}
            <div className="bg-white p-6 rounded-lg shadow border border-blue-300 hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
              <div className="flex justify-left mb-4">
                <i className="fas fa-chart-line text-4xl text-orange-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-left">
                Sales
              </h3>
              <h4 className="text-lg font-semibold text-orange-400 mb-3 text-left">
                Sales Management Platform
              </h4>
              <p className="text-gray-700 mb-4 text-left">
                Comprehensive sales management solution with CRM integration,
                lead tracking, opportunity management, sales analytics, and
                performance monitoring.
              </p>
              <p className="text-gray-800 font-semibold mb-2">Key Features:</p>
              <ul className="list-none text-gray-700 mb-4 space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-user-plus text-orange-500 mr-2"></i>CRM
                  Integration
                </li>
                <li className="flex items-center">
                  <i className="fas fa-bullseye text-orange-500 mr-2"></i>Lead
                  Management
                </li>
                <li className="flex items-center">
                  <i className="fas fa-chart-pie text-orange-500 mr-2"></i>Sales
                  Analytics
                </li>
                <li className="flex items-center">
                  <i className="fas fa-project-diagram text-orange-500 mr-2"></i>
                  Pipeline Tracking
                </li>
              </ul>
              <Link
                to="/sales-module#hero"
                className="block w-full text-center bg-orange-600 text-white font-semibold px-4 py-3 rounded hover:bg-blue-500 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Other Features Section */}
      <section id="other-features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-5">
                Niche Business Modules
              </h2>
              <p className="text-lg md:text-2xl text-gray-600 mb-6">
                Specialized modules designed to automate specific business
                domains and industry requirements.
              </p>
              <div className="bg-blue-400 text-white text-lg text-center py-8 px-6 rounded-md animate-float">
                <p className="mb-5 font-medium">
                  Did you want A Custom Module?
                </p>
                <a
                  href="#contact"
                  className="bg-orange-400 text-white px-6 py-3 rounded-md font-bold hover:bg-white hover:text-black transition transform"
                >
                  Contact our Team
                </a>
              </div>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow border border-blue-300 hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
                <div className="flex justify-left mb-4">
                  <i className="fas fa-globe-americas text-4xl text-orange-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 text-left">
                  Agency
                </h3>
                <h4 className="text-lg font-semibold text-orange-400 mb-3 text-left">
                  Foreign Recruitment Management
                </h4>
                <p className="text-gray-700 mb-4 text-left">
                  Comprehensive solution for foreign recruitment agencies to
                  manage candidate applications, visa processing, documentation,
                  and client relationships with streamlined workflows.
                </p>
                <p className="text-gray-800 font-semibold mb-2">
                  Key Features:
                </p>
                <ul className="list-none text-gray-700 mb-4 space-y-2">
                  <li className="flex items-center">
                    <i className="fas fa-user-tie text-orange-500 mr-2"></i>
                    Candidate Management
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-passport text-orange-500 mr-2"></i>Visa
                    Processing
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-file-alt text-orange-500 mr-2"></i>
                    Document Tracking
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-briefcase text-orange-500 mr-2"></i>
                    Client Portal
                  </li>
                </ul>
                <Link
                  to="/agency-module#hero"
                  className="block w-full text-center bg-orange-600 text-white font-semibold px-4 py-3 rounded hover:bg-blue-500 transition"
                >
                  Learn More
                </Link>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow border border-blue-300 hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
                <div className="flex justify-left mb-4">
                  <i className="fas fa-building text-4xl text-orange-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 text-left">
                  Rental
                </h3>
                <h4 className="text-lg font-semibold text-orange-400 mb-3 text-left">
                  Property Management
                </h4>
                <p className="text-gray-700 mb-4 text-left">
                  Complete rental property management system for real estate
                  professionals to manage properties, tenants, lease agreements,
                  maintenance, and financial tracking.
                </p>
                <p className="text-gray-800 font-semibold mb-2">
                  Key Features:
                </p>
                <ul className="list-none text-gray-700 mb-4 space-y-2">
                  <li className="flex items-center">
                    <i className="fas fa-building text-orange-500 mr-2"></i>
                    Property Management
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-user-friends text-orange-500 mr-2"></i>
                    Tenant Portal
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-file-contract text-orange-500 mr-2"></i>
                    Lease Tracking
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-tools text-orange-500 mr-2"></i>
                    Maintenance Requests
                  </li>
                </ul>
                <Link
                  to="/rental-module#hero"
                  className="block w-full text-center bg-orange-600 text-white font-semibold px-4 py-3 rounded hover:bg-blue-500 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="core-values" className="py-20 bg-gray-200 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl md:text-2xl text-orange-500 max-w-2xl mx-auto mb-6 italic">
              The principles that guide everything we do at ArciSol
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* User-Centric */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 flex flex-col items-center text-center hover:shadow-lg transition">
              <i className="fas fa-user-friends text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                User-Centric
              </h3>
              <p className="text-gray-600">
                Designed for real people—intuitive, accessible, and easy to
                adopt for every user.
              </p>
            </div>
            {/* Think Global, Build Local */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 flex flex-col items-center text-center hover:shadow-lg transition">
              <i className="fas fa-globe-africa text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                Think Global, Build Local
              </h3>
              <p className="text-gray-600">
                Global best practices, tailored for local laws, languages, and
                business culture.
              </p>
            </div>
            {/* Agility & Speed */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 flex flex-col items-center text-center hover:shadow-lg transition">
              <i className="fas fa-bolt text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                Agility & Speed
              </h3>
              <p className="text-gray-600">
                Fast updates and quick adaptation—so you’re always ahead of
                change.
              </p>
            </div>
            {/* Security & Data Sovereignty */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 flex flex-col items-center text-center hover:shadow-lg transition">
              <i className="fas fa-shield-alt text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                Security & Data Sovereignty
              </h3>
              <p className="text-gray-600">
                Enterprise-grade security and local hosting to keep your data
                safe and compliant.
              </p>
            </div>
            {/* Scalable from Day One */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 flex flex-col items-center text-center hover:shadow-lg transition">
              <i className="fas fa-layer-group text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                Scalable from Day One
              </h3>
              <p className="text-gray-600">
                From startup to enterprise—ArciSol grows with you, no costly
                migrations.
              </p>
            </div>
            {/* Partnership Over Transaction */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 flex flex-col items-center text-center hover:shadow-lg transition">
              <i className="fas fa-handshake text-3xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                Partnership Over Transaction
              </h3>
              <p className="text-gray-600">
                We’re your partner, not just a vendor—offering support,
                training, and custom solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Industry Specific Solutions
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Tailored ERP solutions designed for your industry's unique
              challenges
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Foreign Recruitment & Employment Agencies */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 flex flex-col h-full hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <i className="fas fa-passport text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Foreign Recruitment & Employment Agencies
              </h3>
              <h4 className="text-md font-semibold text-orange-500 mb-2">
                Streamline Your Recruitment Operations
              </h4>
              <p className="text-gray-600 mb-4">
                Manage the full recruitment cycle — from candidate registration
                to overseas placement — with complete compliance and
                transparency.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 text-left">
                <li>Track candidate profiles, documents, and interviews.</li>
                <li>Manage agency contracts and government requirements.</li>
                <li>
                  Automate payroll and handle multi-currency transactions.
                </li>
              </ul>
              <a
                href="Agency Module.html"
                className="mt-auto block w-full text-center bg-orange-600 text-white font-semibold px-4 py-3 rounded hover:bg-blue-500 transition"
              >
                Learn More
              </a>
            </div>
            {/* Real Estate & Property Rental */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 flex flex-col h-full hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <i className="fas fa-home text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Real Estate & Property Rental
              </h3>
              <h4 className="text-md font-semibold text-orange-500 mb-2">
                Simplify Property & Asset Rentals
              </h4>
              <p className="text-gray-600 mb-4">
                Oversee your rental business from a single dashboard — whether
                it’s properties, equipment, or vehicles.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 text-left">
                <li>Contract and lease management.</li>
                <li>Automated recurring invoicing and payment tracking.</li>
                <li>Occupancy and maintenance tracking.</li>
              </ul>
              <a
                href="Rental Module.html"
                className="mt-auto block w-full text-center bg-orange-600 text-white font-semibold px-4 py-3 rounded hover:bg-blue-500 transition"
              >
                Learn More
              </a>
            </div>
            {/* Retail & Wholesale Trade */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 flex flex-col h-full hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <i className="fas fa-store text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Retail & Wholesale Trade
              </h3>
              <h4 className="text-md font-semibold text-orange-500 mb-2">
                Boost Sales and Optimize Inventory
              </h4>
              <p className="text-gray-600 mb-4">
                Control stock, speed up sales, and make smarter purchasing
                decisions.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 text-left">
                <li>Multi-branch inventory with barcode scanning.</li>
                <li>Supplier order management and purchase automation.</li>
                <li>Customer history and sales performance analytics.</li>
              </ul>
              <a
                href="#"
                className="mt-auto block w-full text-center bg-orange-600 text-white font-semibold px-4 py-3 rounded hover:bg-blue-500 transition"
              >
                Learn More
              </a>
            </div>
            {/* Manufacturing & Production */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 flex flex-col h-full hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <i className="fas fa-industry text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Manufacturing & Production
              </h3>
              <h4 className="text-md font-semibold text-orange-500 mb-2">
                Plan, Produce, and Deliver Efficiently
              </h4>
              <p className="text-gray-600 mb-4">
                Get a full view of your production process and resource usage.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 text-left">
                <li>Track raw materials, WIP, and finished goods.</li>
                <li>Auto-reorder materials based on stock thresholds.</li>
                <li>Integrated cost-of-production and profit analysis.</li>
              </ul>
              <a
                href="#"
                className="mt-auto block w-full text-center bg-orange-600 text-white font-semibold px-4 py-3 rounded hover:bg-blue-500 transition"
              >
                Learn More
              </a>
            </div>
            {/* Service Agencies */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 flex flex-col h-full hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <i className="fas fa-concierge-bell text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Service Agencies (Security, Cleaning, Maintenance)
              </h3>
              <h4 className="text-md font-semibold text-orange-500 mb-2">
                Organize Teams and Maximize Service Quality
              </h4>
              <p className="text-gray-600 mb-4">
                Keep your operations lean and your clients happy.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 text-left">
                <li>Staff scheduling and deployment.</li>
                <li>Timesheet and payroll automation.</li>
                <li>Recurring service contract management.</li>
              </ul>
              <a
                href="#"
                className="mt-auto block w-full text-center bg-orange-600 text-white font-semibold px-4 py-3 rounded hover:bg-blue-500 transition"
              >
                Learn More
              </a>
            </div>
            {/* NGOs & Government Projects */}
            <div className="bg-white p-8 rounded-lg shadow border border-blue-300 flex flex-col h-full hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <i className="fas fa-hand-holding-heart text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                NGOs & Government Projects
              </h3>
              <h4 className="text-md font-semibold text-orange-500 mb-2">
                Deliver Accountability and Transparency
              </h4>
              <p className="text-gray-600 mb-4">
                Run donor or government-funded projects with full compliance.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 text-left">
                <li>Project-based budgeting and accounting.</li>
                <li>Transparent procurement and audit reporting.</li>
                <li>HR and payroll for project staff.</li>
              </ul>
              <a
                href="#"
                className="mt-auto block w-full text-center bg-orange-600 text-white font-semibold px-4 py-3 rounded hover:bg-blue-500 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section
        id="why-choose"
        className="py-20 bg-gray-200 from-orange-50 via-orange-100 to-orange-200 scroll-mt-24"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-3 tracking-tight drop-shadow">
              Why Choose ArciSol ERP?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-serif italic">
              Built with global best practices, perfected for local realities.
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10">
            {/* 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-orange-500 hover:scale-105 transition">
              <i className="fas fa-globe-africa text-3xl text-orange-500 mb-3"></i>
              <h3 className="font-bold text-lg mb-1">
                Tailored to Local Business Needs
              </h3>
              <p className="text-gray-600 text-sm">
                Designed for Ethiopian and regional workflows, tax rules,
                currencies, and compliance — not just a foreign template.
              </p>
            </div>
            {/* 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-blue-500 hover:scale-105 transition">
              <i className="fas fa-layer-group text-3xl text-blue-500 mb-3"></i>
              <h3 className="font-bold text-lg mb-1">Modular & Scalable</h3>
              <p className="text-gray-600 text-sm">
                Start with Agency, HR, Finance, Inventory, Sales, Rental —
                expand as you grow.
              </p>
            </div>
            {/* 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-orange-400 hover:scale-105 transition">
              <i className="fas fa-cloud text-3xl text-orange-400 mb-3"></i>
              <h3 className="font-bold text-lg mb-1">
                Cloud or On-Premise Flexibility
              </h3>
              <p className="text-gray-600 text-sm">
                Deploy in the cloud for accessibility or on-premise for full
                control. Choose what fits your IT and data policies.
              </p>
            </div>
            {/* 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-green-500 hover:scale-105 transition">
              <i className="fas fa-sitemap text-3xl text-green-500 mb-3"></i>
              <h3 className="font-bold text-lg mb-1">
                Multi-Company & Multi-Branch Ready
              </h3>
              <p className="text-gray-600 text-sm">
                Manage multiple entities, branches, or departments in one ERP
                with centralized reporting and controls.
              </p>
            </div>
            {/* 5 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-pink-500 hover:scale-105 transition">
              <i className="fas fa-rocket text-3xl text-pink-500 mb-3"></i>
              <h3 className="font-bold text-lg mb-1">
                Fast Implementation & Easy Adoption
              </h3>
              <p className="text-gray-600 text-sm">
                A user interface designed for local workflows means your team
                adapts quickly, without months of costly training.
              </p>
            </div>
            {/* 6 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-purple-500 hover:scale-105 transition">
              <i className="fas fa-shield-alt text-3xl text-purple-500 mb-3"></i>
              <h3 className="font-bold text-lg mb-1">
                World-Class Security with Local Data Hosting
              </h3>
              <p className="text-gray-600 text-sm">
                Enterprise-grade encryption keeps your data safe — with the
                option to host locally for national compliance.
              </p>
            </div>
            {/* 7 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-500 hover:scale-105 transition">
              <i className="fas fa-hands-helping text-3xl text-yellow-500 mb-3"></i>
              <h3 className="font-bold text-lg mb-1">
                Hands-On Support & Training
              </h3>
              <p className="text-gray-600 text-sm">
                No faceless ticket queues — get real-time, local support and
                in-person training for smooth onboarding.
              </p>
            </div>
            {/* 8 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-cyan-500 hover:scale-105 transition">
              <i className="fas fa-lightbulb text-3xl text-cyan-500 mb-3"></i>
              <h3 className="font-bold text-lg mb-1">
                Continuous Innovation from User Feedback
              </h3>
              <p className="text-gray-600 text-sm">
                We listen to clients and rapidly add features that solve today’s
                business problems, not just follow global trends.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-10 flex-wrap">
            <Link
              to="/demo"
              className="bg-orange-600 text-white px-8 py-3 rounded-md font-bold shadow hover:bg-orange-700 transition text-lg"
            >
              Request Demo
            </Link>
            <Link
              to="/demo"
              className="bg-white border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-md font-bold shadow hover:bg-gray-100 transition text-lg"
            >
              Watch Product Video
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        id="contact-us"
        className="py-24 bg-gradient-to-br from-orange-50 via-white to-blue-50 scroll-mt-24"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-5xl md:text-6xl font-extrabold text-orange-600 mb-4 drop-shadow-lg tracking-tight">
              Get In Touch
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-6 font-serif italic">
              We’d love to hear from you! Whether you have a question, want a
              demo, or just want to say hello, our team is ready to help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* Contact Info & Map */}
            <div className="flex flex-col h-full">
              <div className="bg-white p-8 rounded-2xl shadow-xl mb-8 md:mb-0 flex-1 border border-orange-100">
                <div className="flex items-center gap-3 mb-6">
                  <i className="fas fa-map-marker-alt text-3xl text-orange-500"></i>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Our Location
                  </h3>
                </div>
                <p className="text-lg text-gray-700 mb-2 font-semibold">
                  NexiSol IT Solutions
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Summit Athletes Village, Addis Ababa, Ethiopia
                </p>
                <a
                  href="https://maps.app.goo.gl/pjRah89uBLWT8SrT6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:underline mb-6 text-base font-medium"
                >
                  <i className="fas fa-location-arrow mr-2"></i>
                  View on Google Maps
                </a>
                <div className="mb-6">
                  <iframe
                    title="NexiSol IT Solutions Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.003964885019!2d38.784934!3d9.010793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b853b1e2e2e2d%3A0x2e2e2e2e2e2e2e2e!2sNexiSol%20IT%20Solutions!5e0!3m2!1sen!2set!4v1694012345678!5m2!1sen!2set"
                    className="w-full rounded-lg h-[320px] md:h-[380px] border"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fas fa-clock text-orange-500"></i>
                    <span className="font-bold text-gray-800">
                      Business Hours:
                    </span>
                  </div>
                  <ul className="ml-7 text-gray-700 text-base">
                    <li>Monday - Friday: 10:00 AM - 6:00 PM</li>
                    <li>Saturday: 10:00 AM - 6:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fas fa-phone-alt text-orange-500"></i>
                    <span className="font-bold text-gray-800">Phone:</span>
                  </div>
                  <a
                    href="tel:+251988041104"
                    className="text-blue-600 hover:underline text-base"
                  >
                    +251 988 041 104
                  </a>
                </div>
                <div className="mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fas fa-envelope text-orange-500"></i>
                    <span className="font-bold text-gray-800">Email:</span>
                  </div>
                  <a
                    href="mailto:info@nexisol.net"
                    className="text-blue-600 hover:underline text-base"
                  >
                    info@nexisol.net
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://www.nexisol.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-blue-500 transition text-sm font-semibold flex items-center gap-2"
                  >
                    <i className="fas fa-globe"></i> Visit Website
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nexisol/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 text-white px-4 py-2 rounded shadow hover:bg-orange-500 transition text-sm font-semibold flex items-center gap-2"
                  >
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl h-full flex flex-col border border-orange-100">
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-6">
                  <i className="fas fa-paper-plane text-3xl text-orange-500"></i>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Send Us a Message
                  </h3>
                </div>
                <p className="text-orange-500 mb-6 text-base md:text-lg italic text-center">
                  Fill out the form below and our team will get back to you as
                  soon as possible. For urgent inquiries, please call us
                  directly.
                </p>
                <form
                  id="contactForm"
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contactForm")
                      ?.classList.add("hidden");
                    document
                      .getElementById("thankYouMessage")
                      ?.classList.remove("hidden");
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-semibold mb-1"
                      >
                        Your Name <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-semibold mb-1"
                      >
                        Email Address <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 font-semibold mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                        autoComplete="tel"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-gray-700 font-semibold mb-1"
                      >
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                        autoComplete="organization"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="department"
                        className="block text-gray-700 font-semibold mb-1"
                      >
                        Department
                      </label>
                      <select
                        id="department"
                        name="department"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select Department
                        </option>
                        <option value="sales">Sales</option>
                        <option value="support">Support</option>
                        <option value="partnerships">Partnerships</option>
                        <option value="hr">HR</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="contactMethod"
                        className="block text-gray-700 font-semibold mb-1"
                      >
                        Preferred Contact Method
                      </label>
                      <select
                        id="contactMethod"
                        name="contactMethod"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select Method
                        </option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="whatsapp">WhatsApp</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-semibold mb-1"
                    >
                      Subject <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-semibold mb-1"
                    >
                      Message <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                    ></textarea>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      className="accent-orange-500 h-4 w-4"
                    />
                    <label
                      htmlFor="newsletter"
                      className="text-gray-700 text-sm"
                    >
                      Subscribe to our newsletter for updates and offers
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-600 text-white font-bold py-3 rounded hover:bg-orange-700 transition text-lg shadow mt-2"
                  >
                    Send Message
                  </button>
                </form>
                <div id="thankYouMessage" className="hidden text-center mt-8">
                  <i className="fas fa-check-circle text-4xl text-green-500 mb-4"></i>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    Thank you!
                  </h3>
                  <p className="text-gray-700">
                    Your message has been sent. We'll get back to you soon.
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center text-gray-500 text-sm">
                <span>
                  We respect your privacy. Your information will never be
                  shared.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

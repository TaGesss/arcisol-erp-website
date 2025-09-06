import React from "react";
import Footer from "../components/Footer";

const RentalModule: React.FC = () => {
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
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow border-b-4 border-orange-400 pb-2">
              Manage Rentals with Precision and Ease
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-serif italic max-w-xl mb-10">
              From property listings to lease renewals and recurring payments —
              manage the entire rental lifecycle in one powerful ERP module,
              tailored to local market needs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose ArciSol Rental Module Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">
              Why Choose ArciSol Rental Module?
            </h2>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-orange-500">
              <h3 className="font-bold text-lg mb-2">
                Complete Rental Lifecycle Management
              </h3>
              <p className="text-gray-700">
                From property or equipment listing to lease renewals and
                payments, ArciSol handles every stage of the rental process
                efficiently and accurately.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2">
                Automated Billing & Payment Tracking
              </h3>
              <p className="text-gray-700">
                Set up recurring invoices, automated reminders, and payment
                reconciliation to reduce late payments and administrative work.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-2">
                Centralized Tenant & Property Data
              </h3>
              <p className="text-gray-700">
                Keep all tenant, lease, and property information in one secure,
                searchable system, reducing errors and improving
                decision-making.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-pink-500">
              <h3 className="font-bold text-lg mb-2">
                Integrated with Finance & Inventory
              </h3>
              <p className="text-gray-700">
                Rental payments, deposits, and assets are automatically synced
                with Finance and Inventory Modules, ensuring accurate accounting
                and asset tracking.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-cyan-500">
              <h3 className="font-bold text-lg mb-2">
                Maintenance & Service Management
              </h3>
              <p className="text-gray-700">
                Track maintenance requests, work orders, and service history for
                each property or rented asset to improve tenant satisfaction and
                operational efficiency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
              <h3 className="font-bold text-lg mb-2">
                Scalable for Any Portfolio Size
              </h3>
              <p className="text-gray-700">
                Whether you manage a few units or thousands of
                properties/assets, ArciSol Rental scales seamlessly to fit your
                business.
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

export default RentalModule;

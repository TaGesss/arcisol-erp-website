import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const TenantRequest: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <section className="relative pt-[90px] pb-4 bg-gradient-to-br from-blue-50 via-orange-50 to-orange-100 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[180px] relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 leading-tight drop-shadow">
            Tenant Request
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-serif italic max-w-2xl mb-4">
            Request access to ArciSol ERP Tenant Portal. Fill out the form below
            and our team will get in touch to set up your account.
          </p>
          <Link
            to="/demo"
            className="bg-orange-400 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-500 hover:text-black transition transform mt-2 inline-block"
          >
            Start for free
          </Link>
        </div>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex justify-center">
          {!submitted ? (
            <form
              className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-lg border border-blue-100"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <h2 className="text-3xl font-bold text-orange-600 mb-2 text-center">
                ArciSol ERP Tenant Request
              </h2>
              <p className="text-gray-600 mb-8 text-center">
                Fill out this form to request access to ArciSol ERP as a tenant
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="firstName"
                  >
                    Your First Name
                  </label>
                  <input
                    className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="lastName"
                  >
                    Your Last Name
                  </label>
                  <input
                    className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="company"
                  >
                    Company Name
                  </label>
                  <input
                    className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Enter your company name"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="website"
                  >
                    Company Website (Optional)
                  </label>
                  <input
                    className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                    type="url"
                    id="website"
                    name="website"
                    placeholder="https://example.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Select modules you're interested in:
                </label>
                <div className="flex flex-col gap-3 md:flex-row md:gap-8">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="modules"
                      value="HR"
                      className="form-checkbox h-5 w-5 text-orange-600"
                    />
                    <span className="ml-2 text-gray-700">
                      Human Resources (HR)
                    </span>
                  </label>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="modules"
                      value="Agency"
                      className="form-checkbox h-5 w-5 text-orange-600"
                    />
                    <span className="ml-2 text-gray-700">
                      Foreign Recruitement (Agency)
                    </span>
                  </label>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="modules"
                      value="Rental"
                      className="form-checkbox h-5 w-5 text-orange-600"
                    />
                    <span className="ml-2 text-gray-700">
                      Rental Management
                    </span>
                  </label>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  Select the modules you're interested in using.
                </p>
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="logo"
                >
                  Company Logo
                </label>
                <div className="flex items-center gap-4">
                  <input
                    className="block w-full text-gray-700 border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    type="file"
                    id="logo"
                    name="logo"
                    accept="image/png, image/jpeg, image/gif"
                  />
                  <span className="text-gray-500 text-sm">Upload</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  Upload a company logo (PNG, JPG, GIF). Max 200KB.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="company@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+251 9XX XXX XXX"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="address"
                >
                  Company Address
                </label>
                <input
                  className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter your company's full address"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white font-bold py-4 rounded-lg hover:bg-blue-500 transition text-lg shadow"
              >
                Submit Request
              </button>
              <div className="text-gray-500 text-sm text-center mt-4">
                We will review your access request then we will contact you for
                more information needed.
              </div>
            </form>
          ) : (
            <div className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-lg border border-blue-100 flex flex-col items-center">
              <i className="fas fa-check-circle text-4xl text-green-500 mb-4"></i>
              <h3 className="text-2xl font-bold text-green-600 mb-2">
                Thank you!
              </h3>
              <p className="text-gray-700 text-center">
                Your request has been submitted. Our team will contact you soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default TenantRequest;

import React, { useState } from "react";

const Demo: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans pt-[120px] min-h-screen">
      <section className="pb-20 bg-gradient-to-br from-blue-50 via-orange-50 to-orange-100 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Demo & Resources
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our resources, request a live demo, and get the most out
              of ArciSol ERP.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Demo Request Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-orange-600">
                Request a Demo
              </h2>
              {submitted ? (
                <div className="text-green-600 font-bold text-xl text-center py-10">
                  Thank you! We'll contact you soon.
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label className="block font-semibold mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-blue-500 transition"
                  >
                    Request Demo
                  </button>
                </form>
              )}
            </div>
            {/* Downloadable Brochures */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">
                Downloadable Brochures
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center justify-between bg-blue-50 rounded-lg px-4 py-3">
                  <span>ArciSol ERP Overview</span>
                  <a
                    href="#"
                    className="text-orange-600 font-bold hover:underline"
                  >
                    <i className="fas fa-download mr-2"></i>Download
                  </a>
                </li>
                <li className="flex items-center justify-between bg-blue-50 rounded-lg px-4 py-3">
                  <span>Industry Solutions Brochure</span>
                  <a
                    href="#"
                    className="text-orange-600 font-bold hover:underline"
                  >
                    <i className="fas fa-download mr-2"></i>Download
                  </a>
                </li>
                <li className="flex items-center justify-between bg-blue-50 rounded-lg px-4 py-3">
                  <span>Implementation Guide</span>
                  <a
                    href="#"
                    className="text-orange-600 font-bold hover:underline"
                  >
                    <i className="fas fa-download mr-2"></i>Download
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Video Tutorials */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-green-600">
                Video Tutorials
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">
                    Getting Started with ArciSol ERP
                  </h3>
                  <div className="aspect-w-16 aspect-h-9 mb-2">
                    <iframe
                      className="w-full h-56 rounded-lg"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Getting Started"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Configuring Your First Module
                  </h3>
                  <div className="aspect-w-16 aspect-h-9 mb-2">
                    <iframe
                      className="w-full h-56 rounded-lg"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Configuring Module"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            {/* ERP Implementation Guides */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-purple-600">
                ERP Implementation Guides
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center justify-between bg-purple-50 rounded-lg px-4 py-3">
                  <span>Step-by-Step Implementation Guide</span>
                  <a
                    href="#"
                    className="text-orange-600 font-bold hover:underline"
                  >
                    <i className="fas fa-file-pdf mr-2"></i>Download PDF
                  </a>
                </li>
                <li className="flex items-center justify-between bg-purple-50 rounded-lg px-4 py-3">
                  <span>Best Practices for Change Management</span>
                  <a
                    href="#"
                    className="text-orange-600 font-bold hover:underline"
                  >
                    <i className="fas fa-file-pdf mr-2"></i>Download PDF
                  </a>
                </li>
                <li className="flex items-center justify-between bg-purple-50 rounded-lg px-4 py-3">
                  <span>Training Checklist</span>
                  <a
                    href="#"
                    className="text-orange-600 font-bold hover:underline"
                  >
                    <i className="fas fa-file-pdf mr-2"></i>Download PDF
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;

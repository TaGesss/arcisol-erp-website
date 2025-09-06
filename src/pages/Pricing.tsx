import React, { useState } from "react";

const modulePrices: Record<string, number> = {
  Finance: 20,
  Inventory: 15,
  HR: 25,
  Sales: 20,
  Analytics: 30,
  Integrations: 40,
};

const Pricing: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [result, setResult] = useState<string>("");

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelected((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };

  const calculateCustomPlan = () => {
    if (selected.length === 0) {
      setResult(
        '<span class="text-red-500">Select at least one module.</span>'
      );
      return;
    }
    const total = selected.reduce((sum, mod) => sum + modulePrices[mod], 0);
    setResult(
      `Your custom plan: <span class="font-bold text-orange-600">$${total}/mo</span><br/><span class="text-gray-700">Modules: ${selected.join(
        ", "
      )}</span>`
    );
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans pt-[120px] min-h-screen">
      <section className="pb-20 bg-gradient-to-br from-blue-50 via-orange-50 to-orange-100 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Flexible Pricing for Every Business
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a plan that fits your needs, or build your own by selecting
              the modules you want.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col border-t-4 border-orange-400">
              <h2 className="text-2xl font-bold mb-2 text-orange-600">Basic</h2>
              <p className="text-4xl font-extrabold mb-2">
                $49<span className="text-lg font-medium">/mo</span>
              </p>
              <p className="text-gray-600 mb-6">
                For small teams getting started
              </p>
              <ul className="mb-8 space-y-3 text-gray-700">
                <li>
                  <i className="fas fa-check text-green-500 mr-2"></i>Core
                  Finance Module
                </li>
                <li>
                  <i className="fas fa-check text-green-500 mr-2"></i>Inventory
                  Management
                </li>
                <li>
                  <i className="fas fa-check text-green-500 mr-2"></i>Email
                  Support
                </li>
              </ul>
              <a
                href="#"
                className="mt-auto bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-500 transition"
              >
                Start Basic
              </a>
            </div>
            {/* Standard Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col border-t-4 border-blue-400">
              <h2 className="text-2xl font-bold mb-2 text-blue-600">
                Standard
              </h2>
              <p className="text-4xl font-extrabold mb-2">
                $99<span className="text-lg font-medium">/mo</span>
              </p>
              <p className="text-gray-600 mb-6">For growing businesses</p>
              <ul className="mb-8 space-y-3 text-gray-700">
                <li>
                  <i className="fas fa-check text-green-500 mr-2"></i>All Basic
                  Features
                </li>
                <li>
                  <i className="fas fa-check text-green-500 mr-2"></i>HR &
                  Payroll Module
                </li>
                <li>
                  <i className="fas fa-check text-green-500 mr-2"></i>Sales &
                  CRM
                </li>
                <li>
                  <i className="fas fa-check text-green-500 mr-2"></i>Priority
                  Support
                </li>
              </ul>
              <a
                href="#"
                className="mt-auto bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-500 transition"
              >
                Start Standard
              </a>
            </div>
            {/* Premium Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col border-t-4 border-green-400">
              <h2 className="text-2xl font-bold mb-2 text-green-600">
                Premium
              </h2>
              <p className="text-4xl font-extrabold mb-2">
                $199<span className="text-lg font-medium">/mo</span>
              </p>
              <p className="text-gray-600 mb-6">For established enterprises</p>
              <ul className="mb-8 space-y-3 text-gray-700">
                <li>
                  <i className="fas fa-check text-green-500 mr-2"></i>All
                  Standard Features
                </li>
                <li>
                  <i className="fas fa-check text-green-500 mr-2"></i>Advanced
                  Analytics
                </li>
                <li>
                  <i className="fas fa-check text-green-500 mr-2"></i>Custom
                  Integrations
                </li>
                <li>
                  <i className="fas fa-check text-green-500 mr-2"></i>24/7
                  Support
                </li>
              </ul>
              <a
                href="#"
                className="mt-auto bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-500 transition"
              >
                Start Premium
              </a>
            </div>
            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col border-t-4 border-purple-500">
              <h2 className="text-2xl font-bold mb-2 text-purple-600">
                Enterprise
              </h2>
              <p className="text-4xl font-extrabold mb-2">Custom</p>
              <p className="text-gray-600 mb-6">
                For large organizations & custom needs
              </p>
              <ul className="mb-8 space-y-3 text-gray-700">
                <li>
                  <i className="fas fa-check text-green-500 mr-2"></i>All
                  Premium Features
                </li>
                <li>
                  <i className="fas fa-check text-green-500 mr-2"></i>Dedicated
                  Account Manager
                </li>
                <li>
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  On-Premise/Cloud Options
                </li>
                <li>
                  <i className="fas fa-check text-green-500 mr-2"></i>Custom
                  Security & Compliance
                </li>
              </ul>
              <a
                href="#"
                className="mt-auto bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-500 transition"
              >
                Contact Sales
              </a>
            </div>
          </div>
          {/* Build Your Own Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-orange-600">
              Build Your Own Plan
            </h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {Object.keys(modulePrices).map((mod) => (
                  <label key={mod} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="accent-orange-500 w-5 h-5"
                      name="modules"
                      value={mod}
                      checked={selected.includes(mod)}
                      onChange={handleCheckbox}
                    />
                    <span>
                      {mod === "HR"
                        ? "HR & Payroll"
                        : mod === "Analytics"
                        ? "Advanced Analytics"
                        : mod === "Integrations"
                        ? "Custom Integrations"
                        : mod +
                          (mod === "Sales"
                            ? " & CRM"
                            : mod === "Inventory"
                            ? " Management"
                            : " Module")}
                    </span>
                  </label>
                ))}
              </div>
              <div className="text-center">
                <button
                  type="button"
                  onClick={calculateCustomPlan}
                  className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-500 transition"
                >
                  Calculate Price
                </button>
              </div>
              <div
                className="mt-6 text-center text-xl font-semibold text-blue-600"
                dangerouslySetInnerHTML={{ __html: result }}
              ></div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

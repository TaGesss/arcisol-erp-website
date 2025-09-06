import React, { useState } from "react";

const subjects = [
  "General Inquiry",
  "Sales",
  "Support",
  "Partnership",
  "Other",
];

const QuickContact: React.FC = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [subject, setSubject] = useState(subjects[0]);
  // No message field needed for direct email

  const emailAddress = "info@nexisol.net";
  const phoneNumber = "+251988041104";
  const whatsappNumber = "+251988041104";

  const handleEmailSend = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}`;
    window.open(mailto, "_blank");
    setShowEmail(false);
  };

  return (
    <div className="fixed z-50 bottom-6 right-6 flex flex-col items-end gap-2">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center text-xl transition"
        title="WhatsApp Call"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      {/* Phone Call */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center text-lg transition"
        title="Call Us"
      >
        <i className="fas fa-phone-alt"></i>
      </a>
      {/* Email */}
      <button
        onClick={() => setShowEmail((v) => !v)}
        className="bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center text-lg transition focus:outline-none"
        title="Email Us"
      >
        <i className="fas fa-envelope"></i>
      </button>
      {/* Email Popup */}
      {showEmail && (
        <div className="mb-2 bg-white border border-orange-300 rounded-xl shadow-xl p-4 w-72 animate-fadeIn">
          <form onSubmit={handleEmailSend}>
            <div className="mb-3">
              <label className="block text-gray-700 font-semibold mb-1">
                Subject
              </label>
              <select
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              >
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                type="button"
                className="text-gray-500 hover:text-orange-500 text-sm"
                onClick={() => setShowEmail(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded shadow"
              >
                Go to Email
              </button>
            </div>
          </form>
        </div>
      )}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease; }
      `}</style>
    </div>
  );
};

export default QuickContact;

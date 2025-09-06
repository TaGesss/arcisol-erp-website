import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ArciSol</h3>
            <p className="text-gray-300 mb-4">
              Streamline operations, reduce costs, and scale effortlessly with
              our all-in-one ERP solution.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-orange-600">
                  ERP Modules
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-orange-600">
                  Industry Solutions
                </a>
              </li>
              <li>
                <a href="#why-choose" className="hover:text-orange-600">
                  Why ArciSol
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Social Media
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/nexisol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 flex items-center gap-2"
                >
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/nexisol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 flex items-center gap-2"
                >
                  <i className="fab fa-linkedin-in"></i> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nexisol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 flex items-center gap-2"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center border-t border-gray-700 pt-4 pb-0 text-gray-300 text-base font-semibold tracking-wide">
          <span className="font-bold text-lg">
            &copy; 2025 NexiSol IT Solutions. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

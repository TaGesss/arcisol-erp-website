import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToHashElement from "./components/ScrollToHashElement";
import QuickContact from "./components/QuickContact";

import Home from "./pages/Home";
import About from "./pages/About";
import Inventory from "./pages/Inventory";
import AgencyModule from "./pages/Agency Module";
import FinanceModule from "./pages/FinanceModule";
import HRModule from "./pages/HRModule";
import RentalModule from "./pages/RentalModule";
import SalesModule from "./pages/SalesModule";

import Demo from "./pages/Demo";
import Pricing from "./pages/Pricing";
import TenantRequest from "./pages/TenantRequest";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToHashElement />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/agency-module" element={<AgencyModule />} />
          <Route path="/finance-module" element={<FinanceModule />} />
          <Route path="/hr-module" element={<HRModule />} />
          <Route path="/rental-module" element={<RentalModule />} />
          <Route path="/sales-module" element={<SalesModule />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/tenant-request" element={<TenantRequest />} />
        </Routes>
      </div>
      <Footer />
      <QuickContact />
    </Router>
  );
}

export default App;

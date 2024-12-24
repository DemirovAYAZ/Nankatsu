import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Wraper from "./components/DashboardWraper/wraper";
import { ToastContainer } from "react-toastify";

import DashboardIncome from "./pages/DashboardIncome/DashboardIncome";
import PriceDashboard from "./pages/PriceDashboard/PriceDashboard";
import QuantityDashboard from "./pages/QuantityDashboard/QuantityDashboard";
import TotalSalesDashboard from "./pages/TotalSalesDashboard/TotalSalesDashboard";
import CustomerTypeDashboard from "./pages/CustomerTypeDashboard/CustomerTypeDashboard";
import AboutUs from "./pages/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import StrategyDashboard from "./pages/StrategyDashboard/StrategyDashboard";

function App() {
  return (
    <>
      <AppContent />
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const isDashboardPath = location.pathname.startsWith("/dashboard");

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Wraper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/dashboard/main" element={<Dashboard />} />
          <Route path="/dashboard/your-sales" element={<DashboardIncome />} />
          <Route path="/dashboard/price" element={<PriceDashboard />} />
          <Route path="/dashboard/quantity" element={<QuantityDashboard />} />
          <Route path="/dashboard/total_sales" element={<TotalSalesDashboard />} />
          <Route path="/dashboard/customer-type" element={<CustomerTypeDashboard />} />
          <Route path="/dashboard/customer-strategy" element={<StrategyDashboard />} />
        </Routes>
      </Wraper>
      {!isDashboardPath && <Footer />}
    </>
  );
}

export default App;

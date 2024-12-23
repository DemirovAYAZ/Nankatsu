import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Wraper from "./components/DashboardWraper/wraper";

import DashboardIncome from "./pages/DashboardIncome/DashboardIncome";

import PriceDashboard from "./pages/PriceDashboard/PriceDashboard";
import QuantityDashboard from "./pages/QuantityDashboard/QuantityDashboard";
import TotalSalesDashboard from "./pages/TotalSalesDashboard/TotalSalesDashboard";
import CustomerTypeDashboard from "./pages/CustomerTypeDashboard/CustomerTypeDashboard";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <>
      <AppContent />
    </>
  );
}
function AppContent() {
  return (
    <>
      <Navbar />
      <Wraper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />}/>
          <Route path="/dashboard/main" element={<Dashboard />} />

          <Route path="/dashboard/your-incomes" element={<DashboardIncome/>} />

          <Route path="/dashboard/price" element={<PriceDashboard />} />
          <Route path="/dashboard/quantity" element={<QuantityDashboard />} />
          <Route path="/dashboard/total_sales" element={<TotalSalesDashboard />} />
          <Route path="/dashboard/customer_type" element={<CustomerTypeDashboard/>} />

        </Routes>
      </Wraper>
    </>
  );
}

export default App;

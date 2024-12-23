import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Wraper from "./components/DashboardWraper/wraper";
import DashboardIncome from "./pages/DashboardIncome/DashboardIncome";

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
          <Route path="/dashboard/main" element={<Dashboard />} />
          <Route path="/dashboard/your-incomes" element={<DashboardIncome/>} />
        </Routes>
      </Wraper>
    </>
  );
}

export default App;

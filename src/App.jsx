import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Wraper from "./components/DashboardWraper/wraper";

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
        </Routes>
      </Wraper>
    </>
  );
}

export default App;

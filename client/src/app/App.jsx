import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

// Import custom page components
import About from "../pages/About";
import Beneficiaries from "../pages/Beneficiaries";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Buybrick from "../pages/Buybrick";
import Donors from "../pages/Donors";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Loading from "../components/Loading";

// Import React toast for Alert
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";


import AdminLayout from "../components/Admin/AdminLayout";
import Dashboard from "../components/Admin/Dashboard";
import BrickTable from "../components/Admin/BrickTable";
import DonorTable from "../components/Admin/DonorTable";
import ManageContent from "../components/Admin/ManageContent";
import Trustee from "../components/Admin/Trustee";
import SMM from "../components/Admin/SMM"

function App() {
  const alert = useSelector((state) => state.alert);
  const { loading } = useSelector((state) => state.loading);

  useEffect(() => {
    if (alert.alertType)
      switch (alert.alertType) {
        case "success":
          toast.success(alert.content, {
            position: "top-right",
            autoClose: 1000,
          });
          break;
        case "error":
          toast.warn(alert.content, {
            position: "top-right",
          });
          break;
      }
  }, [alert]);

  return (
    <>
      <Loading loading={loading} />
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="bricks" element={<BrickTable />} />
            <Route path="donors" element={<DonorTable />} />
            <Route path="manage" element={<ManageContent />} />
            <Route path="trustee" element={<Trustee />} />
            <Route path="smm" element={<SMM />} />
          </Route>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/beneficiaries" element={<Beneficiaries />} />
          <Route path="/buybrick" element={<Buybrick />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;

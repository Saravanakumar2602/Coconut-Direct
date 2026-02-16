import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FarmerDashboard from "../pages/FarmerDashboard";
import BuyerDashboard from "../pages/BuyerDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import ProductList from "../pages/ProductList";
import CreateProduct from "../pages/CreateProduct";
import Analytics from "../pages/Analytics";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/farmer" element={<FarmerDashboard />} />
      <Route path="/farmer/create-listing" element={<CreateProduct />} />
      <Route path="/farmer/analytics" element={<Analytics />} />
      <Route path="/buyer" element={<BuyerDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/products" element={<ProductList />} />
    </Routes>
  );
};

export default AppRoutes;

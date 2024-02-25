import { Routes, Route, Navigate } from "react-router-dom";

import NotFound from "../_pages/NotFound";
import LoginPage from "../_pages/LoginPage";
import HomePage from "../_pages/HomePage";
import { useSelector } from "react-redux";
import NewBusiness from "../_pages/business/NewBusiness";
import Client from "../_pages/client/Client";
import NewClient from "../_pages/client/NewClient";
import Business from "../_pages/business/Business";
import NewEmployee from "../_pages/employee/NewEmployee";
import AllEmployee from "../_pages/employee/AllEmployee";
import StockPage from "../_pages/stock/StockPage";
import NewStock from "../_pages/stock/NewStock";
import OneStock from "../_pages/stock/OneStock";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route path="/business/all" element={<Business />} />
      <Route path="/business/new" element={<NewBusiness />} />

      <Route path="/client" element={<Client />} />
      <Route path="/client/create_client" element={<NewClient />} />

      <Route path="/employees/all" element={<AllEmployee />} />
      <Route path="/employees/new" element={<NewEmployee />} />

      <Route path="/stock/new" element={<NewStock />} />
      <Route path="/stock/all" element={<StockPage />} />
      <Route path="/stock/:stockType/:stockId" element={<OneStock />} />
    </Routes>
  );
}

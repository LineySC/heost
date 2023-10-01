import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import NotFound from "../_pages/NotFound";
import LoginPage from "../_pages/LoginPage";
import HomePage from "../_pages/HomePage";
import { useSelector } from "react-redux";
import NewBusiness from "../_pages/business/NewBusiness";
import Client from "../_pages/client/Client";
import NewClient from "../_pages/client/NewClient";
import Business from "../_pages/business/Business";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(useSelector((state) => state.auth));
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
      <Route path="/create_client" element={<NewClient />} />
    </Routes>
  );
}

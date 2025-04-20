import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Homepage from "@/pages/Homepage";
import SalarieDashboard from "@/pages/salarie/SalarieDashboard";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import DashboardLayout from "@/layout/admin/DashboardLayout";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

/** ADMIN */

//Client
import NewClient from "@/pages/client/New";
import Client from "@/pages/client/Clients";

//Business
import Business from "@/pages/admin/business/Business";
import NewBusiness from "@/pages/admin/business/NewBusiness";

//Purchase Order
import Received from "@/pages/admin/purchaseOrder/Received";
import NewPurchaseOrder from "@/pages/admin/purchaseOrder/New";
import AllPurchaseOrder from "@/pages/admin/purchaseOrder/All";

//Salarie
import Pointage from "@/pages/salarie/Pointage";
import SalarieLayout from "@/layout/salarie/SalarieLayout";
import User from "@/pages/admin/user/User";

const ProtectedRoute = ({ children, routeRole }) => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  if (!isAuthenticated) return <Navigate to="/" />;
  if (routeRole !== role) return <Navigate to="/unauthorized" />;

  return children;
};

// Routes principales
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordForm />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/unauthorized" element={<h1>Accès interdit</h1>} />

        <Route path="/dashboard" element={<Outlet />}>
          <Route index element={<Navigate to="salarie" replace />} />
          {/* Admin */}
          <Route
            path="admin"
            element={
              <ProtectedRoute routeRole="admin">
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="user" element={<Outlet/>}>
              <Route path=":id" element={<User/>}/> 
            </Route>
            <Route index element={<AdminDashboard />} />
            <Route path="purchase_order" element={<Outlet />}>
              <Route index element={<AllPurchaseOrder />} />
              <Route path='new' element={<NewPurchaseOrder />} />
              <Route path="received" element={<Received />} />
            </Route>
            <Route path="business" element={<Outlet />}>
              <Route index element={<Business />} />
              <Route path="new" element={<NewBusiness />} />
            </Route>
            <Route path="client" element={<Outlet />}>
              <Route index element={<Client />} />
              <Route path="new" element={<NewClient />} />
            </Route>
          </Route>
          {/* Salarier */}
          <Route
            path="salarie"
            element={
              <ProtectedRoute routeRole="salarie">
                <SalarieLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<SalarieDashboard />} />
            <Route path="pointage" element={<Pointage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;

import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <h1>Bienvenue dans le Dashboard Admin</h1>
      <p>Contenu réservé aux administrateurs.</p>

      <Outlet />
    </div>
  );
};

export default AdminDashboard;

import { useEffect } from "react";
import Sidebar from "./_components/sidebar/Sidebar";
import Router from "./_config/Router";
import { useSelector, useDispatch } from "react-redux";
import { checkLoggedIn } from "./redux/actions/authAction";
import { useLocation } from "react-router-dom";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(checkLoggedIn());
  }, []);

  /*Solution provisoire */
  const checkLocal = localStorage.getItem("loggedInUser");

  if (checkLocal === null && location.pathname !== "/login") {
    window.location.href = "/login"; // Redirection vers la page de connexion si l'utilisateur n'est pas connecté
    return null; // Arrêter le rendu du composant pour éviter la boucle
  }

  return (
    <>
      <main className="container">
        <Router />
      </main>
      {isLoggedIn && location.pathname !== "/login" && <Sidebar />}
    </>
  );
}

export default App;

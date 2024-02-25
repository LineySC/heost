import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Box, Fade } from "@chakra-ui/react";
import { checkLoggedIn } from "../../redux/actions/authAction";
import Sidebar from "../sidebar/Sidebar";
import Subnav from "../subnav/Subnav";

export default function Layout({ children }) {
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
      {isLoggedIn && location.pathname !== "/login" && <Sidebar />}

      <Box
        pos="absolute"
        top="0"
        left="275px"
        right="25px"
        w="calc(100vw-250px)"
        h="auto"
        marginLeft="20px"
        marginRight="20px"
      >
        {isLoggedIn && location.pathname !== "/login" && <Subnav />}

        <Box bgColor="#FFF" borderRadius="15px" p="5">
          {children}
        </Box>
      </Box>
    </>
  );
}

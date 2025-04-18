import { Link, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Nav = () => {
  return (
    <Box>
      <Link as={RouterLink} to="/dashboard/salarie/pointage">
        Pointage
      </Link>
      <Link as={RouterLink} to="/dashboard/salarie/Affaire">
        Affaire
      </Link>
    </Box>
  );
};

export default Nav;

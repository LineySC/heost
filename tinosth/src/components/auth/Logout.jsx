import { useDispatch } from "react-redux";
import { Button, Text } from "@chakra-ui/react";
import { logout } from "@/features/auth/AuthSlice";

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Text onClick={() => dispatch(logout())}>Déconnexion</Text>
    </>
  );
};

export default Logout;

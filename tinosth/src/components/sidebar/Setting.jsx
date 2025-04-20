import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { HiCog } from "react-icons/hi";
import Logout from "../auth/Logout";
import { useSelector } from "react-redux";


const Setting = () => {
  const user = useSelector(state => state.auth)

  return (
    <MenuRoot closeOnSelect={false}>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          <HiCog /> Paramètres
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="profil"><a href={`/user/${user.id}`}>Mon profil</a></MenuItem>
        <MenuItem
          color="fg.error"
          _hover={{ bg: "bg.error", color: "fg.error" }}
          value="logout"
        >
          <Logout />
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default Setting;

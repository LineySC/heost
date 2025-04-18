import { Button } from "@chakra-ui/react";
import { Switch } from "../ui/switch";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { HiCog } from "react-icons/hi";
import Logout from "../auth/Logout";
import { ColorModeButton } from "../ui/color-mode";

const Setting = () => {
  return (
    <MenuRoot closeOnSelect={false}>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          <HiCog /> Paramètres
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="profil">Mon profil</MenuItem>
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

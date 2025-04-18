import { Flex, Box, Heading, IconButton, Button } from "@chakra-ui/react";
import Setting from "@/components/sidebar/Setting";
import { ColorModeButton } from "@/components/ui/color-mode";
import ToggleFullscreen from "@/components/admin/sidebar/ToogleFullscreen";

import { useDrawer } from "@/context/DrawerContext";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const { openDrawer } = useDrawer();

  return (
    <Flex justify="space-between" bg="F0F0F2" p={4}>
      <Flex align={"center"}>
        <Button
          onClick={openDrawer}
          aria-label="Ouvrir le menu"
          variant={"ghost"}
        >
          <BiMenu />
        </Button>
        <Heading>Mon Dashboard</Heading>
      </Flex>

      <Box>
        <Setting />
        <ToggleFullscreen />
        {/* A remplacer icone de l'utilisateur (ou cas échéant ses initial) */}
        <ColorModeButton />
      </Box>
    </Flex>
  );
};

export default Navbar;

import { useState } from "react";
import {
  Box,
  VStack,
  IconButton,
  Button,
  DrawerContext,
} from "@chakra-ui/react";
import {
  DrawerRoot,
  DrawerBackdrop,
  DrawerTrigger,
  DrawerContent,
  DrawerCloseTrigger,
  DrawerHeader,
  DrawerTitle,
  DrawerBody,
} from "@chakra-ui/react";
import { BiMenu, BiX } from "react-icons/bi";
import LinkRoute from "@/components/admin/sidebar/LinkRoute";
import { useDrawer } from "@/context/DrawerContext";

const Sidebar = () => {
  const { isOpen, closeDrawer, openDrawer } = useDrawer();

  return (
    <>
      {/* Bouton pour ouvrir la sidebar en mode mobile */}

      <DrawerRoot open={isOpen} onOpenChange={(open) => open && closeDrawer()}>
        <DrawerBackdrop />
        <DrawerContent bg="#24293E" color="white">
          <DrawerCloseTrigger asChild>
            <IconButton
              icon={<BiX />}
              aria-label="Fermer le menu"
              position="absolute"
              top="10px"
              right="10px"
              onClick={closeDrawer}
            />
          </DrawerCloseTrigger>
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <VStack align="start">
              <LinkRoute />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>

      {/* Sidebar desktop */}
      <Box
        maxH="100vh"
        p={4}
        pr={6}
        position="fixed"
        overflowY="scroll"
        w="250px"
        __css={{
          /* Scrollbar visible même sur WebKit (Chrome, Safari, Edge) */
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#1f2333",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#555",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#888",
          },

          /* Firefox */
          scrollbarWidth: "thin",
          scrollbarColor: "#555 #1f2333",
        }}
      >
        <VStack align="start">
          <LinkRoute />
        </VStack>
      </Box>
    </>
  );
};

export default Sidebar;

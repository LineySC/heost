import React, { useEffect, useState } from "react";
import { logout } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";

import { useNavigate, Link as ReactRouterLink } from "react-router-dom";

import { Icon as MuiIcon } from "@mui/material";

import itemSidebar from "../../configApp/itemSidebar";
import {
  Link as ChakraLink,
  Box,
  Flex,
  VStack,
  Text,
  Divider,
  HStack,
} from "@chakra-ui/react";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [navigateToLogin, setNavigateToLogin] = useState(false);

  useEffect(() => {
    if (navigateToLogin) {
      navigate("/login");
    }
  }, [navigateToLogin, navigate]);

  return (
    <Flex w="250px" h="100vh" flexDir="column">
      <VStack m="40px auto">
        <Text color="#fff" fontSize={24} fontWeight={500}>
          THEOST
        </Text>
        <Divider orientation="horizontal" />
      </VStack>
      <VStack spacing={2} alignItems="start" textAlign="left">
        {itemSidebar.map((item) => (
          <HStack
            paddingLeft={6}
            m={1}
            spacing={1}
            flexDirection={"column"}
            alignItems={"start"}
          >
            <HStack>
              <Box
                bgColor="#4FD1C5"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                w={"30px"}
                h={"30px"}
                borderRadius={"12px"}
                color={"#FFF"}
              >
                <MuiIcon fontSize="small">{item.icon}</MuiIcon>
              </Box>
              <Text fontSize={18}>{item.name}</Text>
            </HStack>
            {item.subnav.map((link, ind) => (
              <>
                <ChakraLink
                  key={ind}
                  marginLeft={"10"}
                  href={link.link}
                  color={"#A0AEC0"}
                  fontSize={12}
                >
                  {link.subnavName}
                </ChakraLink>
              </>
            ))}
          </HStack>
        ))}
      </VStack>
    </Flex>
  );
}

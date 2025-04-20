import { Link, VStack, HStack, Box, Text, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import LogoMenu from "@/assets/logo.png";

//liste des url & params
import itemSidebar from "@/utils/itemSidebar";

const LinkRoute = () => {
  return (
    <>
      <VStack spacing={2} alignItems="start" textAlign="left" as="nav">
        <Image src={LogoMenu} />
        {itemSidebar.map((item, index) => (
          <HStack
            key={index}
            paddingLeft={2}
            m={1}
            spacing={1}
            gap={0}
            flexDirection={"column"}
            alignItems={"start"}
          >
            <Link as={RouterLink} to={item.link}></Link>
            <HStack>
              <Text
                fontSize={"sm"}
                color={"rgb(144, 151, 167)"}
                fontWeight={"500"}
                p={"1"}
              >
                {item.name}
              </Text>
            </HStack>
            {item.subnav.map((link, subIndex) => (
              <React.Fragment key={`${index}-${subIndex}`}>
                <Link
                  as={RouterLink}
                  to={`/dashboard/admin${link.link}`}
                  color={"rgb(200, 205, 220)"}
                  fontSize={"md"}
                  p={"1"}
                  paddingLeft={4}
                >
                  {link.subnavName}
                </Link>
              </React.Fragment>
            ))}
          </HStack>
        ))}
      </VStack>
    </>
  );
};

export default LinkRoute;

/**
 *
 *
 <>
      <Link as={RouterLink} to="/dashboard/admin/">
        Accueil
      </Link>
      <Link as={RouterLink} to="/dashboard/admin/business">
        Business
      </Link>
    </>
 */

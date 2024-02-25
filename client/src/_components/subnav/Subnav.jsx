import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  HStack,
  Input,
  InputLeftElement,
  InputGroup,
  Text,
  VStack,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Button,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import { SearchIcon, SettingsIcon, BellIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";

export default function Subnav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const local = JSON.parse(localStorage.getItem("loggedInUser"));

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box h={"100px"} display="flex" justifyContent="space-between">
      <VStack alignItems="flex-start" justifyContent="center">
        <Breadcrumb fontSize="12px">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Récap</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Text as="b">Dashboard</Text>
      </VStack>
      <HStack>
        <InputGroup w={"200px"}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input bgColor="#FFF" type="tel" placeholder="Recherche..." />
        </InputGroup>
        <Text color="#718096">{local.firstname}</Text>
        <Menu color="#718096">
          <MenuButton>
            <SettingsIcon color={"#718096"} />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Switch
                onChange={toggleColorMode}
                isChecked={colorMode === "dark"}
              >
                Theme sombre
              </Switch>
            </MenuItem>
            <MenuItem>Paramètre du compte</MenuItem>
            <MenuItem onClick={handleLogout}>Déconnexion</MenuItem>
          </MenuList>
        </Menu>
        <BellIcon color="#718096" />
      </HStack>
    </Box>
  );
}

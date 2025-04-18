import Navbar from "@/layout/admin/Navbar";
import Sidebar from "./Sidebar";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <Grid
      templateRows="0.1fr 1.9fr auto"
      templateColumns="250px 1.5fr 1fr "
      height={"100vh"}
      width={"100vw"}
    >
      <GridItem rowSpan={3} colSpan={1} background={"red"} bg="#24293E">
        <Sidebar />
      </GridItem>
      <GridItem h={"75px"} colSpan={2} bg={"#FFFFFF"}>
        <Navbar />
      </GridItem>
      <GridItem colSpan={2} bg={"#F5F5F5"}>
        <Box m="2" p="5" bg={"#FFFFFF"} borderRadius={"md"}>
          <Outlet />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default DashboardLayout;

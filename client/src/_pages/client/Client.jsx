import { Link } from "react-router-dom";
import { getClients } from "../../redux/actions/clientAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClientList from "../../_components/client/ClientList";
import { Box, Typography, Button } from "@mui/material";

export default function Client() {
  const allClients = useSelector((state) => state.client.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = () => {
      dispatch(getClients());
    };
    fetch();
  }, []);
  console.log(allClients);
  return (
    <>
      <Box>
        <Typography variant="h4">Relations Clients</Typography>

        <Box className="client">
          <Button component={Link} to="/create_client">
            Ajouter un nouveau client
          </Button>
          <ClientList allClients={allClients} />
        </Box>
      </Box>
    </>
  );
}

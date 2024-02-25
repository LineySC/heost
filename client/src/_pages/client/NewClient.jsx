import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createClient } from "../../redux/actions/clientAction";
import { Button, Box, TextField, Typography } from "@mui/material";

export default function NewClient() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [client, setClient] = useState({});

  const handleUpdate = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createClient(JSON.stringify(client)));
    navigate(-1);
  };

  return (
    <Box alignItems={"center"} display={"flex"} flexDirection={"column"}>
      <Typography variant="h4" margin>
        Création d'un client
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <Box
          flexDirection="column"
          display="flex"
          flexWrap="10"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              border: 1,
              borderRadius: 2,
              borderColor: "primary.main",
              p: 2,
              m: 2,
            }}
          >
            <Typography>Raison Social</Typography>
            <TextField
              type="text"
              variant="outlined"
              label="N° de SIRET"
              onChange={handleUpdate}
              sx={{ m: 2 }}
              name="siret"
            />
            <TextField
              type="text"
              variant="outlined"
              label="N° TVA Intracom"
              onChange={handleUpdate}
              sx={{ m: 2 }}
              name="tva_intra"
            />
          </Box>
          <Box>
            <Box
              sx={{
                border: 1,
                borderRadius: 2,
                borderColor: "primary.main",
                p: 2,
                m: 2,
              }}
            >
              <Typography>Coordonnées</Typography>
              <TextField
                type="text"
                variant="outlined"
                label="Nom de l'entreprise"
                onChange={handleUpdate}
                sx={{ m: 2 }}
                name="client_name"
              />
              <TextField
                type="text"
                variant="outlined"
                label="Nom du contact"
                onChange={handleUpdate}
                sx={{ m: 2 }}
                name="client_contact_name"
              />
              <TextField
                type="email"
                variant="outlined"
                label="E-mail du contact"
                onChange={handleUpdate}
                sx={{ m: 2 }}
                name="client_contact_mail"
              />
              <TextField
                type="phone-number"
                variant="outlined"
                label="Numéro de téléphone du contact"
                onChange={handleUpdate}
                sx={{ m: 2 }}
                name="client_contact_number"
              />
            </Box>
            <Box
              sx={{
                border: 1,
                borderRadius: 2,
                borderColor: "primary.main",
                p: 2,
                m: 2,
              }}
            >
              <Typography>Adresse de facturation</Typography>
              <TextField
                type="text"
                variant="outlined"
                label="Adresse"
                onChange={handleUpdate}
                sx={{ m: 2 }}
                name="client_invoice_address"
              />
              <TextField
                type="text"
                variant="outlined"
                label="Code postal"
                onChange={handleUpdate}
                sx={{ m: 2 }}
                name="client_invoice_postal"
              />
              <TextField
                type="text"
                variant="outlined"
                label="Commune"
                onChange={handleUpdate}
                sx={{ m: 2 }}
                name="client_invoice_city"
              />
              <TextField
                type="text"
                variant="outlined"
                label="Pays"
                onChange={handleUpdate}
                sx={{ m: 2 }}
                name="client_invoice_region"
              />
            </Box>

            <Box
              sx={{
                border: 1,
                borderRadius: 2,
                borderColor: "primary.main",
                p: 2,
                m: 2,
              }}
            >
              <Typography>Adresse de livraison (si différente)</Typography>
              <TextField
                type="text"
                variant="outlined"
                label="Adresse de livraison"
                onChange={handleUpdate}
                sx={{ m: 2 }}
                name="client_delivery_address"
              />
              <TextField
                type="text"
                variant="outlined"
                label="Code postal"
                onChange={handleUpdate}
                sx={{ m: 2 }}
                name="client_delivery_postal"
              />
              <TextField
                type="text"
                variant="outlined"
                label="Commune"
                onChange={handleUpdate}
                sx={{ m: 2 }}
                name="client_delivery_city"
              />
              <TextField
                type="text"
                variant="outlined"
                label="Pays"
                onChange={handleUpdate}
                sx={{ m: 2 }}
                name="client_delivery_region"
              />
            </Box>
          </Box>
          <Button type="submit" variant="contained">
            Créer
          </Button>
        </Box>
      </form>
    </Box>
  );
}

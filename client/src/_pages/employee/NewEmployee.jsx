import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { createEmployee } from "../../redux/actions/employeeAction";

export default function NewEmployee() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEmployee(JSON.stringify(form)));
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Typography variant="h4" marginBottom={5}>
        Creation d'un accès employer
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          p={5}
          border={"solid 1px red"}
        >
          <TextField
            label="Nom de Famille"
            type="text"
            required
            onChange={handleUpdate}
            name="lastName"
          />
          <TextField
            label="Prenom"
            type="text"
            name="firstName"
            required
            onChange={handleUpdate}
          />
          <TextField
            label="E-mail"
            type="email"
            name="mail"
            required
            onChange={handleUpdate}
          />
          <TextField
            label="E-mail professionel"
            type="email"
            name="jobMail"
            onChange={handleUpdate}
          />
          <Button type="sumbit" variant="contained">
            Créer
          </Button>
        </Box>
      </form>
    </Box>
  );
}

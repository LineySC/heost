import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { login } from "@/features/auth/AuthSlice";
import { useNavigate } from "react-router-dom";
import { Box, Button, Input, Text, Fieldset, Stack } from "@chakra-ui/react";
import RequestAccessForm from "@/components/auth/RequestAccessForm";
import { Field } from "@/components/ui/field";
import Axios from "@/utils/Axios";
import { toaster } from "@/components/ui/toaster";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("/auth/login", {
        user: { email: email, password: password },
      });

      console.log(response);
      dispatch(
        login({ role: response.data.role, firstname: response.data.firstname })
      );
      navigate(
        response.data.role === "admin"
          ? "/dashboard/admin"
          : "/dashboard/salarie"
      );
    } catch (error) {
      console.log(error);
      toaster.create({
        title: error.message || "Erreur",
        type: "error",
      });
    }
    //const user = { username, role: "admin" };
    //dispatch(login({ user, role: "admin" }));
    //navigate(user.role === "admin" ? "admin/dashboard" : "user/dashboard");
  };

  return (
    <Box
      maxW="400px"
      mx="auto"
      mt={8}
      p={5}
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
    >
      <form onSubmit={handleLogin}>
        <Fieldset.Root size="lg" maxW="md">
          <Stack>
            <Fieldset.Legend>Connexion</Fieldset.Legend>
            <Fieldset.HelperText>Connexion à votre espace</Fieldset.HelperText>
          </Stack>
          <Fieldset.Content>
            <Field>
              <Input
                variant={"flushed"}
                type="text"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Field>

            <Field>
              <Input
                variant={"flushed"}
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Field>
          </Fieldset.Content>
          <Button type="submit">Se connecter</Button>
        </Fieldset.Root>
      </form>
    </Box>
  );
};

export default Login;

import React, { useState } from "react";
import {
  Button,
  Input,
  Fieldset,
  Box,
  Stack,
  Text,
  FieldHelperText,
  Tooltip,
} from "@chakra-ui/react";
import { Field } from "../ui/field";
import { Toaster, toaster } from "@/components/ui/toaster";

import axios from "axios";

const RequestAccessForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log(email);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/request-access`,
        { email }
      );
      console.log(response);

      toaster.create({
        title: "E-mail envoyé",
        type: "success",
      });
      setEmail("");
    } catch (error) {
      toaster.create({
        title: error.response.data.message,
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
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
      <Toaster />

      <form onSubmit={handleSubmit}>
        <Fieldset.Root size="lg" maxW="md">
          <Stack>
            <Fieldset.Legend>Demande d'access</Fieldset.Legend>
            <Fieldset.HelperText>Renseigner votre e-mail</Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
            <Field label="E-mail">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Entrez votre email"
                mb={4}
              />
            </Field>
            <Button
              isLoading={isLoading}
              type="submit"
              colorScheme="blue"
              width="full"
            >
              Envoyer
            </Button>
          </Fieldset.Content>
        </Fieldset.Root>
      </form>
    </Box>
  );
};

export default RequestAccessForm;

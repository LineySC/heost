import React, { useState } from "react";
import { Button, Input, Fieldset, Box, Text, Stack } from "@chakra-ui/react";
import { Field } from "../ui/field";
import { Toaster, toaster } from "../ui/toaster";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ResetPasswordForm = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/reset-password/${token}`,
        { password }
      );
      console.log(response);

      toaster.create({
        title: "Votre mot de passe a été réinitialisé avec succès.",
        type: "success",
      });
      navigate("/login");
    } catch (error) {
      toaster.create({
        title: error.message,
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
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Réinitialiser le mot de passe
      </Text>
      <form onSubmit={handleSubmit}>
        <Fieldset.Root size="lg" maxW="md">
          <Stack>
            <Fieldset.Legend>
              Création/Réinitialisation du mot de passe
            </Fieldset.Legend>
            <Fieldset.HelperText>
              Si vous en avez pas fait la demande, merci de vous rapprocher vers
              un responsable
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content label="Mot de passe">
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez votre nouveau mot de passe"
              mb={4}
            />
          </Fieldset.Content>
          <Button
            isLoading={isLoading}
            type="submit"
            colorScheme="blue"
            width="full"
          >
            Réinitialiser le mot de passe
          </Button>
        </Fieldset.Root>
      </form>
    </Box>
  );
};

export default ResetPasswordForm;

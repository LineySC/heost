import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login, checkLoggedIn } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Box,
  Input,
  SimpleGrid,
  Heading,
  Text,
  Image,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import bg1 from "../assets/1457718455276 1.png";
import bg2 from "../assets/1457718455276 2.png";

const LoginPage = ({ username, isLoading, error, login, checkLoggedIn }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    checkLoggedIn();
  }, [checkLoggedIn]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    console.log("handleSubmit");
    e.preventDefault();
    const { username, password } = formData;
    setErrorMessage("");
    login(username, password, handleLoginError);
  };

  const handleLoginError = (errorMessage) => {
    setErrorMessage(errorMessage);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (username) {
      console.log(username);
      return navigate("/");
    }
  }, [username, navigate]);

  return (
    <SimpleGrid columns={2} spacing={5} height="100vh">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Heading as="h1" size="xl" color="#4FD1C5">
            Welcome Back
          </Heading>
          <Text as="h2" size="md" color="#A0AEC0">
            Entrez vos identifiant et votre mot de passe pour vous connecter
          </Text>
        </Box>
        <form onSubmit={handleFormSubmit} width={"50%"} mt={5}>
          <FormLabel>Nom d'utilisateur :</FormLabel>
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />

          <FormLabel>Mot de passe :</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />

          <Button type="submit">Se connecter</Button>
          {isLoading && <p>Connexion en cours...</p>}
          {error && <p>{error}</p>}
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      </Box>
      <Box
        background="#4FD1C5"
        className="login-background"
        position={"relative"}
        display="flex"
        justifyContent="center"
        alignItems={"center"}
      >
        <Image src={bg1} position="absolute" top={0} left={0} />
        <Text fontSize="6xl" zIndex={1} color={"White"}>
          Théost
        </Text>
        <Image src={bg2} position="absolute" bottom={0} right={0} />
      </Box>
    </SimpleGrid>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    isLoading: state.auth.isLoading,
    error: state.auth.error,
  };
};

export default connect(mapStateToProps, { login, checkLoggedIn })(LoginPage);

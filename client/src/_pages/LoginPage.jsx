import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login, checkLoggedIn } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

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
      return navigate("/");
    }
  }, [username, navigate]);

  return (
    <div>
      <h2>Page d'accueil de connexion</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Nom d'utilisateur :</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Se connecter</button>
        {isLoading && <p>Connexion en cours...</p>}
        {error && <p>{error}</p>}
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
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

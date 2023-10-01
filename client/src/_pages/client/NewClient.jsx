import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createClient } from "../../redux/actions/clientAction";

export default function NewClient() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [client, setClient] = useState({
    client_name: "",
    client_contact_name: "",
    client_contact_mail: "",
    client_contact_number: "",
  });

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
    <>
      <h1>Ajout d'un nouveau client</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="client_name">Nom du client</label>
        <input type="text" name="client_name" onChange={handleUpdate} />
        <label htmlFor="client_contact_name">Nom du contact</label>
        <input type="text" name="client_contact_name" onChange={handleUpdate} />
        <label htmlFor="client_contact_mail">E-mail du contact</label>
        <input
          type="email"
          name="client_contact_mail"
          onChange={handleUpdate}
        />
        <label htmlFor="client_contact_number">Numéro du contact</label>
        <input
          type="phone"
          name="client_contact_number"
          onChange={handleUpdate}
        />
        <input type="submit" value="Crée" />
      </form>
    </>
  );
}

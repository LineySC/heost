import _Select from "../../_utils/_select";

import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../../redux/actions/clientAction";
import { useEffect, useState } from "react";
import { isEmpty } from "../../_utils/isEmpty";
import { createBusiness } from "../../redux/actions/project/projectAction";

import Select from "react-select";
import { useNavigate } from "react-router-dom";
export default function NewBusiness() {
  const allClients = useSelector((state) => state.client.data);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const fetch = () => {
      dispatch(getClients());
    };
    fetch();
  }, [dispatch]);

  const [businessForm, setBusinessForm] = useState({
    name: "",
    designation: "",
    nbHours: "",
    price: "",
    delay: "",
    comment: "",
  });

  const handleChange = (e) => {
    setBusinessForm({
      ...businessForm,
      [e.target.name]: e.target.value,
    });
  };

  let option = [];
  isEmpty(allClients) ||
    allClients.forEach((element) => {
      option.push({
        value: element.client_name,
        label: element.client_name,
        name: "name",
      });
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createBusiness(JSON.stringify(businessForm)));
    navigate(-1);
  };

  return (
    <>
      <h1>Nouvelle affaire</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Client</label>

        {isEmpty(allClients) || (
          <Select
            options={option}
            className="select"
            onChange={(e) => {
              setBusinessForm({ name: e.value });
              console.warn(e.value);
            }}
            name="name"
          />
        )}

        <label htmlFor="">Désignation</label>
        <input type="text" name="designation" onChange={handleChange} />
        <label htmlFor="">Nb d'heures</label>
        <input type="text" name="nbHours" onChange={handleChange} />
        <label htmlFor="">Prix</label>
        <input type="text" name="price" onChange={handleChange} />
        <label htmlFor="">Délais réalisation</label>
        <input type="date" name="delay" onChange={handleChange} />
        <label htmlFor="">Commentaire</label>
        <input type="textarea" name="comment" onChange={handleChange} />
        <input type="submit" value="Crée" />
      </form>
    </>
  );
}

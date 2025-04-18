import {
  Box,
  Button,
  Fieldset,
  Stack,
  Input,
  NativeSelect,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useEffect, useState } from "react";
import Axios from "@/utils/Axios";
import { useNavigate } from "react-router-dom";
const NewBusiness = () => {
  const navigate = useNavigate();
  const [client, setClient] = useState([]);

  const [businessForm, setBusinessForm] = useState({
    id: "",
    name: "",
    designation: "",
    nbHours: "",
    price: "",
    delay: "",
    comment: "",
  });

  useEffect(() => {
    Axios.get("/client/get_all")
      .then((response) => {
        setClient(response.data);
      })
      .catch((err) => {
        console.log("Pas de client trouvé");
      });
  }, []);
  console.log(businessForm);

  const handleChange = (e) => {
    setBusinessForm({
      ...businessForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSend = (e) => {
    e.preventDefault();
    Axios.post("/business/create", businessForm)
      .then((res) => navigate("/business/"))
      .catch((err) => console.log(err));
  };

  return (
    <Box>
      <form onSubmit={handleSend}>
        <Fieldset.Root>
          <Stack>
            <Fieldset.Legend>Création d'une nouvelle affaire</Fieldset.Legend>
            <Fieldset.HelperText>
              Merci de remplir les informations ci-dessous
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
            <Field label="Client">
              <NativeSelect.Root>
                <NativeSelect.Field
                  placeholder="Choix du client"
                  onChange={(e) => {
                    setBusinessForm({ name: e.currentTarget.value });
                  }}
                >
                  {client.map((client, index) => (
                    <option key={index} name="name" value={client.client_name}>
                      {client.client_name}
                    </option>
                  ))}
                </NativeSelect.Field>
                <NativeSelect.Indicator />
              </NativeSelect.Root>
            </Field>
            <Field label="Désignation">
              <Input name="designation" onChange={handleChange} />
            </Field>
            <Field label="Nb d'heures">
              <Input name="nbHours" onChange={handleChange} type="number" />
            </Field>
            <Field label="Prix">
              <Input name="price" onChange={handleChange} type="number" />
            </Field>
            <Field label="Commentaire">
              <Input name="comment" onChange={handleChange} />
            </Field>
            <Field label="Délai">
              <Input name="delay" onChange={handleChange} type="date" />
            </Field>
          </Fieldset.Content>
        </Fieldset.Root>
        <Button type="submit">Crée</Button>
      </form>
    </Box>
  );
};

export default NewBusiness;

import { Flex, Button, Fieldset, Input, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useState } from "react";
import Axios from "@/utils/Axios";
import { useNavigate } from "react-router-dom";
import { toaster } from "@/components/ui/toaster";
const New = () => {
  const [client, setClient] = useState({});
  const navigate = useNavigate();

  console.log(client);

  const handleUpdate = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post("/client/create", client);

      toaster.create({
        title: "Client envoyé",
        type: "success",
      });
    } catch (error) {
      toaster.create({
        title: error.response.data.message,
        type: "error",
      });
    }
  };

  return (
    <>
      <Flex justify={"center"} align={"center"} height={"100%"}>
        <form onSubmit={handleSubmit}>
          <Fieldset.Root>
            <Stack>
              <Fieldset.Legend>Création d'un nouveau client</Fieldset.Legend>
              <Fieldset.HelperText>
                Merci de remplir la fiche contact ci-dessous
              </Fieldset.HelperText>
            </Stack>

            <Fieldset.Content>
              <Field label="Entreprise">
                <Input name="client_name" onChange={handleUpdate} />
              </Field>
              <Field label="N° de SIRET">
                <Input name="siret" onChange={handleUpdate} />
              </Field>
              <Field label="N° TVA Intracom">
                <Input name="tva_intra" onChange={handleUpdate} />
              </Field>
              <Field label="Nom du contact">
                <Input name="client_contact_name" onChange={handleUpdate} />
              </Field>
              <Field label="Mail du contatct">
                <Input
                  name="client_contact_mail"
                  onChange={handleUpdate}
                  type="mail"
                />
              </Field>
              <Field label="Téléphone">
                <Input
                  name="client_contact_number"
                  onChange={handleUpdate}
                  type="phone"
                />
              </Field>
            </Fieldset.Content>

            <Stack>
              <Fieldset.Legend>Adresse de facturation</Fieldset.Legend>
              <Fieldset.HelperText>
                Indiqué ci-dessous l'adresse de facturation
              </Fieldset.HelperText>
            </Stack>

            <Fieldset.Content>
              <Field label="Adresse">
                <Input name="client_invoice_address" onChange={handleUpdate} />
              </Field>
              <Field label="Code postal">
                <Input name="client_invoice_postal" onChange={handleUpdate} />
              </Field>
              <Field label="Commune">
                <Input name="client_invoice_city" onChange={handleUpdate} />
              </Field>
              <Field label="Pays">
                <Input name="client_invoice_region" onChange={handleUpdate} />
              </Field>
            </Fieldset.Content>

            <Stack>
              <Fieldset.Legend>Adresse de livraison</Fieldset.Legend>
              <Fieldset.HelperText>
                Merci de remplir des champs concernés si l'adresse de livraison
                est différentes de l'adresse de facturation
              </Fieldset.HelperText>
            </Stack>

            <Fieldset.Content>
              <Field label="Adresse">
                <Input name="client_delivery_address" onChange={handleUpdate} />
              </Field>
              <Field label="Code postal">
                <Input name="client_delivery_postal" onChange={handleUpdate} />
              </Field>
              <Field label="Commune">
                <Input name="client_delivery_city" onChange={handleUpdate} />
              </Field>
              <Field label="Pays">
                <Input name="client_delivery_region" onChange={handleUpdate} />
              </Field>
            </Fieldset.Content>
          </Fieldset.Root>

          <Button type="submit">Crée</Button>
        </form>
      </Flex>
    </>
  );
};

export default New;

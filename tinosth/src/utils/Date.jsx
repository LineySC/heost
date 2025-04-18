import { format, isBefore, isAfter, subDays, parseISO } from "date-fns";
import fr from "date-fns/locale/fr";
import { Stack } from "@chakra-ui/react";
import { BiSolidHot } from "react-icons/bi";

export const CustomDate = ({ getDate }) => {
  const formattedDate = format(new Date(), "dd/MM/yyyy", { locale: fr });
  return formattedDate;
};

export function DeliverDate({ deliverDate }) {
  if (!deliverDate) return null; // Évite les erreurs si la date est undefined

  const todayDate = new Date();
  const parsedDeliverDate = parseISO(deliverDate); // Convertit la date string en objet Date
  const weekBeforeDeliver = subDays(parsedDeliverDate, 7); // Soustrait 7 jours

  const isUrgent =
    isAfter(todayDate, weekBeforeDeliver) &&
    isBefore(todayDate, parsedDeliverDate);

  return (
    <Stack direction="row" spacing={2}>
      <span>{format(parsedDeliverDate, "dd MMMM yyyy", { locale: fr })}</span>
      {isUrgent && <BiSolidHot color="error" sx={{ fontSize: "16px" }} />}
    </Stack>
  );
}

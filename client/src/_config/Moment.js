import Moment from "react-moment";
import "moment/locale/fr";
import moment from "moment";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Stack } from "@mui/material";

export function Date({ value }) {
  if (value != null) {
    return (
      <Moment locale="fr" format="DD/MM/YYYY">
        {value}
      </Moment>
    );
  } else {
    return null;
  }
}

export function DeliverDate({ deliverDate }) {
  const todayDate = moment();

  const weekBeforeDeliver = moment(deliverDate).subtract(7, "days");

  if (
    todayDate.isSameOrAfter(weekBeforeDeliver) &&
    todayDate.isBefore(deliverDate)
  ) {
    const icone = <WhatshotIcon color="error" sx={{ fontSize: "16px" }} />;

    return (
      <Stack direction="row" spacing={2}>
        <Date value={deliverDate} /> {icone}
      </Stack>
    );
  } else {
    return <Date value={deliverDate} />;
  }
}

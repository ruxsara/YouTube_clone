import { DateTime } from "luxon";

export const formatDate = (date) => {
  const formattedDate = DateTime.fromISO(date);
  const humanReadable = formattedDate.toLocaleString(DateTime.DATE_MED);
  return humanReadable
};

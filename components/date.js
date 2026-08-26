import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time datetime={dateString}>{format(date, "yyy. LL. dd")}</time>;
}

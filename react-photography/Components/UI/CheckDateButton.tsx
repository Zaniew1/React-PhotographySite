import classes from "./CheckDateButton.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export const CheckDateButton: React.FC = (props) => {
  return (
    <Link className={classes.nav__callendar} href="/contact">
      <FontAwesomeIcon icon={faCalendar} />
      Sprawdź Datę
    </Link>
  );
};

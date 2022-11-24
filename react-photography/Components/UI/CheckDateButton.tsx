import classes from "./CheckDateButton.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
// import { CheckDateButtonType } from "../../Types/types";

export const CheckDateButton: React.FC = (props): JSX.Element => {
  return (
    <Link className={classes.nav__callendar} href="/contact">
      <FontAwesomeIcon className={classes.callendar__icon} icon={faCalendar} />
      Sprawdź Datę
    </Link>
  );
};

import classes from "./CheckDateButton.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useScrollChecker } from "../../hooks/PageY-checker.tsx";
export const CheckDateButton: React.FC = (props): JSX.Element => {
  const pageY = useScrollChecker();
  return (
    <Link className={pageY <= 1 ? classes.nav__callendar : `${classes.nav__callendar} ${classes.nav__callendar__scrolled}`} href="/contact">
      <FontAwesomeIcon className={classes.callendar__icon} icon={faCalendar} />
      Sprawdź Datę
    </Link>
  );
};

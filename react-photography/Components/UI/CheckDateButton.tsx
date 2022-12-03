import classes from "./CheckDateButton.module.css";
import Link from "next/link";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useScrollChecker } from "../../hooks/PageY-checker.tsx";
import { FontawesomeObject, IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const CheckDateButton = (props: {text: string, fontAwesome: IconDefinition}): JSX.Element => {
  const pageY = useScrollChecker();
  return (
    <Link className={pageY <= 1 ? classes.nav__callendar : `${classes.nav__callendar} ${classes.nav__callendar__scrolled}`} href="/contact">
      <FontAwesomeIcon className={classes.callendar__icon} icon={props.fontAwesome} />
      {props.text}
    </Link>
  );
};

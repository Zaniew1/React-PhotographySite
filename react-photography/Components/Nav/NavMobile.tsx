import classes from "./NavMobile.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";
import { CheckDateButton } from "../UI/CheckDateButton";
export const NavMobile: React.FC = (props) => {
  return (
    <nav>
      <div className={classes.nav__pictures}>
        <Link href="/portfolio"></Link>
        <Link href="/gallery"></Link>
      </div>
      <div className={classes.nav__links}>
        <Link href="/offert"></Link>
        <Link href="/about"></Link>
        <Link href="/opinion"></Link>
        <Link href="/contact"></Link>
      </div>
      <div className={classes.nav__date}>
        <CheckDateButton />
      </div>
      <div className={classes.nav__socials}>
        <div className={classes.socials__icons}>
          <FontAwesomeIcon icon={faFaceAngry} />
        </div>
        <div className={classes.socials__icons}>
          <FontAwesomeIcon icon={faFaceAngry} />
        </div>
      </div>
    </nav>
  );
};

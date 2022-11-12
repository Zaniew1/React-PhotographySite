import classes from "./NavMobile.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";
import { CheckDateButton } from "../UI/CheckDateButton";
export const NavMobile: React.FC = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.nav__pictures}>
        <ul className={classes.pictures__list}>
          <li className={classes.pictures__items}>
            <Link href="/portfolio">Portfolio ślubne</Link>
          </li>
          <li className={classes.pictures__items}>
            <Link href="/gallery">Galeria Zdjęć</Link>
          </li>
        </ul>
      </div>
      <div className={classes.nav__links}>
        <ul className={classes.nav__list}>
          <li className={classes.nav__items}>
            <Link href="/offert">Oferta</Link>
          </li>
          <li className={classes.nav__items}>
            <Link href="/about">O Mnie</Link>
          </li>
          <li className={classes.nav__items}>
            <Link href="/opinion">Opinie</Link>
          </li>
          <li className={classes.nav__items}>
            <Link href="/contact">Kontakt</Link>
          </li>
        </ul>
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

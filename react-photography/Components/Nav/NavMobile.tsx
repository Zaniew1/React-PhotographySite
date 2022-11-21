import classes from "./NavMobile.module.css";
import Link from "next/link";
import { navigation } from "../../Data/Data";
import { BooleanElement } from "../../Types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";
import { CheckDateButton } from "../UI/CheckDateButton";
import { NavigationLinks } from "../UI/NavigationLinks";

export const NavMobile: React.FC<BooleanElement> = (props): JSX.Element => {
  return (
    <nav
      className={
        props.drops ? classes.nav : `${classes.nav} ${classes.nav__active}`
      }
    >
      <div className={classes.nav__pictures}>
        <ul className={classes.pictures__list}>
          <li
            className={
              props.drops
                ? classes.pictures__items
                : `${classes.pictures__items} ${classes.pictures__items__active}`
            }
          >
            <Link className={classes.nav__linke} href="/portfolio">
              Portfolio ślubne
            </Link>
          </li>
          <li
            className={
              props.drops
                ? classes.pictures__items
                : `${classes.pictures__items} ${classes.pictures__items__active}`
            }
          >
            <Link className={classes.nav__linke} href="/gallery">
              Galeria Zdjęć
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.nav__links}>
        <ul className={classes.nav__list}>
          {navigation.map((el) => {
            return (
              <NavigationLinks
                key={Math.random()}
                text={el.text}
                classLi={classes.nav__items}
                classLink={classes.nav__link}
                classLinkActive={classes.nav__link__active}
                path={el.path}
              />
            );
          })}
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

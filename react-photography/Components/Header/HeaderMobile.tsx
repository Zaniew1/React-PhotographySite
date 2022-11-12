import classes from "./HeaderMobile.module.css";
import { Fragment, useEffect, useState } from "react";
import { NavMobile } from "../Nav/NavMobile";
import { NavDesktop } from "../Nav/NavDesktop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "./Logo";
export const HeaderMobile: React.FC = (props) => {
  const [dropNav, setDropNav] = useState(false);

  const burgerClickHandler = () => {
    if (dropNav === true) {
      setDropNav(false);
    } else if (dropNav === false) {
      setDropNav(true);
    }
  };
  return (
    <Fragment>
      <header
        className={
          !dropNav
            ? classes.header
            : `${classes.header} ${classes.header__active}`
        }
      >
        <Logo />
        <div className={classes.wrapper__burger} onClick={burgerClickHandler}>
          <span
            className={
              !dropNav
                ? classes.burger
                : `${classes.burger} ${classes.burger__active}`
            }
          ></span>
        </div>
      </header>
      {dropNav && <NavMobile />}
    </Fragment>
  );
};

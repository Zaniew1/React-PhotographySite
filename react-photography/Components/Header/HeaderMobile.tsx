import classes from "./HeaderMobile.module.css";
import { Fragment, useEffect, useState, useContext } from "react";
import { NavMobile } from "../Nav/NavMobile";
import { NavDesktop } from "../Nav/NavDesktop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { UIContext } from "../../Store/UI-context";
import { Logo } from "./Logo";
export const HeaderMobile: React.FC = (props) => {
  const { drop, dropDownNav } = useContext(UIContext);
  console.log(useContext(UIContext));
  const burgerClickHandler = () => {
    drop ? dropDownNav(false) : dropDownNav(true);
  };
  return (
    <Fragment>
      <header
        className={
          !drop ? classes.header : `${classes.header} ${classes.header__active}`
        }
      >
        <Logo />
        <div className={classes.wrapper__burger} onClick={burgerClickHandler}>
          <span
            className={
              !drop
                ? classes.burger
                : `${classes.burger} ${classes.burger__active}`
            }
          ></span>
        </div>
      </header>
      {drop && <NavMobile />}
    </Fragment>
  );
};

import { NavDesktop } from "../Nav/NavDesktop";
import { CheckDateButton } from "../UI/CheckDateButton";
import { Logo } from "./Logo";
import { useScrollChecker } from "../../hooks/useScrollChecker";

import classes from "./HeaderDesktop.module.css";
export const HeaderDesktop: React.FC = (props) => {
  const pageY = useScrollChecker();
  return (
    <header
      className={
        pageY <= 1
          ? classes.header
          : `${classes.header} ${classes.header__scrolled}`
      }
    >
      <div className={classes.header__wrapper}>
        {pageY <= 1 ? <Logo /> : ""}
        <NavDesktop />
      </div>
      <div className={classes.button__wrapper}>
        <CheckDateButton />
      </div>
    </header>
  );
};

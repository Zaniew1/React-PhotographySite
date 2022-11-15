import { NavDesktop } from "../Nav/NavDesktop";
import { CheckDateButton } from "../UI/CheckDateButton";
import { Logo } from "./Logo";
import { useScrollChecker } from "../../hooks/PageY-checker.tsx";

import classes from "./HeaderDesktop.module.css";
export const HeaderDesktop: React.FC = (props) => {
  const pageY = useScrollChecker();
  return (
    <header className={classes.header}>
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

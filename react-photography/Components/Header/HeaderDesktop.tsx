import { NavDesktop } from "../Nav/NavDesktop";
import { CheckDateButton } from "../UI/CheckDateButton";
import { Logo } from "./Logo";
import classes from "./HeaderDesktop.module.css";
export const HeaderDesktop: React.FC = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.header__wrapper}>
        <Logo />
        <NavDesktop />
      </div>
      <div className={classes.button__wrapper}>
        <CheckDateButton />
      </div>
    </header>
  );
};

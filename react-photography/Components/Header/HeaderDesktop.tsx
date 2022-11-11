import { NavDesktop } from "../Nav/NavDesktop";
import { CheckDateButton } from "../UI/CheckDateButton";
import classes from "./HeaderDesktop.module.css";
export const HeaderDesktop: React.FC = (props) => {
  return (
    <header>
      <div className={classes.logo}>
        <div className={classes.wrapper__logo}>
          <div className={classes.logo__name}>Kamila Koziara</div>
          <div className={classes.logo__proffesion}>fotografia ślubna</div>
        </div>
      </div>
      <NavDesktop />
      <CheckDateButton />
    </header>
  );
};

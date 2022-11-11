import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "./Logo";
export const HeaderMobile: React.FC = () => {
  return (
    <header>
      <Logo />
      <div className={classes.wrapper__burger}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
};

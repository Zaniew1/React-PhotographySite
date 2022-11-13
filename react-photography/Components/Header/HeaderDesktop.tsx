import { NavDesktop } from "../Nav/NavDesktop";
import { useState, useEffect } from "react";
import { CheckDateButton } from "../UI/CheckDateButton";
import { Logo } from "./Logo";
import classes from "./HeaderDesktop.module.css";
export const HeaderDesktop: React.FC = (props) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(offset);

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

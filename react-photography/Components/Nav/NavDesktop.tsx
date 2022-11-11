import Link from "next/link";
import classes from "./NavDesktop.module.css";
export const NavDesktop: React.FC = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.nav__initials}>K&K</div>
      <div className={classes.nav__link}>
        <Link href="/portfolio">Portfolio Ślubne</Link>
        <Link href="/gallery">Galeria Zdjęć</Link>
      </div>
      <div className={classes.nav__link}>
        <Link href="/offert"></Link>
      </div>
      <div className={classes.nav__link}>
        <Link href="/about"></Link>
      </div>
      <div className={classes.nav__link}>
        <Link href="/opinion"></Link>
      </div>
      <div className={classes.nav__link}>
        <Link href="/contact"></Link>
      </div>
    </nav>
  );
};

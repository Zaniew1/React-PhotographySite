import Link from "next/link";
import classes from "./NavDesktop.module.css";
export const NavDesktop: React.FC = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.nav__initials}>K&K</div>
      <div className={classes.nav__navigation}>
        <div className={classes.nav__wrapper}>
          <div className={classes.nav__link}>
            <Link href="/portfolio">Portfolio Ślubne</Link>
          </div>
          <div className={classes.nav__link}>
            <Link href="/gallery">Galeria Zdjęć</Link>
          </div>
        </div>

        <div className={classes.nav__wrapper}>
          <div className={classes.nav__link}>
            <Link href="/offert">Oferta</Link>
          </div>
          <div className={classes.nav__link}>
            <Link href="/about">O Mnie</Link>
          </div>
          <div className={classes.nav__link}>
            <Link href="/opinion">Opinie</Link>
          </div>
          <div className={classes.nav__link}>
            <Link href="/contact">Kontakt</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

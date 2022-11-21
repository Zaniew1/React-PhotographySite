import Link from "next/link";
import classes from "./NavDesktop.module.css";
import { navigation } from "../../Data/Data";
import { NavigationLinks } from "../UI/NavigationLinks";
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

        <ul className={classes.nav__wrapper}>
          {navigation.map((el) => {
            return (
              <NavigationLinks
                key={Math.random()}
                text={el.text}
                path={el.path}
                classLi={classes.nav__li}
                classLink={classes.nav__link}
                classLinkActive={classes.nav__link__active}
              />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

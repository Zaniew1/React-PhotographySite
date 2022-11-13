import classes from "./Logo.module.css";
import Link from "next/link";
import { useScrollChecker } from "../../hooks/scroll-checker";
export const Logo: React.FC = (props) => {
  const scroll = useScrollChecker();
  return (
    <div className={scroll <= 0 ? classes.logo : classes.logo__disabled}>
      <Link href="/" className={classes.logo__name}>
        Kamila Koziara
      </Link>
      <div className={classes.logo__proffesion}>fotografia ślubna</div>
    </div>
  );
};

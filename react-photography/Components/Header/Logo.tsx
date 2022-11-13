import classes from "./Logo.module.css";
import Link from "next/link";
export const Logo: React.FC = (props) => {
  return (
    <div className={classes.logo}>
      <Link href="/" className={classes.logo__name}>
        Kamila Koziara
      </Link>
      <div className={classes.logo__proffesion}>fotografia ślubna</div>
    </div>
  );
};

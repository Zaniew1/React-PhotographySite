import classes from "./Logo.module.css";
export const Logo: React.FC = (props) => {
  return (
    <div className={classes.logo}>
      <div className={classes.logo__wrapper}>
        <div className={classes.logo__name}>Kamila Koziara</div>
        <div className={classes.logo__proffesion}>fotografia ślubna</div>
      </div>
    </div>
  );
};

import classes from "./Slider.module.css";
export const Slider: React.FC = (props) => {
  return (
    <section className={classes.slider}>
      <div className={classes.slider__slider}></div>
      <div className={classes.slider__wrapper}>
        <p className={classes.slider__text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quam,
          rerum accusantium iure odio numquam iste, maiores sint beatae eveniet
          alias odit rem ad ipsum, aut eius vel. Voluptates, eos.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
          exercitationem nemo ab minus in error corporis autem laudantium,
          numquam perferendis blanditiis, officia hic aliquam similique eum
          adipisci recusandae tenetur minima!
        </p>
      </div>
    </section>
  );
};

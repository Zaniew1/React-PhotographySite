import classes from "./Slider.module.css";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
type Numeric = number;
const slider: { img: string; alt: string }[] = [
  { img: "/../public/img/picture2.jpg", alt: "1" },
  { img: "/../public/img/picture3.jpg", alt: "2" },
  { img: "/../public/img/picture4.jpg", alt: "3" },
  { img: "/../public/img/picture1.jpg", alt: "4" },
];
export const Slider: React.FC = (props) => {
  const [current, setCurrent] = useState<Numeric>(0);
  const length: number = slider.length;
  const previousSlideHandler = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlideHandler = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  if (!Array.isArray(slider) || slider.length <= 0) {
    return null;
  }
  return (
    <section className={classes.slider}>
      <FontAwesomeIcon
        icon={faArrowAltCircleLeft}
        className={classes.slider__left}
        onClick={previousSlideHandler}
      />
      <FontAwesomeIcon
        icon={faArrowAltCircleRight}
        className={classes.slider__right}
        onClick={nextSlideHandler}
      />
      {slider.map((slider, index) => {
        return (
          <div
            key={Math.random()}
            className={
              index === current
                ? classes.slider__slide__active
                : classes.slider__slide
            }
          >
            {index === current && (
              <Image
                src={slider.img}
                alt={slider.alt}
                layout="fill"
                className={classes.image}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

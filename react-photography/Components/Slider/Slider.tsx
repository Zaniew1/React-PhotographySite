import classes from "./Slider.module.css";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
export const Slider: React.FC = (props) => {
  type CurrentSlider = number;
  const [current, setCurrent] = useState<CurrentSlider>(0);

  const sliderData = [
    { img: "/../../public/img/footerBgc.jpg" },
    { img: "/../../public/img/footerBgc.jpg" },
    { img: "/../../public/img/footerBgc.jpg" },
    { img: "/../../public/img/footerBgc.jpg" },
  ];
  const length = sliderData.length;
  const prevSlide = {
    setCurrent((current === 0) ? length - 1 : current - 1);
  };
  const nextSlide = {
    setCurrent((current === length - 1) ? 0 : current + 1);
  };
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {return null}
    return (
      <section className={classes.slider}>
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className={classes.slider__left}
          onClick={() => prevSlide}
        />
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className={classes.slider__left}
          onClick={() => nextSlide}
        />

        {sliderData.map((slide, index) => {
          return (
            <Image
              key={Math.random()}
              src={slide.img}
              alt="Random picture"
              width={500}
              height={600}
            />
          );
        })}
      </section>
    );
};

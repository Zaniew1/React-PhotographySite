import { useState, useEffect } from "react";

export const useWidthSize = () => {
  const [widthSize, getDimension] = useState({
    dynamicWidth: 0,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [widthSize]);
  return widthSize;
};

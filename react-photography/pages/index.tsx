import { HeaderMobile } from "../Components/Header/HeaderMobile";
import { HeaderDesktop } from "../Components/Header/HeaderDesktop";
import { Footer } from "../Components/Footer/Footer";
import { useState, useEffect } from "react";
import { useWidthSize } from "../hooks/Width-checker";
import { Slider } from "../Components/Slider/Slider";

export default function Home() {
  const widthSize = useWidthSize();
  const [desktopResolution, setDesktopResolution] = useState(false);
  useEffect(() => {
    if (widthSize.dynamicWidth >= 768) {
      setDesktopResolution(true);
    } else {
      setDesktopResolution(false);
    }
  }, [widthSize]);
  return (
    <main>
      {!desktopResolution && <HeaderMobile />}
      {desktopResolution && <HeaderDesktop />}
      <Slider />
      <Footer />
    </main>
  );
}

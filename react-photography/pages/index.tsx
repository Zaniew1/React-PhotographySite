import { HeaderMobile } from "../Components/Header/HeaderMobile";
import { HeaderDesktop } from "../Components/Header/HeaderDesktop";
import { Footer } from "../Components/Footer/Footer";
import { Slider } from "../Components/Slider/Slider";
import { UIContext } from "../Store/UI-context";
import { useContext } from "react";

export default function Home() {
  const { desktopResolution } = useContext(UIContext);
  return (
    <main>
      {!desktopResolution && <HeaderMobile />}
      {desktopResolution && <HeaderDesktop />}
      <Slider />
      <Footer />
    </main>
  );
}

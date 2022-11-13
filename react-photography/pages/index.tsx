import { HeaderMobile } from "../Components/Header/HeaderMobile";
import { HeaderDesktop } from "../Components/Header/HeaderDesktop";
import { Footer } from "../Components/Footer/footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [desktopResolution, setDesktopResolution] = useState(false);
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setDesktopResolution(true);
    } else {
      setDesktopResolution(false);
    }
  }, []);
  return (
    <main>
      {!desktopResolution && <HeaderMobile />}
      {desktopResolution && <HeaderDesktop />}
      <Footer />
    </main>
  );
}

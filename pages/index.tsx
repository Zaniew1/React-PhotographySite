
import { Footer } from '../Components/Footer/Footer';
import { Slider } from "../Components/MainPage/Slider/Slider";
import { About } from '../Components/MainPage/About/About';
import { Header } from './../Components/Header/Header';


export default function Home() {
  return (
    <main>
      <Header/>
      <Slider />
      <About />
      <Footer />
    </main>
  );
}

//COMPONENTS / HOOKS AND SECTIONS
import Header from "./Components/Semantic/Header.jsx";
import HeroSection from "./Components/Semantic/HeroSection.jsx";
import Carrusel from "./Components/Semantic/Carrusel.jsx";
import FavouriteSection from "./Components/Semantic/FavouriteSECTION.JSX";
import SocialButtons from "./Components/Semantic/Functional/SocialButtons.jsx";
import AboutSection from "./Components/Semantic/AboutSection.jsx";
import FAQSection from "./Components/Semantic/FAQSection.jsx";
import Footer from "./Components/Semantic/Footer.jsx";
import { useRef } from "react";

//PHOTOS, LOGOS & IMAGES
import Hersheys from "./assets/Hershey-logo.jpg";
import DulceMM from "./assets/MM.png";
import Montblanc from "./assets/LogoMontbalc.png";
import Ferrero from "./assets/FerreroRoche.png";
import videoHeroHorizontal from "./assets/videoHeroHorizontal.mp4";
import MexicanVideo from "./assets/MexicanVideo.mp4";
import Colmillos from "./assets/Productos/Colmillos.png";
import Fresitas from "./assets/Productos/Fresitas.jpg";
import GomasBomBom from "./assets/Productos/GomasBomBom.png";
import GomasNanos from "./assets/Productos/GomasNanos.png";
import JetCookies from "./assets/Productos/JetCookies.png";
import JumboMix from "./assets/Productos/JumboMix.jpg";
import Twix from "./assets/Productos/Twix.png";
import KinderBueno from "./assets/Productos/KinderBueno.webp";

//LOGOS CARRUSEL SECTION
const logosCarrusel = [
  { id: 1, src: DulceMM, alt: "m&m" },
  { id: 2, src: Hersheys, alt: "Hersheys" },
  { id: 3, src: Ferrero, alt: "Ferrero" },
  { id: 4, src: Montblanc, alt: "Montblanc" },
];

//PRODUCTS FAVOURITE SECTION
const productosFavoritos = [
  { id: 10, src: Twix, name: "Chocolatina Twix 85gr", price: '$7500' },
  { id: 20, src: KinderBueno, name: "Kinder Bueno Relleno 43gr", price: '$9000' },
  { id: 30, src: JetCookies, name: "Jet Cookies&Cream 50gr", price: '$7000' },
  { id: 40, src: JumboMix, name: "Jumbo Mix 60gr", price: '$5000' },
  { id: 50, src: GomasNanos, name: "Paquete Gomas Nanos 100gr", price: '$3500' },
  { id: 60, src: Colmillos, name: "Colmillos 40gr", price: '$3000' },
  { id: 70, src: GomasBomBom, name: "BON BON BUM Gomas 45gr", price: '$2500' },
  { id: 80, src: Fresitas, name: "Fresitas Mini 25gr", price: '$2500' },
];

//COMPONENT APP.JSX

function App() {
  const scrollCarrusel = useRef() //Ref to Carrusel Section

  const scrollToCarrusel =()=> { //Function to scroll automatically to Carrusel Section
    scrollCarrusel.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Header /> 
      <main>
        <HeroSection
          showHeader={true}
          video={videoHeroHorizontal}
          $sectionHeight={"100vh"}
          $side={"left"}
          $sideButton={"center"}
          $textAlign="left"
          scrollToCarrusel={scrollToCarrusel}
        />
        <Carrusel carruselRef={scrollCarrusel} logosCarrusel={logosCarrusel} />
        <FavouriteSection productosFavoritos={productosFavoritos} />
        <HeroSection $marginBottom ={true}
          showHeader={false}
          video={MexicanVideo}
          $sectionHeight={"80vh"}
          $side={"right"}
          $sideButton={"right"}
        />
        <SocialButtons />
        <AboutSection />
        <FAQSection />
      </main>
      <Footer/>
    </>
  );
}

export default App;

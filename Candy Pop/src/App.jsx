import HeroSection from "./Components/Semantic/HeroSection.jsx";
import Carrusel from "./Components/Semantic/Carrusel.jsx";
import Hersheys from "./assets/Hershey-logo.jpg";
import DulceMM from "./assets/MM.png";
import Montblanc from "./assets/LogoMontbalc.png";
import Ferrero from "./assets/FerreroRoche.png";
import FavouriteSection from "./Components/Semantic/FavouriteSECTION.JSX";
import videoHeroHorizontal from "./assets/videoHeroHorizontal.mp4"
import MexicanVideo from "./assets/MexicanVideo.mp4";
import SocialButtons from "./Components/Semantic/Functional/SocialButtons.jsx";
import AboutSection from "./Components/AboutSection.jsx";
import Colmillos from './assets/Productos/Colmillos.png';
import Fresitas from './assets/Productos/Fresitas.jpg';
import GomasBomBom from './assets/Productos/GomasBomBom.png';
import GomasNanos from './assets/Productos/GomasNanos.png';
import JetCookies from './assets/Productos/JetCookies.png';
import JumboMix from './assets/Productos/JumboMix.jpg';
import Twix from './assets/Productos/Twix.png'
import KinderBueno from './assets/Productos/KinderBueno.webp'

const logosCarrusel = [
  { id: 1, src: DulceMM, alt: "m&m" },
  { id: 2, src: Hersheys, alt: "Hersheys" },
  { id: 3, src: Ferrero, alt: "Ferrero" },
  { id: 4, src: Montblanc, alt: "Montblanc" },
];

const productosFavoritos = [
  {id: 10, src: Twix, name: 'Producto 1', price: 1000},
  {id: 20, src: KinderBueno, name: 'Producto 2', price: 1000},
  {id: 30, src: JetCookies, name: 'Producto 3', price: 1000},
  {id: 40, src: JumboMix, name: 'Producto 4', price: 1000},
  {id: 50, src: GomasNanos, name: 'Producto 5', price: 1000},
  {id: 60, src: Colmillos, name: 'Producto 6', price: 1000},
  {id: 70, src: GomasBomBom, name: 'Producto 7', price: 1000},
  {id: 80, src: Fresitas, name: 'Producto 8', price: 1000},
]



function App() {
  return (
    <>
      <HeroSection showHeader={true} video={videoHeroHorizontal} $sectionHeight={'100vh'} $side={'left'} $sideButton={'center'} $textAlign = 'left' />
      <Carrusel logosCarrusel={logosCarrusel} />
      <FavouriteSection productosFavoritos={productosFavoritos}/>
      <HeroSection showHeader={false} video={MexicanVideo} $sectionHeight={'80vh'} $side={'right'} $sideButton={'right'}/>
      <SocialButtons/>
      <AboutSection/>
    </>
  );
}

export default App;

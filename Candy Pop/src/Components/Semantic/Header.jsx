//COMPONENTS & HOOKS
import styled from "styled-components";
import BurguerMenu from "./Functional/BurguerMenu";
import { useEffect, useRef, useState } from "react";

// ICONS
import Hamburguesa from "../../assets/Icons/Hamburguesa.png";
import ImagenPrincipalLogoNav from "../../assets/Icons/ImagenPrincipalLogoNav.png";
import Buscador from "../../assets/Icons/Buscador.png";
import Persona from "../../assets/Icons/Persona.png";
import CarritoCompras from "../../assets/Icons/CarritoCompras.png";
import Ubicacion from "../../assets/Icons/Ubicacion.png";

//NAVBAR
const StyledHeader = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 1.2rem;
  z-index: 10;

  @media (max-width: 900px) {
    background-color: white;
    top: 0;
    position: sticky;
  }
`;

//2 LISTS
const StyledLista = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: left;
  align-items: center;
  list-style: none;
  gap: 1rem;
  margin: 0 2rem;

  @media (max-width: 900px) {
    gap: 0.5rem;

    &:last-of-type {
      //DISAPPEAR SECOND <UL> IF SCREEN IS TOO SMALL
      display: none;
      gap: 0.3rem;
    }
  }

  @media (max-width: 600px) {
    //DISAPPEAR EVERYTHING EXCEPT LOGO AND BURGUER ICON
    li:has(button) {
      display: none;
    }
  }
`;

//ICONS

const StyledItem = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  cursor: pointer;
  @media (max-width: 900px) {
    width: 1.5rem; //
    height: 1.5rem;
  }
`;

//GOMAS, CHOCOLATES, DETALLES

const StyledButtonHeader = styled.button`
  border: none;
  background-color: transparent;
  color: black;
  font-weight: 800;
  text-shadow: 1px 1px 1px rgba(133, 133, 133, 0.47);
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  position: relative;
  transition: color 0.3s ease-in-out;
  white-space: nowrap;
  padding: 0.5rem 0.25rem;

  &:hover {
    color: white;
  }

  /* LINE UNDER ITEMS ON THE NAVBAR (LINE APPEARS AFTER MOUSEMOVE) */
  &::after {
    content: "";
    position: absolute;
    bottom: 0; /* STARTS UNDER THE ITEMS*/
    left: 0;
    width: 100%;
    height: 2.5px; /* LINE'S HEIGHT */
    background-color: #ffffffff;

    /* LINE IS INVISIBLE IN THE BEGINNING */
    transform: translateY(100%);
    opacity: 0;
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  }

  /* HOVER AFTER MOUSEMOVE */
  &:hover::after {
    transform: translateY(
      -0.4rem
    ); 
    opacity: 1; 
  }
`;

function Header() {
  const [menu, setMenu] = useState(false); //MENU STATUS (OPEN / CLOSED)
  const menuRef = useRef();  // REF TO THE SIDE MENU
  const [sideMenu, setSideMenu] = useState("left");  //SIDE OF THE MENU (LEFT OR RIGHT)

  const openMenu = (side) => { //FUNCTION TO OPEN  THE MENU
    setSideMenu(side); // Define the side
    setMenu(true); // Open the menu 
  };

  const checkESC = (event) => { //FUNCTION TO CLOSE THE MENU Y USERS PRESS 'ESC'
    if (event.key === "ESC" || event.key === "Escape") {
      setMenu(false);
    }
  };

  const checkClick = (event) => { //FUNCTION TO CLOSE THE MENU IF USERS PRESS OUTSIDE MENU
    if (!menuRef.current.contains(event.target)) setMenu(false);
  };

  useEffect(() => { //USEFFECT TO "LISTEN" Y USERS DOES CHECKESC FUNCTION
    
    if (menu) {
      addEventListener("keydown", checkESC);
    }

    return () => {
      removeEventListener("keydown", checkESC);
    };
  }, [menu]);

  useEffect(() => { //USEFFECT TO "LISTEN" Y USERS DOES CHECKCLICK FUNCTION
    if (menu) {
      addEventListener("mousedown", checkClick);
    }

    return () => {
      removeEventListener("mousedown", checkClick);
    };
  }, [menu]);

  return (
    <StyledHeader>
      <BurguerMenu menu={menu} menuRef={menuRef} $sideMenu={sideMenu} />
      <StyledLista>
        <li>
          <StyledItem
            onClick={() => openMenu("left")}
            src={Hamburguesa}
            alt="Hamburguesa"
          />
        </li>
        <li>
          <StyledItem
            style={{ width: "10rem", height: "5rem" }}
            src={ImagenPrincipalLogoNav}
            alt="LOGO"
            onClick={() => window.location.reload()}
          />
        </li>
        <li alt="GOMAS">
          <StyledButtonHeader>GOMAS</StyledButtonHeader>
        </li>
        <li alt="CHOCOLATES">
          <StyledButtonHeader>CHOCOLATES</StyledButtonHeader>
        </li>
        <li alt="DETALLES">
          <StyledButtonHeader>DETALLES</StyledButtonHeader>
        </li>
      </StyledLista>
      <StyledLista>
        <li>
          <StyledItem src={Buscador} alt="Buscador" />
        </li>
        <li>
          <a>
            <StyledItem src={Persona} alt="Persona" />
          </a>
        </li>
        <li>
          <StyledItem
            onClick={() => openMenu("right")}
            src={CarritoCompras}
            alt="Carrito Compras"
          />
        </li>
        <li>
          <a href="https://maps.app.goo.gl/6bZePAEfgwNrpSDJ7" target="_blank">
            <StyledItem src={Ubicacion} alt="Ubicacion" />
          </a>
        </li>
      </StyledLista>
    </StyledHeader>
  );
}
export default Header;

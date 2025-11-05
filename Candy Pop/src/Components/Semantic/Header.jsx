import styled from "styled-components";
import Hamburguesa from "../../assets/Icons/Hamburguesa.png";
import ImagenPrincipalLogoNav from "../../assets/Icons/ImagenPrincipalLogoNav.png";
import Buscador from "../../assets/Icons/Buscador.png";
import Persona from "../../assets/Icons/Persona.png";
import CarritoCompras from "../../assets/Icons/CarritoCompras.png";
import Ubicacion from "../../assets/Icons/Ubicacion.png";
import { useEffect, useRef, useState } from "react";
import BurguerMenu from "./Functional/BurguerMenu";

const StyledHeader = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 1.2rem;
  z-index: 10;
   // ✅ Añade padding para evitar que toque los bordes

  @media (max-width: 900px) {
    background-color: white;
    top: 0;
    position: sticky;
  
  }
`;

const StyledLista = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: left;
  align-items: center;
  list-style: none;
  gap: 1rem;
  margin: 0 2rem;

  @media (max-width: 900px) {
    gap: 0.5rem; // ✅ Reduce gap en móvil

    &:last-of-type {
      display: none;
      gap: 0.3rem; // ✅ Gap aún más pequeño para iconos derechos
    }
  }

  @media (max-width: 600px) {
    // ✅ Oculta botones de texto en móvil, solo deja logo
    li:has(button) {
      display: none;
    }
  }
`;

const StyledItem = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  cursor: pointer;
  @media (max-width: 900px) {
    width: 1.5rem; // ✅ Iconos más pequeños en móvil
    height: 1.5rem;
  }
`;

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
  white-space: nowrap; // ✅ Evita que el texto se parta en varias líneas

  padding: 0.5rem 0.25rem;

  &:hover {
    color: white;
  }

  /* 🚨 CLAVE 2: Estilo base de la barra (invisible por defecto) */
  &::after {
    content: "";
    position: absolute;
    bottom: 0; /* Empieza en la parte inferior del botón */
    left: 0;
    width: 100%;
    height: 2.5px; /* Altura de la barra */
    background-color: #ffffffff; /* Color de tu marca (ej. púrpura/rosa) */

    /* Inicialmente la barra está invisible o fuera de vista */
    transform: translateY(100%); /* Moverla 100% hacia abajo (invisible) */
    opacity: 0; /* Hacerla transparente */
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  }

  /* 🚨 CLAVE 3: El efecto HOVER */
  &:hover::after {
    /* Deslizar hacia arriba SÓLO un poco, haciéndola visible */
    transform: translateY(
      -5px
    ); /* Desciende y se hace visible, apareciendo 5px más abajo del borde original */
    opacity: 1; /* Hacerla visible */
  }
`;

function Header() {
  const [menu, setMenu] = useState(false); //Saber si menu esta abierto o cerrado (Definir si abrir o cerrar menu navegacion)
  const menuRef = useRef();
  const [sideMenu, setSideMenu] = useState("left");

  const openMenu = (side) => {
    setSideMenu(side); // ✅ Define el lado
    setMenu(true); // ✅ Abre el menú
  };

  const checkESC = (event) => {
    //Saber si usuario hace click en ESC para salir de navegacion
    if (event.key === "ESC" || event.key === "Escape") {
      setMenu(false);
    }
  };

  const checkClick = (event) => {
    //Saber si usuario hace click en otro lado afuera del menu
    if (!menuRef.current.contains(event.target)) setMenu(false);
  };

  useEffect(() => {
    //Cerrar el MENU si da ESC el usuario
    if (menu) {
      addEventListener("keydown", checkESC);
    }

    return () => {
      removeEventListener("keydown", checkESC);
    };
  }, [menu]);

  useEffect(() => {
    //Cerrar el MENU si el usuario da CLICK en algun otro lado
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

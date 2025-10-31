import styled from "styled-components";
import Hamburguesa from "../../assets/Icons/Hamburguesa.png";
import ImagenPrincipalLogoNav from "../../assets/Icons/ImagenPrincipalLogoNav.png";
import Buscador from "../../assets/Icons/Buscador.png";
import Persona from "../../assets/Icons/Persona.png";
import CarritoCompras from "../../assets/Icons/CarritoCompras.png";
import Ubicacion from "../../assets/Icons/Ubicacion.png";


const StyledHeader = styled.nav`
  display: flex;
  flex-flow: row wrap;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  position: absolute;
  width: 100%;
  top: 1.2rem;
  z-index: 10;
`;

const StyledLista = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  align-items: center;
  list-style: none;
  gap: 1rem;
  margin: 0 2rem;
`;

const StyledItem = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  cursor: pointer;
`;

const StyledButtonHeader = styled.button`
  border: none;
  background-color: transparent;
  color: black;
  font-weight: 800;
  text-shadow: 1px 1px 1px rgba(133, 133, 133, 0.47);
  cursor: pointer;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledLista>
        <li>
          <StyledItem src={Hamburguesa} alt="Hamburguesa" />
        </li>
        <li>
          <StyledItem
            style={{ width: "10rem", height: "5rem" }}
            src={ImagenPrincipalLogoNav}
            alt="LOGO"
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
          <StyledItem src={Persona} alt="Persona" />
        </li>
        <li>
          <StyledItem src={CarritoCompras} alt="Carrito Compras" />
        </li>
        <li>
          <StyledItem src={Ubicacion} alt="Ubicacion" />
        </li>
      </StyledLista>
    </StyledHeader>
  );
}
export default Header;

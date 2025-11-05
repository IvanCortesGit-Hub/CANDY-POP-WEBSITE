import styled, { keyframes } from "styled-components";
import { useMemo } from "react";

const StyledCarruselSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  overflow: hidden;
  margin: 2rem 0;
`;

const StyledTitle = styled.h2`
  text-align: center;
`;

const scroll = keyframes`  //HORIZONTAL MOVEMENT CARRUSEL 
 0% {transform: translateX(0);}
 100% {transform: translateX(calc(-50% - 1rem));}
`;

const StyledCarruselBarra = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 200%;
  animation: ${scroll} 20s linear infinite;
  gap: 3rem;
  padding: 1.5rem 0;
  align-items: center;
`;

const StyledCarruselLogo = styled.div`
  width: 25%;
`;

const StyledCarruselImg = styled.img`
  width: 100%;
  object-fit: contain;
  cursor: pointer;
  
`;

function Carrusel({ logosCarrusel, carruselRef }) {
  const renderLogos = useMemo(() => {
    const newLogos = [...logosCarrusel, ...logosCarrusel]; //NEW BAR WITH 2 TIMES LOGOS PRODUCTS
    return newLogos.map((logo, index) => (
      <StyledCarruselLogo key={`${logo.id}-${index}`}>
        <StyledCarruselImg src={logo.src} alt={logo.alt} />
      </StyledCarruselLogo>
    ));
  }, [logosCarrusel]);

  return (
    <StyledCarruselSection ref={carruselRef}>
      <StyledTitle>PRINCIPALES MARCAS QUE MANEJAMOS</StyledTitle>
      <StyledCarruselBarra>{renderLogos}</StyledCarruselBarra>
    </StyledCarruselSection>
  );
}

export default Carrusel;

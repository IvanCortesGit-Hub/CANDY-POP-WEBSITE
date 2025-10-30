import styled, { keyframes } from "styled-components";
import { useMemo } from "react";

const StyledCarruselSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  overflow: hidden;
`;

const StyledTitle = styled.h2`
  text-align: center;
  color: #3d3d3d;
`;

const scroll = keyframes`
 0% {transform: translateX(0);}
 100% {transform: translateX(calc(-50% - 1rem));}
`;

const StyledCarruselBarra = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 200%;
  animation: ${scroll} 20s linear infinite;
  gap: 2rem;
  align-items: center;
`;

const StyledCarruselLogo = styled.div`
  width: 25%;
`;

const StyledCarruselImg = styled.img`
  width: 100%;
  height:100%;
  object-fit: cover;
`;

function Carrusel({ logosCarrusel }) {
  const renderLogos = useMemo(() => {
    const newLogos = [...logosCarrusel, ...logosCarrusel];
    return newLogos.map((logo) => (
      <StyledCarruselLogo key={logo.id}>
        <StyledCarruselImg src={logo.src} alt={logo.alt} />
      </StyledCarruselLogo>
    ));
  }, [logosCarrusel]);

  return (
    <StyledCarruselSection>
      <StyledTitle>PRINCIPALES MARCAS QUE MANEJAMOS</StyledTitle>
      <StyledCarruselBarra>{renderLogos}</StyledCarruselBarra>
    </StyledCarruselSection>
  );
}

export default Carrusel;

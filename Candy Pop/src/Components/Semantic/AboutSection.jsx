import styled from "styled-components";
import FotoDulceria from "../../assets/FotoDulceria.jpg";
import DulcesVitrina from "../../assets/dulcesVitrinas.jpg";

const StyledAboutSection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  height: 90vh;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 900px) {
    height: auto; // En móvil deja que crezca naturalmente
    margin: 1rem;
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 100%;
  width: 48%;
  position: relative;
  cursor: pointer;
  @media (max-width: 900px) {
    width: 80%;
    min-height: 18rem; // Altura mínima en móvil
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
  filter: brightness(80%);
  transition: filter 0.3s ease;
  &:hover {
    filter: brightness(60%);
  }
`;

const StyledTitle = styled.h3`
  color: whitesmoke;
  position: absolute;
  text-align: center;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 0px 0px 1.5rem rgba(0, 0, 0, 0.8);
`;

function AboutSection() {
  return (
    <StyledAboutSection>
      <StyledInfo>
        <StyledImg src={FotoDulceria} />
        <StyledTitle>CONOCE NUESTRA HISTORIA</StyledTitle>
      </StyledInfo>
      <StyledInfo>
        <StyledImg src={DulcesVitrina} />
        <StyledTitle>RESEÑAS DE NUESTROS USUSARIOS</StyledTitle>
      </StyledInfo>
    </StyledAboutSection>
  );
}

export default AboutSection;

import styled from "styled-components";
import FotoDulceria from "../assets/FotoDulceria.jpg";
import DulcesVitrina from "../assets/dulcesVitrinas.jpg";

const StyledAboutSection = styled.section`
margin-top: 5rem;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 50%;
  height: 100%
  position: relative;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
`;

const StyledTitle = styled.h3`
  color: aquamarine;
  position: absolute;
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
        <StyledTitle>RESENAS DE NUESTROS USUSARIOS</StyledTitle>
      </StyledInfo>
    </StyledAboutSection>
  );
}

export default AboutSection;

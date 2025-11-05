import styled from "styled-components";
import HeroSectionPortrait from "./HeroSectionPortrait";
import Button from "./Functional/Button";

const StyledHeroSection = styled.section`
  position: relative;
  height: ${(props) => props.$sectionHeight};
  width: 100%;
  overflow: hidden;
  z-index: 1;
  margin-bottom: ${props => props.$marginBottom === true ? '4rem' : ''}
`;

function HeroSection({ $marginBottom, $sectionHeight,  video, $side, $sideButton, $textAlign, scrollToCarrusel }) {
  return (
    <>
      <StyledHeroSection $marginBottom={$marginBottom} $sectionHeight={$sectionHeight}>
        <video src={video} autoPlay muted loop />
        <HeroSectionPortrait $side={$side} $textAlign = {$textAlign}  />
        <Button $sideButton={$sideButton} scrollToCarrusel={scrollToCarrusel} />
      </StyledHeroSection>
    </>
  );
}

export default HeroSection;

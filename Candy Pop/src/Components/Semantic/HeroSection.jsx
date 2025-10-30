import styled from "styled-components";
import Header from "./Header";
import HeroSectionPortrait from "./HeroSectionPortrait";
import Button from "./Functional/Button";

const StyledHeroSection = styled.section`
  position: relative;
  height: ${(props) => props.$sectionHeight};
  width: 100%;
  overflow: hidden;
  z-index: 2;
`;

function HeroSection({ $sectionHeight, showHeader, video, $side, $sideButton, $textAlign }) {
  return (
    <>
      <StyledHeroSection $sectionHeight={$sectionHeight}>
        {showHeader && <Header />}
        <video src={video} autoPlay muted loop />
        <HeroSectionPortrait $side={$side} $textAlign = {$textAlign}  />
        <Button $sideButton={$sideButton}/>
      </StyledHeroSection>
    </>
  );
}

export default HeroSection;

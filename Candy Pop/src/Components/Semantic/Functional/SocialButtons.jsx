import styled from "styled-components";
import Whatsapp from "../../../assets/Icons/Whatsapp.png";
import Instagram from "../../../assets/Icons/Instagram.png";
import Telefono from "../../../assets/Icons/Telefono.png";

const StyledSocialContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: transparent;
  position: fixed;
  bottom: 8vh;
  right: 1vw;
  z-index: 3;
`;

const StyledSocialButton = styled.button`
  background-color: transparent;
  backdrop-filter: blur(5rem);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
`;

const StyleSocialImage = styled.img`
  object-fit: contain;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

function SocialButtons() {
  return (
    <StyledSocialContainer>
      <StyledSocialButton>
        <StyleSocialImage src={Whatsapp} />
      </StyledSocialButton>
      <StyledSocialButton>
        <StyleSocialImage src={Instagram} />
      </StyledSocialButton>
      <StyledSocialButton>
        <StyleSocialImage src={Telefono} />
      </StyledSocialButton>
    </StyledSocialContainer>
  );
}

export default SocialButtons;

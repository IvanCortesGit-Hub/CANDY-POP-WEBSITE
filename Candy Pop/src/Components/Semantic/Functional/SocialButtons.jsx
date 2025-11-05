import styled from "styled-components";
import Whatsapp from "../../../assets/Icons/Whatsapp.png";
import Instagram from "../../../assets/Icons/Instagram.png";
import Email from "../../../assets/Icons/gmail.png";

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
        <a target="__blank" href="https://wa.me/573193319407">
          <StyleSocialImage src={Whatsapp} />
        </a>
      </StyledSocialButton>
      <StyledSocialButton>
        <a
          target="__blank"
          href="https://www.instagram.com/dulceria_candypop?igsh=MTFzaGtxbTJrazFtMQ=="
        >
          <StyleSocialImage src={Instagram} />
        </a>
      </StyledSocialButton>
      <StyledSocialButton>
        <a
          target="__blank"
          href="mailto:ivancortes3710@gmail.com"
        >
          <StyleSocialImage src={Email} />
        </a>
      </StyledSocialButton>
    </StyledSocialContainer>
  );
}

export default SocialButtons;

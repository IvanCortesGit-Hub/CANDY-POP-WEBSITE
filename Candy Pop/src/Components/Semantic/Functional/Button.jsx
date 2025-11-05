import { useRef } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  backdrop-filter: blur(5rem);
  border: 1.5px solid rgb(255, 255, 255);
  background: rgba(255, 255, 255, 0);
  color: rgb(255, 255, 255);
  position: absolute;
  z-index: 2;
  bottom: 15%;
  left: ${(props) => (props.$sideButton === "center" ? "45%" : "auto")};
  right: ${(props) => (props.$sideButton === "right" ? "17%" : "auto")};
  padding: 0.5rem 2rem;
  cursor: pointer;
  filter: brightness(100%);

  &:hover {
    filter: brightness(85%);
  }
`;

function Button({ $sideButton, scrollToCarrusel }) {

  return (
    <StyledButton onClick={scrollToCarrusel} $sideButton={$sideButton}>
      DESCUBRE MAS
    </StyledButton>
  );
}

export default Button;

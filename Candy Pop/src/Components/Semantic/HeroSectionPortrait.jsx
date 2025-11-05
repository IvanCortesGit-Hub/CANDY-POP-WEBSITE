import styled, { keyframes } from "styled-components";

const StyledEntrace = keyframes`
  0%{
    opacity: 0;
    transform: translateY(-1rem);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }

`;

const StyledPortrait = styled.div`
  display: flex;
  flex-flow: column wrap;
  color: white;
  position: absolute;
  bottom: 28%;
  left: ${props => props.$side === 'left' ? '12%' : 'auto'};
  right: ${props => props.$side === 'right'? '12%': 'auto'};
  width: 90vw;
  max-width: 28rem;
  color: white;
  text-align: ${props => props.$textAlign === 'left' ? 'left' : 'right'};
  animation: ${StyledEntrace} 1s ease 1;

  @media(max-width: 900px){
    bottom: 30%;
    align-items: center;
    justify-content: center;
  }
`;

function HeroSectionPortrait({$side, $textAlign}){
    return(
        <StyledPortrait $side={$side} $textAlign={$textAlign}>
          <h1>{$textAlign === 'left'? 'TU PRÓXIMO ANTOJO COMIENZA AHORA.' : 'DESCUBRE TODOS NUESTROS DULCES MEXICANOS'}</h1>
          <h3>
            { $textAlign === 'left'? 'Prepárate para una explosión de color y sabor diseñada solo para ti.' : 'Vive el auténtico sabor de México con cada mordida.'}
          </h3>
        </StyledPortrait>
    )
}
export default HeroSectionPortrait;
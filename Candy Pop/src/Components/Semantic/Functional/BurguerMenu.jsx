import styled from "styled-components";

const StyledMenu = styled.div`  //MEUNU BARRAS LATERALES
  display: flex;
  flex-flow: column;
  min-width: 35vw;
  height: 100%;
  position: fixed;
  z-index: 100;
  background-color: rgb(255, 244, 195);
  box-shadow: 0 0 0.5rem black;
  top: 0;
  ${props => props.$sideMenu === 'left' ? 'left: -100%; transition: left 0.5s ease;' : 'right: -100%; transition: right 1s ease;'}

  &.open {
    ${props => props.$sideMenu === 'left' ? 'left: 0' : 'right: 0'}
  }
  @media(max-width: 900px){
    min-width: 40vw;
  }
`;

function BurguerMenu({ menu, menuRef, $sideMenu }) {
  return <StyledMenu $sideMenu={$sideMenu} ref={menuRef} className={menu ? "open" : ""} />;
}

export default BurguerMenu;

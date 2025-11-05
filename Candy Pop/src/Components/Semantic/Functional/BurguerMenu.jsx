import styled from "styled-components";

const StyledMenu = styled.div`
  display: flex;
  flex-flow: column;
  min-width: 30vw;
  height: 100%; /* ✅ Cambia a 100vh */
  position: fixed;
  z-index: 100;
  background-color: rgb(255, 244, 195);
  box-shadow: 0 0 0.5rem black;
  top: 0;
  ${props => props.$sideMenu === 'left' ? 'left: -100%; transition: left 0.5s ease;' : 'right: -100%; transition: right 1s ease;'}

  &.open {
    ${props => props.$sideMenu === 'left' ? 'left: 0' : 'right: 0'}
  }
`;

function BurguerMenu({ menu, menuRef, $sideMenu }) {
  return <StyledMenu $sideMenu={$sideMenu} ref={menuRef} className={menu ? "open" : ""} />;
}

export default BurguerMenu;

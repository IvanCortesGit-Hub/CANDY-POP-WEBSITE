import { useMemo } from "react";
import styled from "styled-components";

const StyledFavouriteSection = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const StyledFavouriteTitleBoton = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  justify-content: space-between;
  width: 90%;
`;

const StyledFavouriteTitle = styled.h2`
  color: #3d3d3d;
  text-align: center;
`;

const StyledGridProducts = styled.div`
  box-sizing: border-box;
  display: grid;
  width: 80%;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  gap: 3rem;
`;

const StyledGridProduct = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

const StyledGridImg = styled.img`
  max-width: 100%;
  object-fit: contain;
`;

const StyledGridDescription = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: start;
  width: 100%;
`;

const StyleProductName = styled.h4`
  color: black;
  font-weight: bold;
  font-size: 1.05rem;
  text-transform: uppercase;
`;

const StyleProductPrice = styled.h4`
  color: #555555;
  font-size: 1rem;
  font-weight: 400;
`;

function FavouriteSection({ productosFavoritos }) {
  const renderProductosFavoritos = useMemo(() => {
    return productosFavoritos.map((producto) => (
      <StyledGridProduct key={producto.id}>
        <StyledGridImg src={producto.src} alt={producto.alt} />
        <StyledGridDescription>
          <StyleProductName>{producto.name}</StyleProductName>
          <StyleProductPrice style={{ marginBottom: "2rem", marginTop: "0" }}>
            {producto.price}
          </StyleProductPrice>
        </StyledGridDescription>
      </StyledGridProduct>
    ));
  }, [productosFavoritos]);
  return (
    <StyledFavouriteSection>
      <StyledFavouriteTitleBoton>
        <li>
          <StyledFavouriteTitle>FAVORITOS</StyledFavouriteTitle>
        </li>
        <li>
          <StyledFavouriteTitle>Ver todos los productos</StyledFavouriteTitle>
        </li>
      </StyledFavouriteTitleBoton>
      <StyledGridProducts>{renderProductosFavoritos}</StyledGridProducts>
    </StyledFavouriteSection>
  );
}

export default FavouriteSection;

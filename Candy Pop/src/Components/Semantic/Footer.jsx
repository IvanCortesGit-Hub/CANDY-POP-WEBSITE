import styled from "styled-components";
import CandyPop from "../../assets/ImagenPrincipal.jpeg";

const StyledFooterSection = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  background-color: #1a1a1a;
  color: white;
  font-weight: bold;
  gap: 1rem;
  font-family: Georgia, "Times New Roman", Times, serif;
  @media(max-width: 900px){
    flex-flow: column wrap;
    align-items: center;
  }
`;

const StyledFooterPart = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 32%;
  @media(max-width: 900px){
    width: 100%;
  }
`;

const StyledFooterList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  gap: 2rem;
  list-style: none;
`;

const StyledFooterImg = styled.img`
  width: 100%;
  object-fit: contain;
  padding: 2rem;
  border-radius: 4rem;
  cursor: pointer;
  @media(max-width: 900px){
    width: 60%;
  }
`;

const StyledFooterForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  /* Definir un ancho manejable para escritorio */
  max-width: 90%;


  padding: 2rem;
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
`;

const StyledFooterInfo = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0.5rem 0;
`;

const StyledFooterLabel = styled.label`
  /* Usamos el color de texto oscuro */
  font-size: 0.9rem;
  font-weight: 600; /* Semi-bold */
  margin-bottom: 0.25rem;
`;

const StyledFooterInput = styled.input`
  /* Ocupar el 100% del ancho del grupo */
  width: 100%;
  padding: 0.75rem 0; /* Padding vertical para altura, padding horizontal para espacio */
  border: none;
  border-bottom: 2px solid #ddd; /* Estilo de línea por defecto */
  background-color: transparent; /* Fondo transparente */
  font-size: 1rem;

  /* Estado de Foco (Focus) */
  &:focus {
    outline: none;
    /* Resaltar con un color de marca al hacer clic */
    border-bottom: 2px solid #e651e9ff;
  }
`;

const StyledButton = styled.button`
  background-color: #a349a4; /* Color Púrpura/Rosa de tu logo */
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c860c8; /* Un tono más claro para el hover */
  }
`;

function Footer() {
  return (
    <StyledFooterSection>
      <StyledFooterPart>
        <StyledFooterImg
          onClick={() => window.location.reload()}
          src={CandyPop}
          alt="
                Candy Pop"
        />
      </StyledFooterPart>
      <StyledFooterPart>
        <StyledFooterList style={{ textAlign: "center", fontSize: "1rem" }}>
          <li style={{cursor: 'pointer'}}>@CANDYPOP. All rights reserved</li>
          <li style={{cursor: 'pointer'}}>Politica</li>
          <li style={{cursor: 'pointer'}}>Condiciones</li>
          <li style={{cursor: 'pointer'}}>Accesibilidad</li>
          <li style={{cursor: 'pointer'}}>Cookies</li>
        </StyledFooterList>
      </StyledFooterPart>
      <StyledFooterPart>
        <StyledFooterForm action="/submit-form">
          <h3 style={{ textAlign: "center" }}>CONTACTANOS</h3>
          <h5>DEJANOS TUS DATOS Y MUY PRONTO TE CONTACTAREMOS!</h5>
          <StyledFooterInfo>
            <StyledFooterLabel>NOMBRE</StyledFooterLabel>
            <StyledFooterInput placeholder="Ingresa nombre aqui..."></StyledFooterInput>
          </StyledFooterInfo>
          <StyledFooterInfo>
            <StyledFooterLabel>APELLIDO</StyledFooterLabel>
            <StyledFooterInput placeholder="Ingresa apellido aqui..."></StyledFooterInput>
          </StyledFooterInfo>
          <StyledFooterInfo>
            <StyledFooterLabel>EMAIL</StyledFooterLabel>
            <StyledFooterInput placeholder="Ingresa email aqui..."></StyledFooterInput>
          </StyledFooterInfo>
          <StyledFooterInfo>
            <StyledFooterLabel>TELEFONO</StyledFooterLabel>
            <StyledFooterInput placeholder="Ingresa telefono aqui..."></StyledFooterInput>
          </StyledFooterInfo>
          <StyledButton>ENVIAR</StyledButton>
        </StyledFooterForm>
      </StyledFooterPart>
    </StyledFooterSection>
  );
}

export default Footer;

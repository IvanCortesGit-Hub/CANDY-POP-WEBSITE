import styled from "styled-components";

const StyledFAQSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 5rem 0;
  gap: 2rem;

  @media (max-width: 900px) {
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 3rem auto;
  }
`;

const StyledFAQTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

const StyledFAQuestions = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-content: center;
  gap: 2rem;
  width: 40%;
  color: black;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const StyledFAQText = styled.h1`
  text-align: center;
`;

const StyledFAQAnswers = styled.details`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  border-bottom: 2px solid black;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

const StyledFAQSummary = styled.summary`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  font-weight: bold;
  width: 100%;
  font-size: 1.2rem;

  &::after {
    content: "<";
    font-size: 2rem;
    color: #df55e1ff;
    transition: transform 0.3s ease;
    margin-left: 0.5rem;
    line-height: 1;
    transform: rotate(0deg);
  }

  ${StyledFAQAnswers}[open] &::after {
    transform: rotate(-90deg);
  }
`;

const StyledFAQResponse = styled.p`
  font-size: 1rem;
`;

function FAQSection() {
  return (
    <StyledFAQSection>
      <StyledFAQTitle>
        <StyledFAQText>PREGUNTAS FRECUENTES</StyledFAQText>
      </StyledFAQTitle>
      <StyledFAQuestions>
        <StyledFAQAnswers>
          <StyledFAQSummary>
            ¿Es posible personalizar cajas de dulces para eventos o regalos?
          </StyledFAQSummary>
          <StyledFAQResponse>
            ¡Claro que sí! Acércate a nuestra tienda física y las hacemos a tu
            gusto.
          </StyledFAQResponse>
        </StyledFAQAnswers>
        <StyledFAQAnswers>
          <StyledFAQSummary>
            ¿Todos los dulces mexicanos que manejan son picantes?
          </StyledFAQSummary>
          <StyledFAQResponse>
            No. Manejamos una amplia variedad de dulces con sabores propios de
            México que no incluyen picante.
          </StyledFAQResponse>
        </StyledFAQAnswers>
        <StyledFAQAnswers>
          <StyledFAQSummary>
            ¿Traen las ediciones limitadas de las chocolatinas Jumbo?
          </StyledFAQSummary>
          <StyledFAQResponse>
            ¡Claro que sí! Estamos encantados de ayudarte con tu pedido.
          </StyledFAQResponse>
        </StyledFAQAnswers>
        <StyledFAQAnswers>
          <StyledFAQSummary>¿Hacen envíos a nivel nacional?</StyledFAQSummary>
          <StyledFAQResponse>
            Aún no, pero estamos trabajando para ofrecer ese servicio muy
            pronto.
          </StyledFAQResponse>
        </StyledFAQAnswers>
        <StyledFAQAnswers>
          <StyledFAQSummary>
            ¿Tienen promociones, descuentos o un programa de lealtad para
            clientes frecuentes?
          </StyledFAQSummary>
          <StyledFAQResponse>
            Por supuesto. Puedes contactarnos a través de nuestras redes
            sociales o utilizando nuestro formulario de contacto.
          </StyledFAQResponse>
        </StyledFAQAnswers>
      </StyledFAQuestions>
    </StyledFAQSection>
  );
}

export default FAQSection;

import styled from "styled-components";

const StyledFAQSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 5rem 0;
  gap: 2rem;
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
`;

const StyledFAQText = styled.h1`
  color: #3d3d3d;
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
  color: #3d3d3d;
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
          <StyledFAQSummary>Hacen envios</StyledFAQSummary>
          <StyledFAQResponse>Aun no, pero si muy pronto</StyledFAQResponse>
        </StyledFAQAnswers>
        <StyledFAQAnswers>
          <StyledFAQSummary>
            Todos los dulces mexicanos son picantes?
          </StyledFAQSummary>
          <StyledFAQResponse>
            No, hay bastantes que son de sabores propios de Mexico
          </StyledFAQResponse>
        </StyledFAQAnswers>
        <StyledFAQAnswers>
          <StyledFAQSummary>
            Traen las ediciones limitadas de chocolatinas Jumbo?
          </StyledFAQSummary>
          <StyledFAQResponse>Claro que si!!</StyledFAQResponse>
        </StyledFAQAnswers>
        <StyledFAQAnswers>
          <StyledFAQSummary>Hacen envios</StyledFAQSummary>
          <StyledFAQResponse>Aun no, pero si muy pronto</StyledFAQResponse>
        </StyledFAQAnswers>
        <StyledFAQAnswers>
          <StyledFAQSummary>Hacen envios</StyledFAQSummary>
          <StyledFAQResponse>Aun no, pero si muy pronto</StyledFAQResponse>
        </StyledFAQAnswers>
      </StyledFAQuestions>
    </StyledFAQSection>
  );
}

export default FAQSection;

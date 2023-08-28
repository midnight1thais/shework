import React, { useState } from "react";
import { ContainerCards, ContainerCarousel, DotContainer, Dot, ActiveDot } from "./style";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

function ExperienceCarousel() {
  const divs = [
    { experience:'Consegui um emprego muito bom depois que me inscrevi no SheWork. Indico para que outras mulheres se encontrem no Mercado de Trabalho!'},
    { experience:'Usar o SheWork foi incrível para encontrar oportunidades profissionais relevantes e conectar com mulheres inspiradoras!'},
    { experience:'O SheWork simplificou minha busca por trabalho flexível, proporcionando networking valioso em um ambiente inclusivo.'},
    // Add more items as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCenterDotActive, setCenterDotActive] = useState(true);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setCenterDotActive(false);
  };

  const handleCardChange = () => {
    setCenterDotActive(true);
  };


  return (
    <ContainerCarousel>
      <ContainerCards>
        {[currentIndex].map((cardIndex) => (
          <ExperienceCard
            key={cardIndex}
            experience={divs[cardIndex].experience}
            isVisible={true}
          />
        ))}
      </ContainerCards>
      <DotContainer>
        <Dot onClick={() => { handleDotClick(currentIndex - 1 >= 0 ? currentIndex - 1 : divs.length - 1); handleCardChange(); }} />
        <ActiveDot isActive={isCenterDotActive} onClick={() => handleCardChange()} />
        <Dot onClick={() => { handleDotClick((currentIndex + 1) % divs.length); handleCardChange(); }} />
      </DotContainer>
    </ContainerCarousel>
  );
}

export default ExperienceCarousel

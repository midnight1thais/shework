import React, { useState } from "react";
import CarouselCard from "../CompanyCard/CompanyCard";
import Logo from "../../assets/LogoCompany.png";
import { ContainerCards, ContainerCarousel, DotContainer, Dot, ActiveDot } from "./style";

function CompanyCarousel() {
  const divs = [
    { company: "numero 1", text: "Nome empresa 1" },
    { company: "numero 2", text: "Nome empresa 2" },
    { company: "numero 3", text: "Nome empresa 3" },
    { company: "numero 4", text: "Nome empresa 4" },
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
        {[currentIndex, (currentIndex + 1) % divs.length].map((cardIndex) => (
          <CarouselCard
            key={cardIndex}
            company={divs[cardIndex].company}
            iconSrc={Logo}
            text={divs[cardIndex].text}
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

export default CompanyCarousel;

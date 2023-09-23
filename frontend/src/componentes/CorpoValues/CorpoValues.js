import React, { useState } from "react";
import IconValues from "../../assets/CorpoValuesIcon.svg";
import { ArrowBack, ArrowNext, ButtonBack, ButtonNext, ContainerCards, ContainerCarousel, ContainerTitle } from "./style";
import seta from '../../assets/SetaValues.svg'
import CorpoValuesCard from "../CorpoValuesCard/CorpoValuesCard";

function CorpoValues() {
  const divs = [
    { altDes: "numero 1", text: "Sustentabilidade 1" },
    { altDes: "numero 2", text: "Sustentabilidade 2" },
    { altDes: "numero 3", text: "Sustentabilidade 3" },
    { altDes: "numero 4", text: "Sustentabilidade 4" },
    // Add more items as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === divs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? divs.length - 1 : prevIndex - 1
    );
  };

  return ( 
    <>
    <ContainerTitle>
      Nossos Valores
    </ContainerTitle>
    <ContainerCarousel>
      <ButtonBack onClick={handleClickPrev}>
        <ArrowBack src={seta} alt=''/>
      </ButtonBack>
      <ContainerCards>
        {[currentIndex, (currentIndex + 1) % divs.length, (currentIndex + 2) % divs.length].map((cardIndex) => (
          <CorpoValuesCard
            key={cardIndex}
            altDes={divs[cardIndex].altDes}
            iconSrc={IconValues}
            text={divs[cardIndex].text}
            isVisible={true}
          />
        ))}
      </ContainerCards>
      <ButtonNext onClick={handleClickNext}>
        <ArrowNext src={seta} alt=''/>
      </ButtonNext>
    </ContainerCarousel>
    </>
  );
}

export default CorpoValues;
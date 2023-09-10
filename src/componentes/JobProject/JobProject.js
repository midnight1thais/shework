import React, { useState } from "react";
import JobProjectCard from "../JobProjectCard/JobProjectCard";
import IconProject from "../../assets/JobProjectIcon.svg";
import { ArrowBack, ArrowNext, ButtonBack, ButtonNext, ContainerCards, ContainerCarousel } from "./style";
import seta from '../../assets/seta.svg'

function JobProject() {
  const divs = [
    { altDes: "numero 1", text: "Breve Descrição 1" },
    { altDes: "numero 2", text: "Breve Descrição 2" },
    { altDes: "numero 3", text: "Breve Descrição 3" },
    { altDes: "numero 4", text: "Breve Descrição 4" },
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
    <ContainerCarousel>
      <ButtonBack onClick={handleClickPrev}>
        <ArrowBack src={seta} alt=''/>
      </ButtonBack>
      <ContainerCards>
        {[currentIndex, (currentIndex + 1) % divs.length, (currentIndex + 2) % divs.length].map((cardIndex) => (
          <JobProjectCard
            key={cardIndex}
            altDes={divs[cardIndex].altDes}
            iconSrc={IconProject}
            text={divs[cardIndex].text}
            isVisible={true}
          />
        ))}
      </ContainerCards>
      <ButtonNext onClick={handleClickNext}>
        <ArrowNext src={seta} alt=''/>
      </ButtonNext>
    </ContainerCarousel>
  );
}

export default JobProject;
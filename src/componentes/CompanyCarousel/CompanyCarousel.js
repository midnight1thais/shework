import React, { useState } from "react";
import CarouselCard from "../CompanyCard/CompanyCard"
import Logo from "../../assets/LogoCompany.png";
import { ArrowBack, ArrowNext, ButtonBack, ButtonNext, ContainerCards, ContainerCarousel } from "./style";
import seta from '../../assets/seta.svg'

function CompanyCarousel() {
  const divs = [
    { company: "numero 1", text: "Nome empresa 1" },
    { company: "numero 2", text: "Nome empresa 2" },
    { company: "numero 3", text: "Nome empresa 3" },
    { company: "numero 4", text: "Nome empresa 4" },
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
          <CarouselCard
            key={cardIndex}
            company={divs[cardIndex].company}
            iconSrc={Logo}
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

export default CompanyCarousel;
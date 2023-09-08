import React, { useState } from "react";
import ImgWoman from '../../assets/ImgProfileWoman.jpg'
import PersonCard from "../PersonCard/PersonCard";
import { ContainerCards, ContainerCarousel, DotContainer, Dot, ActiveDot } from "./style";

function CompanyCarousel() {
  const divs = [
    { date: "6 Novembro 2022", 
    service: "Serviços Gerais", 
    title:"Maria da Silva", 
    descricao: "Tenho 21 anos e estou procurando vaga para serviços" 
    },
    { date: "3 Dezembro 2022", 
    service: "Técnico em TI", 
    title:"Juliana de Mello", 
    descricao: "Tenho 21 anos e estou procurando vaga para técnico" 
    },
    { date: "17 Agosto 2023", 
    service: "Técnico em TI", 
    title:"Andressa de Carvalho", 
    descricao: "Tenho 21 anos e estou procurando vaga para serviços" 
    },
    { date: "21 Julho 2023", 
    service: "Serviços Gerais", 
    title:"Andressa de Lima", 
    descricao: "Tenho 21 anos e estou procurando vaga para técnico"
    },
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
          <PersonCard
            key={cardIndex}
            date={divs[cardIndex].date}
            service={divs[cardIndex].service}
            iconSrc={ImgWoman}
            title={divs[cardIndex].title}
            descricao={divs[cardIndex].descricao}
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

import React, { useState } from "react";
import Logo from "../../assets/LogoCompany.png";
import PersonCard from "../PersonCard/PersonCard";
import { ContainerCards, ContainerCarousel, DotContainer, Dot, ActiveDot } from "./style";

function CompanyCarousel() {
  const divs = [
    { data: "6 Novembro 2022", 
    serviço: "outros", 
    titulo:"Maria da Silva", 
    descricao: "Tenho 21 anos e estou procurando vaga para tercerizados , faço limpeza e..." 
    },
    { data: "3 Dezembro 2022", 
    serviço: "Técnico em TI", 
    titulo:"Juliana de Mello", 
    descricao: "Tenho 21 anos e estou procurando vaga para tercerizados , faço limpeza e..." 
    },
    { data: "17 Agosto 2023", 
    serviço: "Técnico em TI", 
    titulo:"Andressa de Carvalho", 
    descricao: "Tenho 21 anos e estou procurando vaga para tercerizados , faço limpeza e..." 
    },
    { data: "21 Julho 2023", 
    serviço: "Técnico em TI", 
    titulo:"Andressa de Carvalho", 
    descricao: "Tenho 21 anos e estou procurando vaga para tercerizados , faço limpeza e..." 
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
            data={divs[cardIndex].data}
            serviço={divs[cardIndex].serviço}
            iconSrc={Logo}
            titulo={divs[cardIndex].titulo}
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

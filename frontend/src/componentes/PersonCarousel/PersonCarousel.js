import React, { useEffect, useState } from "react";
import ImgWoman from '../../assets/ImgProfileWoman.jpg'
import PersonCard from "../PersonCard/PersonCard";
import { ContainerCards, ContainerCarousel, DotContainer, Dot, ActiveDot } from "./style";
import ExplorePersonCard from "../ExplorePersonCard/ExplorePersonCard";
import { api } from "../../services/api";

function CompanyCarousel() {

      // useState para publicacoes 
      const [infosPubliPerson, setInfosPubliPerson] = useState([]);

      //get das pessoas
  
      useEffect(() => {
          async function fetchPublis() {
              try {
                  const response = await api.get(`/publiperson/list`); 
                  setInfosPubliPerson(response.data.data);
                  console.log("resposta do response.data :", response.data.data.id_publicacao_pessoa)
                  
              } catch (error) {
                  console.error('Erro ao recuperar as informações da publi:', error);
              }
          }
    
          fetchPublis();
      }, []);

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
      {[currentIndex, (currentIndex + 1) % infosPubliPerson.length].map((cardIndex) => (
        infosPubliPerson[cardIndex] && (
          <PersonCard
            key={infosPubliPerson[cardIndex].id_publicacao_pessoa}
            id_publicacao_pessoa={infosPubliPerson[cardIndex].id_publicacao_pessoa}
            publiNome={infosPubliPerson[cardIndex].nome}
            publiArea={infosPubliPerson[cardIndex].area_interesse}
            publiDescricao={infosPubliPerson[cardIndex].descricao}
            isVisible={true}
          />
        )
      ))}

        {/* {[currentIndex, (currentIndex + 1) % infosPubliPerson.length].map((cardIndex) => (
        {infosPubliPerson.map((infos) => {  
          console.log('Infos Object:', infos); 
              return(
            <ExplorePersonCard
            key={cardIndex}
            id_publicacao_pessoa={infos.id_publicacao_pessoa}
            isVisible={true}
            />
          // <PersonCard
          //   
          //   date={divs[cardIndex].date}
          //   service={divs[cardIndex].service}
          //   iconSrc={ImgWoman}
          //   title={divs[cardIndex].title}
          //   descricao={divs[cardIndex].descricao}
          //   isVisible={true}
          // />
          )
        })}
        ))} */}
      </ContainerCards>
      <DotContainer>
        <Dot onClick={() => { handleDotClick(currentIndex - 1 >= 0 ? currentIndex - 1 : infosPubliPerson.length - 1); handleCardChange(); }} />
        <ActiveDot isActiveDot={isCenterDotActive} onClick={() => handleCardChange()} />
        <Dot onClick={() => { handleDotClick((currentIndex + 1) % infosPubliPerson.length); handleCardChange(); }} />
      </DotContainer>
    </ContainerCarousel>
  );
}

export default CompanyCarousel;

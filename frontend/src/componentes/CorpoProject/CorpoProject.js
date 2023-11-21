import React, { useEffect, useState } from "react";
import { ArrowBack, ArrowNext, ButtonBack, ButtonNext, ContainerCards, ContainerCarousel, ContainerText, TextRight } from "./style";
import seta from '../../assets/seta.svg'
import CorpoProjectCard from "../CorpoProjectCard/CorpoProjectCard";
import { api } from "../../services/api";

function CorpoProject({idCorporation}) {

  const [project, setProject] = useState([]);
    
    
  useEffect(() => {
      async function fetchPublis() {
          try {
              const response = await api.get(`/company/informations/` + idCorporation); 
              setProject(response.data);
              
          } catch (error) {
              console.error('Erro ao recuperar as informações da publi:', error);
          }
      }

      fetchPublis();
  }, [idCorporation]);
    // const divs = [
    //     { altDes: "numero 1", text: "TITULO DO PROJETO 1", subtext: 'Somos uma empresa bla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blaSomos uma empresa bla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla ' },
    //     { altDes: "numero 2", text: "TITULO DO PROJETO 2", subtext: 'Somos uma empresa bla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blaSomos uma empresa bla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla '},
    //     { altDes: "numero 3", text: "TITULO DO PROJETO 3", subtext: 'Somos uma empresa bla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blaSomos uma empresa bla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla '},
    //     { altDes: "numero 4", text: "TITULO DO PROJETO 4", subtext: 'Somos uma empresa bla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blaSomos uma empresa bla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla bla bla bla bla bla bla blabla ' },
    //     // Add more items as needed
    //   ];
    
      // const [currentIndex, setCurrentIndex] = useState(0);
    
      // const handleClickNext = () => {
      //   setCurrentIndex((prevIndex) =>
      //     prevIndex === divs.length - 1 ? 0 : prevIndex + 1
      //   );
      // };
    
      // const handleClickPrev = () => {
      //   setCurrentIndex((prevIndex) =>
      //     prevIndex === 0 ? divs.length - 1 : prevIndex - 1
      //   );
      // };

  return (
    <>
   <ContainerText>
        <TextRight> Nosso Projeto </TextRight>
    </ContainerText>
    <ContainerCarousel>
      {/* <ButtonBack onClick={handleClickPrev}>
        <ArrowBack src={seta} alt=''/>
      </ButtonBack> */}
      <ContainerCards>
      {project.map((item) => {
                return (
          <CorpoProjectCard
            key={item}
            text={item.projeto_titulo}
            subtext={item.projeto_descricao}
            isVisible={true}
          />)
            
        })}
      </ContainerCards>
      {/* <ButtonNext onClick={handleClickNext}>
        <ArrowNext src={seta} alt=''/>
      </ButtonNext> */}
    </ContainerCarousel>
    </>
  );
};

export default CorpoProject;

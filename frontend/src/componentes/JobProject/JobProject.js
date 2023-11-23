import React, { useEffect, useState } from "react";
import JobProjectCard from "../JobProjectCard/JobProjectCard";
import IconProject from "../../assets/JobProjectIcon.svg";
import { ArrowBack, ArrowNext, ButtonBack, ButtonNext, ContainerCards, ContainerCarousel } from "./style";
import seta from '../../assets/seta.svg'
import { api } from "../../services/api";

function JobProject({idJobCompany}) {

  const [projects, setProject] = useState([]);
    
  useEffect(() => {
      async function fetchPublis() {
          try {
              const response = await api.get(`/publivaga/listProjetos/` + idJobCompany); 
              setProject(response.data.data);
              console.log("resposta do projetos:", response.data.data)
              
          } catch (error) {
              console.error('Erro ao recuperar as informações da publi:', error);
          }
      }

      fetchPublis();
  }, [idJobCompany]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    {projects.length > 0 && (
    <ContainerCarousel>
      <ButtonBack onClick={handleClickPrev}>
        <ArrowBack src={seta} alt=''/>
      </ButtonBack>
      <ContainerCards>
        {[currentIndex, (currentIndex + 1) % projects.length, (currentIndex + 2) % projects.length].map((cardIndex) => (
          <JobProjectCard
            key={cardIndex}
            altDes={projects[cardIndex].projeto_link}
            iconSrc={IconProject}
            text={projects[cardIndex].descricao}
            isVisible={true}
          />
        ))}
      </ContainerCards>
      <ButtonNext onClick={handleClickNext}>
        <ArrowNext src={seta} alt=''/>
      </ButtonNext>
    </ContainerCarousel>
    )}
    </>
  );
}

export default JobProject;
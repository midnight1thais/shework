import React, { useEffect, useState } from "react";
import JobRespoIcon from '../../assets/JobCourseIcon.png'
import JobProjectCard from "../JobProjectCard/JobProjectCard";
import IconProject from "../../assets/JobProjectIcon.svg";
import { ArrowBack, ArrowNext, ButtonBack, ButtonNext, ContainerCards, ContainerCarousel } from "./style";
import seta from '../../assets/seta.svg'
import { api } from "../../services/api";
import { DivIcon, HeaderInfo, IconProfile, TextInfo } from "../JobProgression/style";

function JobProject({idJobCompany}) {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await api.get(`/publivaga/listProjetos/` + idJobCompany);
        setProjects(response.data.data);
        console.log("resposta do projetos:", response.data.data);
      } catch (error) {
        console.error('Erro ao recuperar as informações dos projetos:', error);
      }
    }

    fetchProjects();
  }, [idJobCompany]);

  const showNavigationButtons = projects.length > 3; // Se houver mais de 3 projetos, mostra os botões.

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  return (
    <>
      <HeaderInfo>
          <DivIcon>
              <IconProfile src={JobRespoIcon} alt=""/>
          </DivIcon>
          <TextInfo>Projetos Relacionados</TextInfo>
      </HeaderInfo>
      {projects.length > 0 && (
        <ContainerCarousel>
          {showNavigationButtons && (
            <ButtonBack onClick={handleClickPrev}>
              <ArrowBack src={seta} alt='' />
            </ButtonBack>
          )}
          <ContainerCards>
            {projects.map((project, index) => (
              <JobProjectCard
                key={index}
                altDes={project.projeto_link}
                iconSrc={IconProject}
                text={project.descricao}
                isVisible={index === currentIndex}
              />
            ))}
          </ContainerCards>
          {showNavigationButtons && (
            <ButtonNext onClick={handleClickNext}>
              <ArrowNext src={seta} alt='' />
            </ButtonNext>
          )}
        </ContainerCarousel>
      )}
    </>
  );
}


export default JobProject;
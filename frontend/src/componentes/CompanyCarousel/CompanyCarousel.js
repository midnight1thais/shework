import React, { useEffect, useState } from "react";
import CarouselCard from "../CompanyCard/CompanyCard"
import Logo from "../../assets/LogoCompany.png";
import { ArrowBack, ArrowNext, ButtonBack, ButtonNext, ContainerCards, ContainerCarousel } from "./style";
import seta from '../../assets/seta.svg'
import { api } from "../../services/api";

function CompanyCarousel() {

    // useState para publicacoes 
    const [infosPubliCompany, setInfosPubliCompany] = useState([]);

    //get das pessoas

    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/company/listAll`); 
                setInfosPubliCompany(response.data.data);
                console.log("resposta do response.data da empresa :", response.data.data)
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da publi:', error);
            }
        }
    
        fetchPublis();
    }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === infosPubliCompany.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? infosPubliCompany.length - 1 : prevIndex - 1
    );
  };

  return (
    <ContainerCarousel>
        {infosPubliCompany.length > 1 && (
      <ButtonBack onClick={handleClickPrev}>
        <ArrowBack src={seta} alt=''/>
      </ButtonBack>
      )}
      <ContainerCards>
      {infosPubliCompany && infosPubliCompany.length > 0 &&
        [currentIndex, (currentIndex + 1) % infosPubliCompany.length, (currentIndex + 2) % infosPubliCompany.length].map((cardIndex) => (
          infosPubliCompany[cardIndex] && (
          <CarouselCard
            key={infosPubliCompany[cardIndex].id_publiEmpresa}
            id={infosPubliCompany[cardIndex].id_publiEmpresa}
            iconSrc={Logo}
            isvisiblecard={true}
          />
          )
        ))}
      </ContainerCards>
      {infosPubliCompany.length > 1 && (
      <ButtonNext onClick={handleClickNext}>
        <ArrowNext src={seta} alt=''/>
      </ButtonNext>
        )}
    </ContainerCarousel>
  );
}

export default CompanyCarousel;
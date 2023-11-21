import React, { useEffect, useState } from "react";
import IconValues from "../../assets/CorpoValuesIcon.svg";
import { ArrowBack, ArrowNext, ButtonBack, ButtonNext, ContainerCards, ContainerCarousel, ContainerTitle } from "./style";
import seta from '../../assets/SetaValues.svg'
import CorpoValuesCard from "../CorpoValuesCard/CorpoValuesCard";
import { api } from "../../services/api";

function CorpoValues({idCorporation}) {


  const [valoresAll, setValores] = useState([]);
    
  useEffect(() => {
      async function fetchPublis() {
          try {
              const response = await api.get(`/company/informations/` + idCorporation); 
              const valoresSeparados = response.data[0].valores.split(',');
              console.log('valores separados -------', valoresSeparados);
              setValores(valoresSeparados);
              
          } catch (error) {
              console.error('Erro ao recuperar as informações da publi:', error);
          }
      }

      fetchPublis();
  }, [idCorporation]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === valoresAll.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? valoresAll.length - 1 : prevIndex - 1
    );
  };

  return ( 
    <>
    <ContainerTitle>
      Nossos Valores
    </ContainerTitle>
    {valoresAll.length > 0 && (
      <ContainerCarousel>
        <ButtonBack onClick={handleClickPrev}>
          <ArrowBack src={seta} alt=''/>
        </ButtonBack>
        <ContainerCards>
          {[currentIndex, (currentIndex + 1) % valoresAll.length, (currentIndex + 2) % valoresAll.length].map((cardIndex) => (
            <CorpoValuesCard
              key={cardIndex}
              iconSrc={IconValues}
              text={valoresAll[cardIndex]}
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

export default CorpoValues;
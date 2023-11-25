import React, { useEffect, useState } from "react";
import ImgShare from '../../assets/compartilhar.svg'
import ImgContract from '../../assets/contratar.svg'
import { ButtonRight, ContainerAll, ContainerCard, ContainerImg, ContainerTop, Date, Description, IconRight, Service, Title } from "./style";
import { api } from "../../services/api";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

function CorpoOpportunitesCard({nomeVaga, tipoVaga, areaVaga, dataVaga}) {
    
    const isVagaVisible = true;

  
    return (
    <>
    <div>
    <ContainerCard isVisible={isVagaVisible}>
        <ContainerAll>
            <ContainerTop>
            <Date>{dataVaga}</Date>
            <Service>{tipoVaga}</Service>
            </ContainerTop>
            <Title>{nomeVaga}</Title>
            <Description>{areaVaga}</Description>
        </ContainerAll>
        <ContainerImg>
            <ButtonRight><IconRight src={ImgContract} alt=''/></ButtonRight>
        </ContainerImg>
    </ContainerCard>
    </div>
    </>
  );
}

export default CorpoOpportunitesCard;

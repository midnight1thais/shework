import React, { useEffect, useState } from "react";
import ImgShare from '../../assets/compartilhar.svg'
import ImgContract from '../../assets/contratar.svg'
import { ButtonRight, ContainerAll, ContainerCard, ContainerImg, ContainerTop, Date, Description, IconRight, Service, Title } from "./style";
import { api } from "../../services/api";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useNavigate } from "react-router-dom";

function CorpoOpportunitesCard({idVaga, nomeVaga, tipoVaga, areaVaga, dataVaga}) {
    
    const isVagaVisible = true;

    const navigate = useNavigate();

    const categoria = localStorage.getItem('@Auth:user_categoria')
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
          try {
            if (categoria === 'Técnico em TI' || categoria === 'Trabalhos Diversos' || categoria === 'Empresa'){
              const currentPath = window.location.pathname; // Pega o caminho atual
        
              // Método replace (função do JavaScript) para remover tanto /homeRegister quanto /homeRegisterCompany
              
              const newPath = `/jobCompany/${idVaga}`;
              
              // substituir a entrada do histórico em vez de adicionar uma nova entrada
              navigate(newPath, { replace: true });
            
            } else{
              console.log('ele não esta cadastrado')
              const newPath = `/jobCompany/${idVaga}`;
              // substituir a entrada do histórico em vez de adicionar uma nova entrada
              navigate(newPath, { replace: true });
            }
        
        } catch (error) {
            console.error('Erro ao tentar acessar publicacao', error);
        }
  
    };
  
    return (
    <>
    <div>
    <ContainerCard onClick={handleSubmit} isVisible={isVagaVisible}>
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

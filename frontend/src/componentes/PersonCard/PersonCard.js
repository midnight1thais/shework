import React, { useEffect } from "react";
import ImgPersonCard from '../../assets/ImgPersonCard.png'
import { ContainerAll, ContainerCard, ContainerTop, Date, Description, Icon, Service, Title } from "./style";
import { useNavigate } from "react-router-dom";

function PersonCard({id_publicacao_pessoa, publiArea, publiNome, publiDescricao, iconSrc, isVisible }) {

  const navigate = useNavigate();

  const categoria = localStorage.getItem('@Auth:user_categoria')

  const handleSubmit = async (e) => {
    e.preventDefault();
    
        try {
          if (categoria === 'Técnico em TI' || categoria === 'Trabalhos Diversos' || categoria === 'Empresa' ){
            const currentPath = window.location.pathname; // Pega o caminho atual
      
            // Método replace (função do JavaScript) para remover tanto /homeRegister quanto /homeRegisterCompany
            const newPath = currentPath.replace(/\/?(homeRegister(Company)?|explorePerson)/, '');
    
            // Adiciona a nova parte ao caminho
            navigate(`${newPath}/publiPerson/${id_publicacao_pessoa}`);
          
          } else{
            console.log('ele não esta cadastrado')
            navigate(`/publiPerson/${id_publicacao_pessoa}`);
          }
      
      } catch (error) {
          console.error('Erro ao tentar acessar publicacao', error);
      }

  };
  
  // useEffect(() => {
  //     async function fetchPublis() {
  //         try {
  //             if (categoria === 'Técnico em TI' || categoria === 'Trabalhos Diversos' || !categoria){
  //                 const currentPath = window.location.pathname; // Pega o caminho atual
              
  //                 // Método replace (função do JavaScript) para remover tanto /homeRegister quanto /homeRegisterCompany
  //                 const newPath = currentPath.replace(/\/?(homeRegister(Company)?|explorePerson)/, '');
              
  //                 // Adiciona a nova parte ao caminho
  //                 navigate(`${newPath}/publiPerson/${id_publicacao_pessoa}`);
  
                  
  //             } else{
  //               console.log('ele é uma empresa')
  //             }
              
  //         } catch (error) {
  //             console.error('Erro ao recuperar as informações da publi:', error);
  //         }
  //     }

  //     fetchPublis();
  // }, [categoria]);



  return (
    <ContainerCard onClick={handleSubmit} isVisible={isVisible}>
      <Icon src={ImgPersonCard} alt=''/>
      <ContainerAll>
        <ContainerTop>
          <Date>2023</Date>
          <Service>{publiArea}</Service>
        </ContainerTop>
        <Title>{publiNome}</Title>
        <Description>{publiDescricao}</Description>
      </ContainerAll>
    </ContainerCard>
  );
}

export default PersonCard;

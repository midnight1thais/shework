import React, { useEffect, useState } from "react";
import { ContainerCard, Icon, Text } from "./style";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

function CarouselCard({ id, iconSrc, isvisiblecard }) {

  const navigate = useNavigate();

  const categoria = localStorage.getItem('@Auth:user_categoria')

  const handleSubmit = async (e) => {
    e.preventDefault();
    
        try {
          if (categoria === 'Técnico em TI' || categoria === 'Trabalhos Diversos' || categoria === 'Empresa'){
            const currentPath = window.location.pathname; // Pega o caminho atual
      
            // Método replace (função do JavaScript) para remover tanto /homeRegister quanto /homeRegisterCompany
            const newPath = currentPath.replace(/\/?(homeRegister(Company)?|explorePerson)/, '');
    
            // Adiciona a nova parte ao caminho
            navigate(`${newPath}/corporation/${id}`);
          
          } else{
            console.log('ele não esta cadastrado')
            navigate(`/corporation/${id}`);
          }
      
      } catch (error) {
          console.error('Erro ao tentar acessar publicacao', error);
      }

  };

    // useState para pegar as informações sobre a empresa
    const [infos, setInfos] = useState([]);

    //get das pessoas

    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/company/list/${id}`); 
                setInfos(response.data.data);
                console.log("resposta do response.data DO CARD :", response.data.data)
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da publi:', error);
            }
        }
    
        fetchPublis();
    }, []);
  
  return (
    <ContainerCard onClick={handleSubmit} isvisiblecard={isvisiblecard}>
      {infos.map((item) => {  
        return(
          <>
      <Icon src={iconSrc} alt={` logo`} />
      <Text>{item.nome}</Text>
        </>
      )})}
    </ContainerCard>
  );
}

export default CarouselCard;

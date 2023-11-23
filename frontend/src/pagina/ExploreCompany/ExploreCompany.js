import React, {useEffect, useState} from "react";
import { BigTitle, ComboBox, ComboBoxContainer, ContainerCarousel, ContainerHeader, ContainerInput, ContainerSearch, IconSearch, InputSearch, LittleTitle, OptionSelected } from "./style"

import IconBack from '../../assets/JobButtonBack.svg'
import iconsearch from '../../assets/IconSearch.svg'
import ExploreCompanyCard from "../../componentes/ExploreCompanyCard/ExploreCompanyCard";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

function ExploreCompany(){

    // useState para publicacoes 
    const [infosPubliCompany, setInfosPubliCompany] = useState([]);

    //get das pessoas

    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/company/listAll`); 
                setInfosPubliCompany(response.data.data);
                console.log("resposta do response.data :", response.data.data)
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da publi:', error);
            }
        }
    
        fetchPublis();
    }, []);

    console.log("informações setadas empresa :", infosPubliCompany);

    const [selectedOption, setSelectedOption] = useState('');

    const options1 = [
      'Serviços de limpeza',
      'Cozinheira',
      'Mecânica',
      'Costura',
      'Todos',
    ];

    const options2 = [
        'Analista de sistemas de automação',
        'Desenhista de páginas da internet',
        'Programador de multimídia',
        'Monitorador de sistemas',
        'Todos',
      ];
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

    return(
        <>
        <ContainerHeader>
            <BigTitle>EXPLORE AS PUBLICAÇÕES</BigTitle>
            <LittleTitle>Explore uma vaga para uma possível contratação</LittleTitle>
        </ContainerHeader>

        <Link to='/homeRegister'><img src={IconBack} alt=""/></Link>

        <ContainerSearch>
            <ContainerInput>
                <IconSearch src={iconsearch} alt=""/>
                <InputSearch placeholder="Search"/>
            </ContainerInput>
            <ComboBoxContainer>
            <ComboBox value={selectedOption} onChange={handleOptionChange}>
            <OptionSelected value="">Outros Serviços</OptionSelected>
            {options1.map((option, index) => (
                <OptionSelected key={index} value={option}>
                {option}
                </OptionSelected>
            ))}
            </ComboBox>
        </ComboBoxContainer>
        <ComboBoxContainer>
            <ComboBox value={selectedOption} onChange={handleOptionChange}>
            <OptionSelected value="">Técnico em TI</OptionSelected>
            {options2.map((option, index) => (
                <OptionSelected key={index} value={option}>
                {option}
                </OptionSelected>
            ))}
            </ComboBox>
        </ComboBoxContainer>
        </ContainerSearch>
        <ContainerCarousel>
        {infosPubliCompany.map((infos) => {  
                return(
            <ExploreCompanyCard
            id_publiEmpresa={infos.id_publiEmpresa}
            isVisible={true}
            />
                    )
                })}
        </ContainerCarousel>
        
        

        </>
    )
}

export default ExploreCompany
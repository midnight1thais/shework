import React, {useEffect, useState} from "react";
import { BigTitle, ComboBox, ComboBoxContainer, ContainerCarousel, ContainerHeader, ContainerInput, ContainerSearch, IconSearch, InputSearch, LittleTitle, OptionSelected } from "./style"

import IconBack from '../../assets/JobButtonBack.svg'
import iconsearch from '../../assets/IconSearch.svg'
import ExplorePersonCard from "../../componentes/ExplorePersonCard/ExplorePersonCard";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

function ExplorePerson(){

    // para a pesquisa
    const [searched, setSearched] = useState([]);

    const handleSearchChange = (value) =>{
        setSearched(value);
    }

    // useState para publicacoes 
    const [infosPubliPerson, setInfosPubliPerson] = useState([]);

    //get das pessoas

    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/publiperson/list`); 
                setInfosPubliPerson(response.data.data);
                console.log("resposta do response.data :", response.data.data.id_publicacao_pessoa)
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da publi:', error);
            }
        }
  
        fetchPublis();
    }, []);

    console.log("informações setadas:", infosPubliPerson);

    // para os filtros
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
            <LittleTitle>Compartilhe sua vaga para uma possível contratação</LittleTitle>
        </ContainerHeader>

        <Link to='/homeRegister'><img src={IconBack} alt=""/></Link>

        <ContainerSearch>
            <ContainerInput>
                <IconSearch src={iconsearch} alt=""/>
                <InputSearch placeholder="Search"
                value={searched}
                onChange={(e) => handleSearchChange(e.target.value)}
                />
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
            {infosPubliPerson.filter((infos) => 
            infos.nome.includes(searched))
            .map((infos, index) => (
                <ExplorePersonCard
                key={index}
                id_publicacao_pessoa={infos.id_publicacao_pessoa}
                isVisible={true}
                />
            ))
            }
        {/* {infosPubliPerson.map((infos) => {  
            console.log('Infos Object:', infos); 
                return(
            <ExplorePersonCard
            id_publicacao_pessoa={infos.id_publicacao_pessoa}
            isVisible={true}
            />
                    )
            })} */}
        </ContainerCarousel>
        
        

        </>
    )
}

export default ExplorePerson
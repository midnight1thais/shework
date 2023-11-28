import React, {useEffect, useState} from "react";
import { BigTitle, ComboBox, ComboBoxContainer, ContainerCarousel, ContainerHeader, ContainerInput, ContainerSearch, IconSearch, InputSearch, LittleTitle, OptionSelected } from "./style"

import IconBack from '../../assets/JobButtonBack.svg'
import iconsearch from '../../assets/IconSearch.svg'
import ExplorePersonCard from "../../componentes/ExplorePersonCard/ExplorePersonCard";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

function ExplorePerson(){

    // para a pesquisa
    const [searched, setSearched] = useState([]);
    

    const handleSearchChange = (value) =>{
        setSearched(value);
    }

    //para voltar

    const navigate = useNavigate();

    const goBack = () =>{
      navigate(-1)
    }
  

    // useState para publicacoes 
    const [infosPubliPerson, setInfosPubliPerson] = useState([]);

    //get das pessoas

    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/publiperson/list`); 
                setInfosPubliPerson(response.data.data);
                console.log("resposta do response categoria:", response.data.data)
                
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

        <button onClick={goBack}><img src={IconBack} alt=""/></button>

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
            <OptionSelected value="">Tecnologia</OptionSelected>
                <OptionSelected value="Técnico em TI">Técnico em TI</OptionSelected>
                <OptionSelected value="Analista de sistemas de automação">Analista de sistemas de automação</OptionSelected>
                <OptionSelected value="Desenhista de páginas da internet">Desenhista de páginas da internet</OptionSelected>
                <OptionSelected value="Programador de multimídia">Programador de multimídia</OptionSelected>
                <OptionSelected value="Monitorador de sistemas">Monitorador de sistemas</OptionSelected>
                <OptionSelected value="Todos">Todos</OptionSelected>
            </ComboBox>
        </ComboBoxContainer>
        </ContainerSearch>
        <ContainerCarousel>
            {/* {infosPubliPerson.filter((infos) => 
            infos.nome.includes(searched))
            .map((infos, index) => ( */}
        
        {infosPubliPerson
            .filter((infos) => infos.nome.toLowerCase().includes(searched && typeof searched === 'string' ? searched.toLowerCase() : ''))
            .map((infos, index) => (
                <ExplorePersonCard
                    key={index}
                    id_publicacao_pessoa={infos.id_publicacao_pessoa}
                    publiNome={infos.nome}
                    publiArea={infos.area_interesse}
                    publiDescricao={infos.descricao}
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
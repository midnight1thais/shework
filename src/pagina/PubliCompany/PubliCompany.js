import React, {useState} from "react";
import { BigTitle, ComboBox, ComboBoxContainer, ContainerCarousel, ContainerHeader, ContainerInput, ContainerSearch, IconSearch, InputSearch, LittleTitle, OptionSelected } from "./style"

import iconsearch from '../../assets/IconSearch.svg'
import PubliPersonCard from "../../componentes/PubliPersonCard/PubliPersonCard";

function PubliPerson(){

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
            <PubliPersonCard/>
        </ContainerCarousel>
        
        

        </>
    )
}

export default PubliPerson
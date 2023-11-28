import React, {useEffect, useState} from "react";
import { BigTitle, ContainerCarousel, ContainerHeader, ContainerInput, ContainerSearch, IconSearch, InputSearch, LittleTitle, OptionSelected } from "./style"

import IconBack from '../../assets/JobButtonBack.svg'
import iconsearch from '../../assets/IconSearch.svg'
import ExploreCompanyCard from "../../componentes/ExploreCompanyCard/ExploreCompanyCard";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

function ExploreCompany(){

    const navigate = useNavigate();

    const goBack = () =>{
      navigate(-1)
    }

    // para a pesquisa
    const [searched, setSearched] = useState([]);


    const handleSearchChange = (value) =>{
        setSearched(value);
    }

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
 
    return(
        <>
        <ContainerHeader>
            <BigTitle>EXPLORE AS PUBLICAÇÕES</BigTitle>
            <LittleTitle>Explore uma vaga para uma possível contratação</LittleTitle>
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
        </ContainerSearch>
        <ContainerCarousel>

        {infosPubliCompany
            .filter((infos) => infos.nome.toLowerCase().includes(searched && typeof searched === 'string' ? searched.toLowerCase() : ''))
            .map((infos, index) => (
                <ExploreCompanyCard
                    key={index}
                    id_publiEmpresa={infos.id_publiEmpresa}
                    publiNome={infos.nome}
                    publiSomos={infos.somos_descricao}
                    isVisible={true}
                />
            ))
        }
        {/* {infosPubliCompany.map((infos) => {  
                return(
            <ExploreCompanyCard
            id_publiEmpresa={infos.id_publiEmpresa}
            isVisible={true}
            />
                    )
                })} */}
        </ContainerCarousel>
        
        

        </>
    )
}

export default ExploreCompany
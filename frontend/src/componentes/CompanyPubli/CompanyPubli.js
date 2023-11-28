import { ButtonPubli, ContainerLink, ContainerTitle, LinkA, TitleNormal, TitlePurple, CompanyText, ContainerLeft, ContainerRight } from "./style";
import CompanyImg from '../../assets/CompanyImg.svg'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CompanyPubli(){

    const [enable, setEnable] = useState(true);
    const categoria = localStorage.getItem('@Auth:user_categoria')
    
    useEffect(() => {
        async function fetchPublis() {
            try {
                if (categoria === 'Técnico em TI' || categoria === 'Trabalhos Diversos' || !categoria){
                    console.log('ele é uma pessoa e não pode publicar como empresa')
                    setEnable(false)
                } else{
                  console.log('ele é uma empresa')
                  setEnable(true)
                }
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da publi:', error);
            }
        }
  
        fetchPublis();
    }, [categoria]);

    return(
        <>
        <ContainerLeft>
            <ContainerTitle>
                <TitleNormal>Diversas empresas</TitleNormal>
                <TitleNormal>ofertam vagas para</TitleNormal>
                <TitleNormal>mulheres de</TitleNormal>
                <TitleNormal>diferentes areas</TitleNormal>
                <TitlePurple>Transforme seu futuro</TitlePurple>
                <TitlePurple>profissional!</TitlePurple>
            </ContainerTitle>
            <ButtonPubli><Link to='/exploreCompany'>Explore as publicações</Link></ButtonPubli>
            {enable &&
            <ContainerLink>
                <CompanyText>É uma empresa?</CompanyText>
                <LinkA><Link to='/createJob'>Publique uma VAGA</Link></LinkA>
            </ContainerLink>
            }
        </ContainerLeft>
        <ContainerRight>
            <img src={CompanyImg} alt="Uma pessoa tecnologica"/>
        </ContainerRight>
        
        </>
    )
}

export default CompanyPubli
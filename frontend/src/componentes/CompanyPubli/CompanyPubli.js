import { ButtonPubli, ContainerLink, ContainerTitle, LinkA, TitleNormal, TitlePurple, CompanyText, ContainerLeft, ContainerRight } from "./style";
import CompanyImg from '../../assets/CompanyImg.svg'
import { Link } from "react-router-dom";

function CompanyPubli(){

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
            <ContainerLink>
                <CompanyText>É uma empresa?</CompanyText>
                <LinkA><Link to='/createJob'>Publique uma VAGA</Link></LinkA>
            </ContainerLink>
        </ContainerLeft>
        <ContainerRight>
            <img src={CompanyImg} alt="Uma pessoa tecnologica"/>
        </ContainerRight>
        
        </>
    )
}

export default CompanyPubli
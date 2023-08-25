import { ButtonPubli, ContainerLink, ContainerTitle, LinkA, TitleNormal, TitlePurple, CompanyText, ContainerLeft, ContainerRight } from "./style";
import CompanyImg from '../../assets/CompanyImg.svg'

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
            <ButtonPubli>Explore as publicações</ButtonPubli>
            <ContainerLink>
                <CompanyText>É uma empresa?</CompanyText>
                <LinkA>Publique AQUI</LinkA>
            </ContainerLink>
        </ContainerLeft>
        <ContainerRight>
            <img src={CompanyImg} alt="Uma pessoa tecnologica"/>
        </ContainerRight>
        
        </>
    )
}

export default CompanyPubli
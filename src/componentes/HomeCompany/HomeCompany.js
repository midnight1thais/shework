import { ContainerCarousel, ContainerCompany, ContainerPubli, Title } from "./style";
import CompanyCarousel from "../CompanyCarousel/CompanyCarousel";

function HomeCompany(){ 

    
    return(
        <ContainerCompany>
            <Title>Faça parte da nossa rede de</Title>
            <Title>oportunidades</Title>
            <ContainerCarousel>
               <CompanyCarousel/>
            </ContainerCarousel>
            <ContainerPubli>
                publicações
            </ContainerPubli>
        </ContainerCompany>
    )
}

export default HomeCompany

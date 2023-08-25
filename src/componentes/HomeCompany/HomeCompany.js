import { ContainerCarousel, ContainerCompany, ContainerPubli, Title } from "./style";
import CompanyCarousel from "../CompanyCarousel/CompanyCarousel";
import CompanyPubli from "../CompanyPubli/CompanyPubli";

function HomeCompany(){ 

    
    return(
        <ContainerCompany>
            <Title>Faça parte da nossa rede de</Title>
            <Title>oportunidades</Title>
            <ContainerCarousel>
               <CompanyCarousel/>
            </ContainerCarousel>
            <ContainerPubli>
                <CompanyPubli/>
            </ContainerPubli>
        </ContainerCompany>
    )
}

export default HomeCompany

import { ContainerCarousel, ContainerCompany, ContainerPubli, Title, Title2 } from "./style";
import CompanyCarousel from "../CompanyCarousel/CompanyCarousel";
import CompanyPubli from "../CompanyPubli/CompanyPubli";

function HomeCompany(){ 

    
    return(
        <ContainerCompany>
            <Title>Faça parte da nossa rede de</Title>
            <Title2>oportunidades</Title2>
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

import PersonCarousel from "../PersonCarousel/PersonCarousel";
import { ContainerCarousel, ContainerPerson, ContainerPubli, Title } from "./style";


function HomePerson(){

    return(
        <ContainerPerson>
            <Title>Impulsione sua carreira</Title>
            <ContainerCarousel>
               <PersonCarousel/>
            </ContainerCarousel>
            <ContainerPubli>
                
            </ContainerPubli>
        </ContainerPerson>
    )
}

export default HomePerson
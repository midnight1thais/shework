import PersonCarousel from "../PersonCarousel/PersonCarousel";
import { ContainerCarousel, ContainerPerson, ContainerPubli, Title } from "./style";


function HomePerson(){

    return(
        <ContainerPerson>
            <Title>Faça parte da nossa rede de</Title>
            <Title>oportunidades</Title>
            <ContainerCarousel>
               <PersonCarousel/>
            </ContainerCarousel>
            <ContainerPubli>
                
            </ContainerPubli>
        </ContainerPerson>
    )
}

export default HomePerson
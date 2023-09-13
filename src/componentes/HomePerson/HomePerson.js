import { Link } from "react-router-dom";
import { ButtonPubli, ContainerLink, LinkA } from "../PersonCard/style";
import PersonCarousel from "../PersonCarousel/PersonCarousel";
import { ContainerCarousel, ContainerPerson, ContainerPubli, Explanation, Title } from "./style";


function HomePerson(){

    return(
        <ContainerPerson>
            <Title>Impulsione sua carreira</Title>
            <Explanation>Apresente seu perfil para oportunidades de emprego</Explanation>
            <ContainerCarousel>
               <PersonCarousel/>
            </ContainerCarousel>
            <ContainerPubli>
                <ButtonPubli><Link to='/explorePerson'>Explore as publicações</Link></ButtonPubli>
                <ContainerLink>
                    <LinkA><Link to='/createPubli'>Publique AQUI</Link></LinkA>
                </ContainerLink>
            </ContainerPubli>
        </ContainerPerson>
    )
}

export default HomePerson
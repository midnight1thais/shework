import { Link } from "react-router-dom";
import { ButtonPubli, ContainerLink, LinkA } from "../PersonCard/style";
import PersonCarousel from "../PersonCarousel/PersonCarousel";
import { ContainerCarousel, ContainerPerson, ContainerPubli, Explanation, Title } from "./style";
import { useEffect, useState } from "react";
import {api} from '../../services/api';


function HomePerson(){
    // const [enable, setEnable] = useState(true);

    // const fetchData = async () => {
    //     const id = localStorage.getItem('@Auth:user_id');
        
    //     const response = await api.get('/publipersonGet/' + id);
    //     setEnable(response.data.success);

    //     if(response.data.success = true){
    //         setEnable(false)
    //         console.log('ele tem publicações')
    //     } else{
    //         setEnable(true)
    //         console.log('ele não tem')
    //     }
        
    // } 

    // useEffect(() => {
    //     fetchData()
    // }, [])

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
                    {/* Validar se ja tem publicacao */}
                    {/* {enable &&
                        <LinkA><Link to='/createPubli'>Publique AQUI</Link></LinkA>
                    } */}
                </ContainerLink>
            </ContainerPubli>
        </ContainerPerson>
    )
}

export default HomePerson
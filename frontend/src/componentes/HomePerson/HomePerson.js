import { Link } from "react-router-dom";
import { ButtonPubli, ContainerLink, LinkA } from "../PersonCard/style";
import PersonCarousel from "../PersonCarousel/PersonCarousel";
import { ContainerCarousel, ContainerPerson, ContainerPubli, Explanation, Title } from "./style";
import { useEffect, useState } from "react";
import {api} from '../../services/api';


function HomePerson(){
    const [enable, setEnable] = useState(true);
    const id = localStorage.getItem('@Auth:user_id');
    const categoria = localStorage.getItem('@Auth:user_categoria')
    
    useEffect(() => {
        async function fetchPublis() {
            try {
                if (categoria === 'Empresa' || !categoria){
                    console.log('ele é uma empresa e não pode publicar como pessoa')
                    setEnable(false)
                } else{
                    const response = await api.get('/publipersonGet/' + id);
                    setEnable(response.data.success);

                    if(response.data.success === true){
                        setEnable(false)
                        console.log('ele tem publicações')
                    } else{
                        setEnable(true)
                        console.log('ele não tem')
                    }
                }
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da publi:', error);
            }
        }
  
        fetchPublis();
    }, [id, categoria ]);


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
                    {enable &&
                        <LinkA><Link to='/createPubli'>Publique AQUI</Link></LinkA>
                    }
                </ContainerLink>
            </ContainerPubli>
        </ContainerPerson>
    )
}

export default HomePerson
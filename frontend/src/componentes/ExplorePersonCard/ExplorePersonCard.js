import { useEffect, useState } from 'react';
import ImgPersonCard from '../../assets/ImgPersonCard.png'
import ImgShare from '../../assets/compartilhar.svg'
import ImgContract from '../../assets/contratar.svg'
import { api } from '../../services/api';
import { ButtonRight, ContainerAll, ContainerCard, ContainerImg, ContainerTop, Date2, Description, Icon, IconRight, Service, Title } from "./style";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';


function ExplorePersonCard({id_publicacao_pessoa}){

    const isVisible = true;

    // useState para publicacoes 
    const [infos, setInfos] = useState([]);

    //get das pessoas

    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/publiperson/${id_publicacao_pessoa}`); 
                setInfos(response.data.data);
                console.log("resposta do response.data DO CARD :", response.data.data)
                console.log("resposta do id da publicacao DO CARD:", response.data.data.id_publicacao_pessoa)
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da publi:', error);
            }
        }
    
        fetchPublis();
    }, []);

    return(
        <>
        <div>
        {infos.map((item) => {  
                const formattedDate = format(new Date(item.dt_nascimento), 'dd/MM/yyyy', { locale: ptBR });
                return(
        <ContainerCard isVisible={isVisible}>
            <Icon src={ImgPersonCard} alt=''/>
            <ContainerAll>
                <ContainerTop>
                <Date2>{formattedDate}</Date2>
                <Service>{item.area_interesse}</Service>
                </ContainerTop>
                <Title>{item.nome}</Title>
                <Description>{item.descricao}</Description>
            </ContainerAll>
            <ContainerImg>
                <ButtonRight><IconRight src={ImgShare} alt=''/></ButtonRight>
                <ButtonRight><IconRight src={ImgContract} alt=''/></ButtonRight>
            </ContainerImg>
        </ContainerCard>
      )})}
        </div>
        </>
    )
}

export default ExplorePersonCard
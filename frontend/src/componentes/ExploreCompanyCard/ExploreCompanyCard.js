import { useEffect, useState } from 'react';
import ImgCompany from '../../assets/LogoCompany.png'
import ImgShare from '../../assets/compartilhar.svg'
import ImgContract from '../../assets/contratar.svg'
import { ButtonRight, ContainerAll, ContainerCard, ContainerImg, ContainerTop, Date, Description, Icon, IconRight, Service, Title } from "./style";
import { api } from '../../services/api';

function ExploreCompanyCard({id_publiEmpresa}){

    const isVisible = true;

    const cardArray = new Array(5).fill(null);

    // useState para publicacoes 
    const [infos, setInfos] = useState([]);

    //get das pessoas

    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/company/list/${id_publiEmpresa}`); 
                setInfos(response.data.data);
                console.log("resposta do response.data DO CARD :", response.data.data)
                console.log("resposta do id da publicacao DO CARD:", response.data.data.id_publiEmpresa)
                
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
                return(
        <ContainerCard isVisible={isVisible}>
            <Icon src={ImgCompany} alt=''/>
            <ContainerAll>
                <ContainerTop>
                <Date>2023</Date>
                </ContainerTop>
                <Title>{item.nome}</Title>
                <Description>{item.somos_descricao}</Description>
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

export default ExploreCompanyCard
import { useEffect, useState } from 'react';
import ImgPersonCard from '../../assets/ImgPersonCard.png'
import ImgShare from '../../assets/compartilhar.svg'
import { api } from '../../services/api';
import { ButtonRight, ContainerAll, ContainerCard, ContainerImg, ContainerTop, Date2, Description, Icon, IconRight, Service, Title } from "./style";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';


function ExplorePersonCard({publiNome, publiArea, publiDescricao ,id_publicacao_pessoa}){

    const navigate = useNavigate();

    const goToPerson = () => {
        const currentPath = window.location.pathname; // Pega o caminho atual
  
        // método replace (função do JavaScript) para remover tanto /homeRegister quanto /homeRegisterCompany
        const newPath = currentPath.replace(/\/(homeRegister(Company)?|explorePerson)/, '');
        
        // A adição do ? torna a parte (Company) opcional
        navigate(`${newPath}/publiPerson/${id_publicacao_pessoa}`); // Adiciona a nova parte
          
        };

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
    }, [id_publicacao_pessoa]);

    const ContactPerson = () =>{
        alert(`Se conecte com essa pessoa pelo email: ${infos[0].email}`,  )
    }
// onClick={goToPerson}
    return(
        <>
        <div>
        <ContainerCard onClick={goToPerson} isVisible={isVisible}>
            <Icon src={ImgPersonCard} alt=''/>
            <ContainerAll>
                <ContainerTop>
                {infos.map((item) => {  
                const formattedDate = format(new Date(item.dt_nascimento), 'dd/MM/yyyy', { locale: ptBR });
                return(
                <Date2>{formattedDate}</Date2>
                )})}
                <Service>{publiArea}</Service>
                </ContainerTop>
                <Title>{publiNome}</Title>
                <Description>{publiDescricao}</Description>
            </ContainerAll>
            <ContainerImg>
                <ButtonRight onClick={ContactPerson}><IconRight src={ImgShare} alt=''/></ButtonRight>
            </ContainerImg>
        </ContainerCard>

        </div>
        </>
    )
}

export default ExplorePersonCard
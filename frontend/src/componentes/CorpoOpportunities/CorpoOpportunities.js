import { ContainerText, DivCourse,  SectionCourse, TextRight } from "./style";
import CorpoOpportunitesCard from "../CorpoOpportunitiesCard/CorpoOpportunitiesCard";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

function CorpoOpportunities({idCorporation}){

        // useState para publicacoes 
        const [infosVaga, setInfosVaga] = useState([]);
    
        //get das pessoas
    
        useEffect(() => {
            async function fetchPublis() {
                try {
                    const response = await api.get(`/publivaga/publiCompanyVaga/${idCorporation}`); 
                    setInfosVaga(response.data.data);
                    console.log("resposta do response.data DO CARD DA VAGA:", response.data.data)
                    
                } catch (error) {
                    console.error('Erro ao recuperar as informações da vaga:', error);
                }
            }
        
            fetchPublis();
        }, []);

    return(
        <>
        <ContainerText>
                <TextRight>Oportunidades de Vagas</TextRight>
        </ContainerText>
        <SectionCourse>
            <DivCourse>
            {infosVaga.map((infos) => {  
                const formattedDate = format(new Date(infos.dt_anuncio), 'dd/MM/yyyy', { locale: ptBR });
                console.log('informações da vaga', infos)
                return(
                <CorpoOpportunitesCard 
                idCompany={idCorporation}
                idVaga={infos.id_publicacao_vaga}
                nomeVaga={infos.nome_vaga}
                tipoVaga={infos.tipo_vaga}
                areaVaga={infos.area_atuacao}
                dataVaga={formattedDate}
                />
                    )
                })}
            </DivCourse>
        </SectionCourse>
        
        </>
    )
}

export default CorpoOpportunities
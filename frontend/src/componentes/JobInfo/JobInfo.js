import { DivIcon, DivInfo, DivLeftA, DivRightA, DivTextA, HeaderInfo, IconProfile, SectionInfo, SubTextLeft, TextInfo, TextLeft } from "./style";
import JobInfoIcon from '../../assets/JobInfoIcon.svg'
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

function JobInfo({idJobCompany}) { 

    const [informacoesJob, setInfoJob] = useState([]);
    
    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/publivaga/publiVagaList/` + idJobCompany); 
                setInfoJob(response.data.data);
                console.log("Informações da vaga", response.data.data)
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da vaga:', error);
            }
        }

        fetchPublis();
    }, [idJobCompany]);


    return(
        <>
        <SectionInfo>
            <HeaderInfo>
                <DivIcon>
                    <IconProfile src={JobInfoIcon} alt=""/>
                </DivIcon>
                <TextInfo>Detalhes da Vaga</TextInfo>
            </HeaderInfo>
            {informacoesJob.map((infoJob) => {
                const formattedDate = format(new Date(infoJob.dt_anuncio), 'dd/MM/yyyy', { locale: ptBR });
                return (
            <DivInfo>
                <DivLeftA>
                    <DivTextA>
                        <TextLeft>
                            Tipo de vaga
                        </TextLeft>
                        <SubTextLeft>
                            {infoJob.tipo_vaga}
                        </SubTextLeft>
                    </DivTextA>
                    <DivTextA>
                        <TextLeft>
                            Cidade e Estado
                        </TextLeft>
                        <SubTextLeft>
                            {infoJob.cidade_estado}
                        </SubTextLeft>
                    </DivTextA>
                </DivLeftA>
                <DivRightA>
                    <DivTextA>
                        <TextLeft>
                            Média Salarial da Vaga
                        </TextLeft>
                        <SubTextLeft>
                            {infoJob.media_salarial}
                        </SubTextLeft>
                    </DivTextA>
                    <DivTextA>
                        <TextLeft>
                            Nível de Experiência
                        </TextLeft>
                        <SubTextLeft>
                            {infoJob.nivel_conhecimento}
                        </SubTextLeft>
                    </DivTextA>
                </DivRightA>
                <DivRightA>
                    <DivTextA>
                        <TextLeft>
                            Área de Atuação
                        </TextLeft>
                        <SubTextLeft>
                            {infoJob.area_atuacao}
                        </SubTextLeft>
                    </DivTextA>
                    <DivTextA>
                        <TextLeft>
                            Data de Anuncio
                        </TextLeft>
                        <SubTextLeft>
                            {formattedDate}
                        </SubTextLeft>
                    </DivTextA>
                </DivRightA>
            </DivInfo>
                    )
                })}

        </SectionInfo>
        
        </>
    )
}

export default JobInfo
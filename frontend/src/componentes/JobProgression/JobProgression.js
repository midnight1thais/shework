import { ContainerRespo, ContainerText, DivIcon,HeaderInfo, IconProfile, ImgRespo, ReadRespo, SectionInfo, TextInfo, TextRespo } from "./style"
import JobRespoIcon from '../../assets/JobCourseIcon.png'
import seta from '../../assets/JobSeta.svg'
import JobImg2 from '../../assets/JobRespoIcon2.svg'
import { useEffect, useState } from "react";
import { api } from "../../services/api";

function JobProgression({idJobCompany}) {

    const [progressaoJob, setProgressaoJob] = useState([]);
    
    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/publivaga/listProgressao/` + idJobCompany); 
                setProgressaoJob(response.data.data);
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
                    <IconProfile src={JobRespoIcon} alt=""/>
                </DivIcon>
                <TextInfo>Possível Progressão</TextInfo>
            </HeaderInfo>
            <ContainerRespo>
                <ImgRespo src={JobImg2} alt=""/>
                <ContainerText>
                {progressaoJob.map((infoJob) => {
                
                    return (
                    <TextRespo>
                        {infoJob.descricao}
                    </TextRespo>
                            )
                        })}
                    <ReadRespo>
                        Saiba Mais
                        <img src={seta} alt=""/>
                    </ReadRespo>
                    
                </ContainerText>
            </ContainerRespo>
        </SectionInfo>
        </>
    )
}

export default JobProgression
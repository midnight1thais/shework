import { ContainerRespo, ContainerText, DivIcon,HeaderInfo, IconProfile, ImgRespo, ReadRespo, SectionInfo, TextInfo, TextRespo } from "./style"
import JobRespoIcon from '../../assets/JobCourseIcon.png'
import seta from '../../assets/JobSeta.svg'
import JobImg1 from '../../assets/JobRespoIcon.svg'
import { api } from "../../services/api";
import { useEffect, useState } from "react";

function JobRespo({idJobCompany}) {

    const [responsabilidadesJob, setResponsabilidadesJob] = useState([]);
    
    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/publivaga/listResponsabilidades/` + idJobCompany); 
                setResponsabilidadesJob(response.data.data);
                console.log("Informações da vaga", response.data.data)
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da vaga:', error);
            }
        }

        fetchPublis();
    }, [idJobCompany]);

    console.log("as informações", responsabilidadesJob)

    return(
        <>
        <SectionInfo>
            <HeaderInfo>
                <DivIcon>
                    <IconProfile src={JobRespoIcon} alt=""/>
                </DivIcon>
                <TextInfo>Responsabilidades</TextInfo>
            </HeaderInfo>
            <ContainerRespo>
                <ContainerText>
                {responsabilidadesJob.map((infoJob) => {
                
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
                <ImgRespo src={JobImg1} alt=""/>
            </ContainerRespo>
        </SectionInfo>
        </>
    )
}

export default JobRespo
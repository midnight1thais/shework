import { DivContainer, DivIcon, DivRe, HeaderInfo, IconProfile, SectionInfo, SubRe, TextInfo, TitleRe } from "./style"
import JobRequisiteIcon from '../../assets/JobCourseIcon.png'
import { useEffect, useState } from "react";
import { api } from "../../services/api";

function JobRequisite({idJobCompany}) {

    const [requisitosOBJob, setRequisitosOBJob] = useState([]);
    const [requisitosDJJob, setRequisitosDJJob] = useState([]);
    
    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/publivaga/listRequisitosOB/` + idJobCompany); 
                setRequisitosOBJob(response.data.data);
                console.log("Requisitos Obrigatórios da vaga", response.data.data)
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da vaga:', error);
            }
        }

        fetchPublis();
    }, [idJobCompany]);

    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/publivaga/listRequisitosDJ/` + idJobCompany); 
                setRequisitosDJJob(response.data.data);
                console.log("Requisitos Obrigatórios da vaga", response.data.data)
                
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
                    <IconProfile src={JobRequisiteIcon} alt=""/>
                </DivIcon>
                <TextInfo>Requisitos</TextInfo>
            </HeaderInfo>
            <DivContainer>
                <DivRe>
                    <TitleRe>OBRIGATÓRIOS</TitleRe>
                    {requisitosOBJob.map((infoRequisitos) => {
                        return (
                    <SubRe>{infoRequisitos.descricao}</SubRe>
                            )
                        })}
                    
                </DivRe>
                <DivRe>
                    <TitleRe>DESEJÁVEIS</TitleRe>
                    {requisitosDJJob.map((infoRequisitos) => {
                        return (
                    <SubRe>{infoRequisitos.descricao}</SubRe>
                            )
                        })}
                </DivRe>
            </DivContainer>
        </SectionInfo>
        </>
    )
}

export default JobRequisite
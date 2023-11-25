import { useParams } from "react-router-dom";
import JobFooter from "../../componentes/JobFooter/JobFooter";
import JobInfo from "../../componentes/JobInfo/JobInfo";
import JobProgression from "../../componentes/JobProgression/JobProgression";
import JobProject from "../../componentes/JobProject/JobProject";
import JobRequisite from "../../componentes/JobRequisite/JobRequisite";
import JobRespo from "../../componentes/JobRespo/JobRespo";
import { DivDetails, DivFooter, DivHeader, DivProgression, DivProject, DivRequisite, DivRespo, HeaderText, SectionGlobal } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

function JobCompany() {

    const { id_job } = useParams();

    const [infos, setInfos] = useState([]);
    
    
    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/publivaga/publiVagaList/` + id_job); 
                setInfos(response.data.data);
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da publi:', error);
            }
        }
  
        fetchPublis();
    }, [id_job]);

    return(
        <SectionGlobal>
            {infos.map((item) => {
                return (
            <DivHeader>
                <HeaderText> {item.nome_vaga} </HeaderText>
            </DivHeader>
                    )
                    
                })}
            <DivDetails>
                <JobInfo idJobCompany={id_job}/>
            </DivDetails>
            <DivRequisite>
                <JobRequisite idJobCompany={id_job}/>
            </DivRequisite>
            <DivRespo>
                <JobRespo idJobCompany={id_job}/>
            </DivRespo>
            <DivProgression>
                <JobProgression idJobCompany={id_job}/>
            </DivProgression>
            <DivProject>
                <JobProject idJobCompany={id_job}/>
            </DivProject>
            <DivFooter>
                <JobFooter idJobCompany={id_job}/>
            </DivFooter>
        </SectionGlobal>
    )
}

export default JobCompany
import { useParams } from "react-router-dom";
import JobFooter from "../../componentes/JobFooter/JobFooter";
import JobInfo from "../../componentes/JobInfo/JobInfo";
import JobProgression from "../../componentes/JobProgression/JobProgression";
import JobProject from "../../componentes/JobProject/JobProject";
import JobRequisite from "../../componentes/JobRequisite/JobRequisite";
import JobRespo from "../../componentes/JobRespo/JobRespo";
import { DivDetails, DivFooter, DivHeader, DivProgression, DivProject, DivRequisite, DivRespo, HeaderText, SectionGlobal } from "./style";

function JobCompany() {

    const { id_job } = useParams();

    return(
        <SectionGlobal>
            <DivHeader>
                <HeaderText> NOME DO CARGO DA EMPRESA </HeaderText>
            </DivHeader>
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
import JobFooter from "../../componentes/JobFooter/JobFooter";
import JobInfo from "../../componentes/JobInfo/JobInfo";
import JobProgression from "../../componentes/JobProgression/JobProgression";
import JobProject from "../../componentes/JobProject/JobProject";
import JobRequisite from "../../componentes/JobRequisite/JobRequisite";
import JobRespo from "../../componentes/JobRespo/JobRespo";
import { DivDetails, DivFooter, DivHeader, DivProgression, DivProject, DivRequisite, DivRespo, HeaderText, SectionGlobal } from "./style";

function JobCompany() {

    return(
        <SectionGlobal>
            <DivHeader>
                <HeaderText> NOME DO CARGO DA EMPRESA </HeaderText>
            </DivHeader>
            <DivDetails>
                <JobInfo/>
            </DivDetails>
            <DivRequisite>
                <JobRequisite/>
            </DivRequisite>
            <DivRespo>
                <JobRespo/>
            </DivRespo>
            <DivProgression>
                <JobProgression/>
            </DivProgression>
            <DivProject>
                <JobProject/>
            </DivProject>
            <DivFooter>
                <JobFooter/>
            </DivFooter>
        </SectionGlobal>
    )
}

export default JobCompany
import { ContainerText, DivCourse,  SectionCourse, TextRight } from "./style";
import CorpoOpportunitesCard from "../CorpoOpportunitiesCard/CorpoOpportunitiesCard";

function CorpoOpportunities(){

    return(
        <>
        <ContainerText>
                <TextRight>Oportunidades de Vagas</TextRight>
        </ContainerText>
        <SectionCourse>
            <DivCourse>
                <CorpoOpportunitesCard />
            </DivCourse>
        </SectionCourse>
        
        </>
    )
}

export default CorpoOpportunities
import { DivCourse, DivIcon, HeaderCourse, IconProfile, SectionCourse, TextCourse } from "./style";
import PubliAbilityIcon from '../../assets/PubliAbilityIcon.svg'
import PubliAbilityCard from "../PortalAbilityCard/PortalAbilityCard";

function PubliAbility() {

    const divs = [
        {competence:"REACT JS"},
        {competence:"REACT JS"},
        {competence:"REACT JS"},
        {competence:"REACT JS"},
        {competence:"REACT JS"},
        {competence:"REACT JS"},
        {competence:"REACT JS"},
        {competence:"REACT JS"},
        {competence:"REACT JS"},
        {competence:"REACT JS"},
        {competence:"REACT JS"},
        {competence:"REACT JS"},
        // Add more items as needed
      ];
    return(
        <>
        <SectionCourse>
            <HeaderCourse>
                <DivIcon>
                    <IconProfile src={PubliAbilityIcon} alt=""/>
                </DivIcon>
                <TextCourse>Competências</TextCourse>
            </HeaderCourse>
            <DivCourse>
            {divs.map((card) => (
                <PubliAbilityCard
                key={card}
                competence={card.competence}
                isVisible={true}
            />
            ))}
            </DivCourse>

        </SectionCourse>
        
        </>
    )
}

export default PubliAbility
import { DivCourse, DivIcon, HeaderCourse, IconProfile, SectionCourse, TextCourse } from "./style";
import PubliAbilityIcon from '../../assets/PubliAbilityIcon.svg'
import PubliLanguageCard from "../PubliLanguageCard/PubliLanguageCard";

function PubliLanguage() {

    const divs = [
        {language:"ingles intermediário"},
        {language:"ingles intermediário"},
        {language:"ingles intermediário"},
        {language:"ingles intermediário"},
        {language:"ingles intermediário"},
        {language:"ingles intermediário"},
        {language:"ingles intermediário"},
        {language:"ingles intermediário"},
        {language:"ingles intermediário"},
        {language:"ingles intermediário"},
        {language:"ingles intermediário"},
        {language:"ingles intermediário"},
        // Add more items as needed
      ];
    return(
        <>
        <SectionCourse>
            <HeaderCourse>
                <DivIcon>
                    <IconProfile src={PubliAbilityIcon} alt=""/>
                </DivIcon>
                <TextCourse>Idiomas</TextCourse>
            </HeaderCourse>
            <DivCourse>
            {divs.map((card) => (
                <PubliLanguageCard
                key={card}
                language={card.language}
                isVisible={true}
            />
            ))}
            </DivCourse>

        </SectionCourse>
        
        </>
    )
}

export default PubliLanguage
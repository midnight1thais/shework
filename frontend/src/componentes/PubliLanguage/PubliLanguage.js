import { DivCourse, DivIcon, HeaderCourse, IconProfile, SectionCourse, TextCourse } from "./style";
import PubliAbilityIcon from '../../assets/PubliAbilityIcon.svg'
import PubliLanguageCard from "../PubliLanguageCard/PubliLanguageCard";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

function PubliLanguage({idPubliPerson}) {

    const [linguas, setLinguas] = useState([]);
    
    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/linguas/` + idPubliPerson); 
                setLinguas(response.data.data);
                console.log(response.data.data)
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da publi:', error);
            }
        }

        fetchPublis();
    }, [idPubliPerson]);


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
            {linguas.map((card) => (
                <PubliLanguageCard
                key={card}
                language={card.nome}
                isVisible={true}
            />
            ))}
            </DivCourse>

        </SectionCourse>
        
        </>
    )
}

export default PubliLanguage
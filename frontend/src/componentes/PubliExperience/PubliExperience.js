import { DivCourse, DivIcon, HeaderCourse, IconProfile, SectionCourse, TextCourse } from "./style";
import PubliExperienceIcon from '../../assets/PubliExperienceIcon.svg'
import PubliExperienceCard from "../PubliExperienceCard/PubliExperienceCard";

function PubliExperience() {

    const divs = [
        { date: "2021-2023", 
        title:"Trabalho Exemplo", 
        descricao: "DESCRIÇÃO REDUZIDA" 
        },
        { date: "2021-2023", 
        title:"Trabalho Exemplo", 
        descricao: "DESCRIÇÃO REDUZIDA" 
        },
        { date: "2021-2023", 
        title:"Trabalho Exemplo", 
        descricao: "DESCRIÇÃO REDUZIDA" 
        },
        { date: "2021-2023", 
        title:"Trabalho Exemplo", 
        descricao: "DESCRIÇÃO REDUZIDA"
        },
        // Add more items as needed
      ];

    return(
        <>
        <SectionCourse>
            <HeaderCourse>
                <DivIcon>
                    <IconProfile src={PubliExperienceIcon} alt=""/>
                </DivIcon>
                <TextCourse>Experiências</TextCourse>
            </HeaderCourse>
            <DivCourse>
            {divs.map((card) => (
                <PubliExperienceCard
                key={card}
                date={card.date}
                title={card.title}
                descricao={card.descricao}
                isVisible={true}
            />
            ))}
            </DivCourse>

        </SectionCourse>
        
        </>
    )
}

export default PubliExperience
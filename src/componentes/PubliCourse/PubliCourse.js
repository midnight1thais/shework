import { DivIcon, DivCourse, HeaderCourse, IconProfile, SectionCourse, TextCourse } from "./style";
import PubliCourseIcon from '../../assets/PubliCourseIcon.svg'
import PubliCourseCard from "../PubliCourseCard/PubliCourseCard";

function PubliCourse(){

    const divs = [
        { date: "2021-2023", 
        title:"Nome do Curso", 
        descricao: "DESCRIÇÃO REDUZIDA" 
        },
        { date: "2021-2023", 
        title:"Nome do Curso", 
        descricao: "DESCRIÇÃO REDUZIDA" 
        },
        { date: "2021-2023", 
        title:"Nome do Curso", 
        descricao: "DESCRIÇÃO REDUZIDA" 
        },
        { date: "2021-2023", 
        title:"Nome do Curso", 
        descricao: "DESCRIÇÃO REDUZIDA"
        },
        // Add more items as needed
      ];

    return(
        <>
        <SectionCourse>
            <HeaderCourse>
                <DivIcon>
                    <IconProfile src={PubliCourseIcon} alt=""/>
                </DivIcon>
                <TextCourse>Cursos</TextCourse>
            </HeaderCourse>
            <DivCourse>
            {divs.map((card) => (
                <PubliCourseCard
                key={card}
                date={card.date}
                service={card.service}
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

export default PubliCourse
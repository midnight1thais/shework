import { DivIcon, DivCourse, HeaderCourse, IconProfile, SectionCourse, TextCourse } from "./style";
import PubliCourseIcon from '../../assets/PubliCourseIcon.svg'
import PubliCourseCard from "../PubliCourseCard/PubliCourseCard";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';


function PubliCourse({idPubliPerson}){

    const [cursos, setCursos] = useState([]);
    
    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/cursos/` + idPubliPerson); 
                setCursos(response.data.data);
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
                    <IconProfile src={PubliCourseIcon} alt=""/>
                </DivIcon>
                <TextCourse>Cursos</TextCourse>
            </HeaderCourse>
            <DivCourse>
            {cursos.map((curso) => {  
                const formattedDate = format(new Date(curso.dt_inicio), 'dd/MM/yyyy', { locale: ptBR });
                const formattedDate2 = format(new Date(curso.dt_final), 'dd/MM/yyyy', { locale: ptBR });
                return(
                <PubliCourseCard
                key={curso}
                dt_inicio={formattedDate}
                dt_final={formattedDate2}
                title={curso.nome}
                descricao={curso.descricao}
                isVisible={true}
            />
            )})}
            </DivCourse>

        </SectionCourse>
        
        </>
    )
}

export default PubliCourse

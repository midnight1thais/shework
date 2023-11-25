import { DivCourse, DivIcon, HeaderCourse, IconProfile, SectionCourse, TextCourse } from "./style";
import PubliExperienceIcon from '../../assets/PubliExperienceIcon.svg'
import PubliExperienceCard from "../PubliExperienceCard/PubliExperienceCard";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

function PubliExperience({idPubliPerson}) {

    const [experiencias, setexperiencias] = useState([]);
    
    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/experiencias/` + idPubliPerson); 
                setexperiencias(response.data.data);
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
                    <IconProfile src={PubliExperienceIcon} alt=""/>
                </DivIcon>
                <TextCourse>Experiências</TextCourse>
            </HeaderCourse>
            <DivCourse>
            {experiencias.map((experiencia) => {  
                const formattedDate = format(new Date(experiencia.dt_inicio), 'dd/MM/yyyy', { locale: ptBR });
                const formattedDate2 = format(new Date(experiencia.dt_final), 'dd/MM/yyyy', { locale: ptBR });
                return(
                <PubliExperienceCard
                key={experiencia}
                dt_inicio={formattedDate}
                dt_final={formattedDate2}
                title={experiencia.nome}
                descricao={experiencia.descricao}
                isVisible={true}
            />
            )})}
            </DivCourse>

        </SectionCourse>
        
        </>
    )
}

export default PubliExperience
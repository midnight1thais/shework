import { DivCourse, DivIcon, HeaderCourse, IconProfile, SectionCourse, TextCourse } from "./style";
import PubliAbilityIcon from '../../assets/PubliAbilityIcon.svg'
import PubliAbilityCard from "../PortalAbilityCard/PortalAbilityCard";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

function PubliAbility({idPubliPerson}) {

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

      const [competencias, setCompetencias] = useState([]);
    
      useEffect(() => {
          async function fetchPublis() {
              try {
                  const response = await api.get(`/competenciaTec/` + idPubliPerson); 
                  setCompetencias(response.data.data);
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
                <TextCourse>Competências</TextCourse>
            </HeaderCourse>
            <DivCourse>
            {competencias.map((card) => (
                <PubliAbilityCard
                competence={card.nome}
                isVisible={true}
            />
            ))}
            </DivCourse>

        </SectionCourse>
        
        </>
    )
}

export default PubliAbility
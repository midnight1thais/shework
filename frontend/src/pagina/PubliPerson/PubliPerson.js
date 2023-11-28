import { DivBottom, DivLeftA, ImgWoman, SectionGlobal, SectionLeft, SectionRight, SimpleTag, SimpleTagText, TextName } from "./style";
import ImgPersonCard from '../../assets/ImgPersonCard.png'
import IconBack from '../../assets/JobButtonBack.svg'
import PubliHeader from "../../componentes/PubliHeader/PubliHeader";
import PubliInfo from "../../componentes/PubliInfo/PubliInfo";
import PubliCourse from "../../componentes/PubliCourse/PubliCourse";
import PubliCertificate from "../../componentes/PubliCertificate/PubliCertificate";
import PubliExperience from "../../componentes/PubliExperience/PubliExperience";
import PubliAbility from "../../componentes/PubliAbility/PubliAbility";
import PubliLanguage from "../../componentes/PubliLanguage/PubliLanguage";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";



function PubliPerson(){
    const { id } = useParams();

    const [infos, setInfos] = useState([]);

    const navigate = useNavigate();

    const goBack = () =>{
      navigate(-1)
    }
  
    
    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/publiperson/` + id); 
                setInfos(response.data.data);
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da publi:', error);
            }
        }
  
        fetchPublis();
    }, [id]);



    return(
        <SectionGlobal>
            <SectionLeft>
                    {infos.map((item) => {
                        return (
                <DivLeftA>
                    <button onClick={goBack}><img src={IconBack} alt=""/></button>
                    <ImgWoman src={ImgPersonCard} alt=""/>
                    <TextName>{item.nome}</TextName>
                    <SimpleTag> 
                            <SimpleTagText>{item.nacionalidade} </SimpleTagText>
                    </SimpleTag>
                </DivLeftA>
                            )
                    
                        })}

            </SectionLeft>
            <SectionRight>
                <PubliHeader/>
                <PubliInfo idPubliPerson={id}/>
                <PubliCourse idPubliPerson={id}/>
                <PubliCertificate idPubliPerson={id} />
                <PubliExperience idPubliPerson={id} />
                <DivBottom>
                    <PubliAbility idPubliPerson={id}/>
                    <PubliLanguage idPubliPerson={id}/>
                </DivBottom>
            </SectionRight>
        </SectionGlobal>
    )
}

export default PubliPerson
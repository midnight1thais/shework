import { ButtonBack, DivAboutImg, DivAboutText, DivHeader, DivOpportunities, DivProject, DivValues, HeaderLogo, HeaderText, IconBack, SectionGlobal } from "./style";
import Logo from '../../assets/LogoCompany.png'
import CorpoAboutImg from "../../componentes/CorpoAboutImg/CorpoAboutImg";
import CorpoAboutText from "../../componentes/CorpoAboutText/CorpoAboutText";
import CorpoValues from "../../componentes/CorpoValues/CorpoValues";
import CorpoProject from "../../componentes/CorpoProject/CorpoProject";
import CorpoOpportunities from "../../componentes/CorpoOpportunities/CorpoOpportunities";
import IconButtonBack from '../../assets/JobButtonBack.svg'
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

function Corporation(){
    const { id_company } = useParams();

    const [infos, setInfos] = useState([]);

    const navigate = useNavigate();

    const goBack = () =>{
      navigate(-1)
    }
  
    
    
    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/company/informations/` + id_company); 
                setInfos(response.data);
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da publi:', error);
            }
        }
  
        fetchPublis();
    }, [id_company]);

    return(
        <SectionGlobal>
            <DivHeader>
                <HeaderLogo src={Logo} alt='' />
                {infos.map((item) => {
                return (
                    <HeaderText>  
                        {item.nome}
                    </HeaderText>
                    )
            
                })}
            </DivHeader>
            <DivAboutImg>
                <CorpoAboutImg idCorporation={id_company}/>
            </DivAboutImg>
            <DivAboutText>
                <CorpoAboutText idCorporation={id_company} />
            </DivAboutText>
            <DivValues>
                <CorpoValues idCorporation={id_company}/>
            </DivValues>
            <DivProject>
                <CorpoProject idCorporation={id_company} />
            </DivProject>
            <DivOpportunities>
                <CorpoOpportunities idCorporation={id_company}/>
            </DivOpportunities>
            <ButtonBack onClick={goBack}><IconBack src={IconButtonBack}/></ButtonBack>
                    
        </SectionGlobal>
    )
}

export default Corporation
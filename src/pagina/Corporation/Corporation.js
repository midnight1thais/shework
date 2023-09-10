import { DivAboutImg, DivAboutText, DivHeader, DivOpportunities, DivProgression, DivProject, DivValues, HeaderLogo, HeaderText, SectionGlobal } from "./style";
import Logo from '../../assets/LogoCompany.png'
import CorpoAboutImg from "../../componentes/CorpoAboutImg/CorpoAboutImg";

function Corporation(){

    return(
        <SectionGlobal>
            <DivHeader>
                <HeaderLogo src={Logo} alt='' />
                <HeaderText> NOME DA EMPRESA </HeaderText>
            </DivHeader>
            <DivAboutImg>
                <CorpoAboutImg/>
            </DivAboutImg>
            <DivAboutText>
                
            </DivAboutText>
            <DivValues>
                
            </DivValues>
            <DivProject>
                
            </DivProject>
            <DivProgression>
                
            </DivProgression>
            <DivOpportunities>
                
            </DivOpportunities>
        </SectionGlobal>
    )
}

export default Corporation
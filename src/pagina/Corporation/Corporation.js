import { DivAboutImg, DivAboutText, DivHeader, DivOpportunities, DivProject, DivValues, HeaderLogo, HeaderText, SectionGlobal } from "./style";
import Logo from '../../assets/LogoCompany.png'
import CorpoAboutImg from "../../componentes/CorpoAboutImg/CorpoAboutImg";
import CorpoAboutText from "../../componentes/CorpoAboutText/CorpoAboutText";
import CorpoValues from "../../componentes/CorpoValues/CorpoValues";
import CorpoProject from "../../componentes/CorpoProject/CorpoProject";
import CorpoOpportunities from "../../componentes/CorpoOpportunities/CorpoOpportunities";

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
                <CorpoAboutText/>
            </DivAboutText>
            <DivValues>
                <CorpoValues/>
            </DivValues>
            <DivProject>
                <CorpoProject/>
            </DivProject>
            <DivOpportunities>
                <CorpoOpportunities/>
            </DivOpportunities>
        </SectionGlobal>
    )
}

export default Corporation
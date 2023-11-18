import { DivBottom, DivLeftA, ImgWoman, SectionGlobal, SectionLeft, SectionRight, SimpleTag, SimpleTagText, TextName } from "./style";
import ImgWomanIcon from '../../assets/ImgWomanPubliPerson.png'
import IconBack from '../../assets/JobButtonBack.svg'
import PubliHeader from "../../componentes/PubliHeader/PubliHeader";
import PubliInfo from "../../componentes/PubliInfo/PubliInfo";
import PubliCourse from "../../componentes/PubliCourse/PubliCourse";
import PubliCertificate from "../../componentes/PubliCertificate/PubliCertificate";
import PubliExperience from "../../componentes/PubliExperience/PubliExperience";
import PubliAbility from "../../componentes/PubliAbility/PubliAbility";
import PubliLanguage from "../../componentes/PubliLanguage/PubliLanguage";
import { Link, useParams } from "react-router-dom";


function PubliPerson(){
    const { id } = useParams();

    return(
        <SectionGlobal>
            <SectionLeft>
                <DivLeftA>
                    <Link to='/homeRegister'><img src={IconBack} alt=""/></Link>
                    <ImgWoman src={ImgWomanIcon} alt=""/>
                    <TextName> Maria da Silva </TextName>
                    <TextName> Cardoso </TextName>
                    <SimpleTag> 
                            <SimpleTagText>Brasileira </SimpleTagText>
                    </SimpleTag>
                </DivLeftA>

            </SectionLeft>
            <SectionRight>
                <PubliHeader/>
                <PubliInfo/>
                <PubliCourse/>
                <PubliCertificate 
                    idPubliPerson={id}
                />
                <PubliExperience/>
                <DivBottom>
                    <PubliAbility/>
                    <PubliLanguage/>
                </DivBottom>
            </SectionRight>
        </SectionGlobal>
    )
}

export default PubliPerson
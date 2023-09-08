import { DivLeftA, ImgWoman, SectionGlobal, SectionLeft, SectionRight, SimpleTag, SimpleTagText, TextName } from "./style";
import ImgWomanIcon from '../../assets/ImgWomanPubliPerson.png'
import PubliHeader from "../../componentes/PubliHeader/PubliHeader";
import PubliInfo from "../../componentes/PubliInfo/PubliInfo";

function PubliPerson(){

    return(
        <SectionGlobal>
            <SectionLeft>
                <DivLeftA>
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

            </SectionRight>
        </SectionGlobal>
    )
}

export default PubliPerson
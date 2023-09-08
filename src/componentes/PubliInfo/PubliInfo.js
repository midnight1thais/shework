import { DivIcon, DivInfo, DivLeftA, DivRightA, DivTextA, HeaderInfo, IconProfile, SectionInfo, SubTextLeft, TextInfo, TextLeft } from "./style";
import PubliIconProfile from '../../assets/PubliIconProfile.svg'

function PubliInfo(){

    return(
        <>
        <SectionInfo>
            <HeaderInfo>
                <DivIcon>
                    <IconProfile src={PubliIconProfile} alt=""/>
                </DivIcon>
                <TextInfo>Informações Pessoais</TextInfo>
            </HeaderInfo>
            <DivInfo>
                <DivLeftA>
                    <DivTextA>
                        <TextLeft>
                            Data de Nascimento
                        </TextLeft>
                        <SubTextLeft>
                            27 de agosto, 1999
                        </SubTextLeft>
                    </DivTextA>
                    <DivTextA>
                        <TextLeft>
                            Cidade e Estado
                        </TextLeft>
                        <SubTextLeft>
                            São Leopoldo, RS
                        </SubTextLeft>
                    </DivTextA>
                </DivLeftA>
                <DivRightA>
                    <DivTextA>
                        <TextLeft>
                            Data de Nascimento
                        </TextLeft>
                        <SubTextLeft>
                            27 de agosto, 1999
                        </SubTextLeft>
                    </DivTextA>
                    <DivTextA>
                        <TextLeft>
                            Cidade e Estado
                        </TextLeft>
                        <SubTextLeft>
                            São Leopoldo, RS
                        </SubTextLeft>
                    </DivTextA>
                </DivRightA>
            </DivInfo>

        </SectionInfo>
        
        </>
    )
}

export default PubliInfo
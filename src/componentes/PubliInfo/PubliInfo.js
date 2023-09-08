import { DivIcon, DivInfo, DivLeftA, DivRightA, HeaderInfo, IconProfile, SectionInfo, TextInfo } from "./style";
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
                    
                </DivLeftA>
                <DivRightA>
                    right
                </DivRightA>
            </DivInfo>

        </SectionInfo>
        
        </>
    )
}

export default PubliInfo
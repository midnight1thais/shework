import { DivIcon, HeaderCourse, IconProfile, SectionCourse } from "./style"
import IconCourse from '../../assets/IconCourse'


function PubliCourse(){

    return(
        <>
        <SectionCourse>
            <HeaderCourse>
                <DivIcon>
                    <IconProfile src={IconCourse} alt=''/>
                </DivIcon>
                <TextInfo>Informações Pessoais</TextInfo>
            </HeaderCourse>
            <DivCourse>
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
            </DivCourse>
        </SectionCourse>
        </>
    )
}

export default PubliCourse 
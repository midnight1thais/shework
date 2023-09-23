import { DivIcon, DivInfo, DivLeftA, DivRightA, DivTextA, HeaderInfo, IconProfile, SectionInfo, SubTextLeft, TextInfo, TextLeft } from "./style";
import JobInfoIcon from '../../assets/JobInfoIcon.svg'

function JobInfo () { 

    return(
        <>
        <SectionInfo>
            <HeaderInfo>
                <DivIcon>
                    <IconProfile src={JobInfoIcon} alt=""/>
                </DivIcon>
                <TextInfo>Detalhes da Vaga</TextInfo>
            </HeaderInfo>
            <DivInfo>
                <DivLeftA>
                    <DivTextA>
                        <TextLeft>
                            Tipo de vaga
                        </TextLeft>
                        <SubTextLeft>
                            Hibrido
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
                            Média Salarial da Vaga
                        </TextLeft>
                        <SubTextLeft>
                            2.000 
                        </SubTextLeft>
                    </DivTextA>
                    <DivTextA>
                        <TextLeft>
                            Nível de Experiência
                        </TextLeft>
                        <SubTextLeft>
                            Estágio
                        </SubTextLeft>
                    </DivTextA>
                </DivRightA>
                <DivRightA>
                    <DivTextA>
                        <TextLeft>
                            Média Salarial da Vaga
                        </TextLeft>
                        <SubTextLeft>
                            2.000 
                        </SubTextLeft>
                    </DivTextA>
                    <DivTextA>
                        <TextLeft>
                            Nível de Experiência
                        </TextLeft>
                        <SubTextLeft>
                            Estágio
                        </SubTextLeft>
                    </DivTextA>
                </DivRightA>
            </DivInfo>

        </SectionInfo>
        
        </>
    )
}

export default JobInfo
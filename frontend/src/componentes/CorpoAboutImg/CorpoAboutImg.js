import { ContainerAboutLeft, ContainerAboutRight, ContainerImgs, ContainerText, DivLeft, DivRight1, DivRight2, IconPlus, TextRight } from "./style";
import Plus from '../../assets/CorpoPlusIcon.svg'

function CorpoAboutImg(){

    return(
        <>
        <ContainerText>
            <TextRight> Sobre Nós</TextRight>
        </ContainerText>
        <ContainerImgs>
            <ContainerAboutLeft>
            <DivLeft>
                    <IconPlus src={Plus} alt=""/>
            </DivLeft>
            </ContainerAboutLeft>
            <ContainerAboutRight>
                <DivRight1>
                    <IconPlus src={Plus} alt=""/>
                </DivRight1>
                <DivRight2>
                    <IconPlus src={Plus} alt=""/>
                </DivRight2>
            </ContainerAboutRight>
        </ContainerImgs>
        </>
    )
}

export default CorpoAboutImg
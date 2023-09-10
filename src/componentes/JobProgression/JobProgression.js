import { ContainerRespo, ContainerText, DivIcon,HeaderInfo, IconProfile, ImgRespo, ReadRespo, SectionInfo, TextInfo, TextRespo } from "./style"
import JobRespoIcon from '../../assets/JobCourseIcon.png'
import seta from '../../assets/JobSeta.svg'
import JobImg2 from '../../assets/JobRespoIcon2.svg'

function JobProgression() {

    return(
        <>
        <SectionInfo>
            <HeaderInfo>
                <DivIcon>
                    <IconProfile src={JobRespoIcon} alt=""/>
                </DivIcon>
                <TextInfo>Possível Progressão</TextInfo>
            </HeaderInfo>
            <ContainerRespo>
                <ImgRespo src={JobImg2} alt=""/>
                <ContainerText>
                    <TextRespo>
                        Em uma empresa, a progressão de carreira geralmente começa em um cargo de nível inicial, onde as responsabilidades são mais limitadas e focadas em tarefas específicas. À medida que se ganha experiência e se demonstra comprometimento e habilidades, surgem oportunidades para avançar. Isso pode incluir promoções para cargos de nível .
                    </TextRespo>
                    <ReadRespo>
                        Saiba Mais
                        <img src={seta} alt=""/>
                    </ReadRespo>
                    
                </ContainerText>
            </ContainerRespo>
        </SectionInfo>
        </>
    )
}

export default JobProgression
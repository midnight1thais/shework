import { ContainerRespo, ContainerText, DivIcon,HeaderInfo, IconProfile, ImgRespo, ReadRespo, SectionInfo, TextInfo, TextRespo } from "./style"
import JobRespoIcon from '../../assets/JobCourseIcon.png'
import seta from '../../assets/JobSeta.svg'
import JobImg1 from '../../assets/JobRespoIcon.svg'

function JobRespo() {

    return(
        <>
        <SectionInfo>
            <HeaderInfo>
                <DivIcon>
                    <IconProfile src={JobRespoIcon} alt=""/>
                </DivIcon>
                <TextInfo>Responsabilidades</TextInfo>
            </HeaderInfo>
            <ContainerRespo>
                <ContainerText>
                    <TextRespo>
                        Aqui você irá precisar Codificação de software , Testes de software (ex: teste de unidade, integração, sistema/funcional, aceitação/estória, carga, desempenho, vulnerabilidade, usabilidade, acessibilidade); Análise e projeto de software orientado a objetos; Levantamento e análise de requisitos funcionais e não-funcionais
                    </TextRespo>
                    <ReadRespo>
                        Saiba Mais
                        <img src={seta} alt=""/>
                    </ReadRespo>
                    
                </ContainerText>
                <ImgRespo src={JobImg1} alt=""/>
            </ContainerRespo>
        </SectionInfo>
        </>
    )
}

export default JobRespo
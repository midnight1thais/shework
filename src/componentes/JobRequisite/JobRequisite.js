import { DivContainer, DivIcon, DivRe, HeaderInfo, IconProfile, SectionInfo, SubRe, TextInfo, TitleRe } from "./style"
import JobRequisiteIcon from '../../assets/PubliCourseIcon.svg'

function JobRequisite() {

    return(
        <>
        <SectionInfo>
            <HeaderInfo>
                <DivIcon>
                    <IconProfile src={JobRequisiteIcon} alt=""/>
                </DivIcon>
                <TextInfo>Requisitos</TextInfo>
            </HeaderInfo>
            <DivContainer>
                <DivRe>
                    <TitleRe>OBRIGATÓRIOS</TitleRe>
                    <SubRe>Domínio em desenvolvimento C/C++</SubRe>
                    <SubRe> Foco em resultados e comprometimento com qualidade e datas de entrega;</SubRe>
                    <SubRe>Formação ou experiência comprovada em ciência da computação, engenharia da computação, análise de sistemas, ou desenvolvimento de jogos;</SubRe>
                    <SubRe>Boas habilidades de comunicação (oral e escrita);</SubRe>
                    <SubRe>Esforço para atingir os objetivos, </SubRe>
                    
                </DivRe>
                <DivRe>
                    <TitleRe>DESEJÁVEIS</TitleRe>
                    <SubRe>Codificação de software ,</SubRe>
                    <SubRe>Testes de software (ex: teste de unidade, integração, sistema/funcional, aceitação/estória, carga, desempenho, vulnerabilidade, usabilidade, acessibilidade);</SubRe>
                    <SubRe>Análise e projeto de software orientado a objetos;</SubRe>
                    <SubRe>Levantamento e análise de requisitos funcionais e não-funcionais, incluindo requisitos de acessibilidade; </SubRe>
                </DivRe>
            </DivContainer>
        </SectionInfo>
        </>
    )
}

export default JobRequisite
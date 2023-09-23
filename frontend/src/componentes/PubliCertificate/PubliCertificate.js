import PubliCertificateCard from "../PubliCertificateCard/PubliCertificateCard";
import { DivCourse, DivIcon, HeaderCourse, IconProfile, SectionCourse, TextCourse } from "./style";
import PubliCertificateIcon from '../../assets/PubliCertificateIcon.svg'

function PubliCertificate() {

    const divs = [
        {title:"Nome do Certificado"},
        {title:"Nome do Certificado"},
        {title:"Nome do Certificado"},
        {title:"Nome do Certificado"},
        {title:"Nome do Certificado"},
        {title:"Nome do Certificado"},
        {title:"Nome do Certificado"},
        {title:"Nome do Certificado"},
        {title:"Nome do Certificado"},
        {title:"Nome do Certificado"},
        {title:"Nome do Certificado"},
        {title:"Nome do Certificado"},
        // Add more items as needed
      ];
    return(
        <>
        <SectionCourse>
            <HeaderCourse>
                <DivIcon>
                    <IconProfile src={PubliCertificateIcon} alt=""/>
                </DivIcon>
                <TextCourse>Certificados Acadêmicos</TextCourse>
            </HeaderCourse>
            <DivCourse>
            {divs.map((card) => (
                <PubliCertificateCard
                key={card}
                title={card.title}
                isVisible={true}
            />
            ))}
            </DivCourse>

        </SectionCourse>
        
        </>
    )
}

export default PubliCertificate
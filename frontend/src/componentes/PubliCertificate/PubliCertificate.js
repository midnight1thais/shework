import PubliCertificateCard from "../PubliCertificateCard/PubliCertificateCard";
import { DivCourse, DivIcon, HeaderCourse, IconProfile, SectionCourse, TextCourse } from "./style";
import PubliCertificateIcon from '../../assets/PubliCertificateIcon.svg'
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PubliCertificate({idPubliPerson}) {
    const [certificados, setCertificados] = useState([]);
    
    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/certificados/` + idPubliPerson); 
                setCertificados(response.data.data);
                console.log(response.data.data)
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da publi:', error);
            }
        }

        fetchPublis();
    }, [idPubliPerson]);
    

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
            {certificados.map((certificado) => {
                return (
                    <>
                    <a href={certificado.link} rel="noreferrer" target="_blank"><PubliCertificateCard
                        key={certificado}
                        title={certificado.nome}
                        isVisible={true}
                    /></a>
                    </>
                )
            })}

            </DivCourse>

        </SectionCourse>
        
        </>
    )
}

export default PubliCertificate
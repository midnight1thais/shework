import PubliCertificateCard from "../PubliCertificateCard/PubliCertificateCard";
import { DivCourse, DivIcon, HeaderCourse, IconProfile, SectionCourse, TextCourse } from "./style";
import PubliCertificateIcon from '../../assets/PubliCertificateIcon.svg'
import { api } from "../../services/api";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PubliCertificate() {

    const [divs, setDivs] = useState([]);
    const param = useParams();
    const publiId = param.id_publiEmpresa;
    
    useEffect(() => {
        async function fetchPublis() {
            try {
                console.log('55:::', )
                const response = await api.get(`/certificados/${window.location.pathname.split('/').pop()}`); 
                setDivs([...divs, response.data.data]);
                console.log('11:::', response.data.data)
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da publi:', error);
            }
        }

        fetchPublis();
    }, []);
    
    
    // [
    //     {title:"Nome do Certificado"},
    //     {title:"Nome do Certificado"},
    //     {title:"Nome do Certificado"},
    //     {title:"Nome do Certificado"},
    //     {title:"Nome do Certificado"},
    //     {title:"Nome do Certificado"},
    //     {title:"Nome do Certificado"},
    //     {title:"Nome do Certificado"},
    //     {title:"Nome do Certificado"},
    //     {title:"Nome do Certificado"},
    //     {title:"Nome do Certificado"},
    //     {title:"Nome do Certificado"},
    //     // Add more items as needed
    //   ];
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
            {divs[0].map((card) => (
                <a href={card.link} target="_blank"><PubliCertificateCard
                key={card}
                title={card.nome}
                isVisible={true}
            /></a>
            ))}
            </DivCourse>

        </SectionCourse>
        
        </>
    )
}

export default PubliCertificate
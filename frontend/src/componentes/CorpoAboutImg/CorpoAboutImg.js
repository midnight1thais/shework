import { ContainerAboutLeft, ContainerAboutRight, ContainerImgs, ContainerText, DivLeft, DivRight1, DivRight2, IconPlus, TextRight } from "./style";
import Plus from '../../assets/CorpoPlusIcon.svg'
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CorpoAboutImg(){

    const images = 'http://localhost:8000/uploads/'
    const param = useParams()
    const publiId = parseInt(param.id_publiEmpresa, 10)

    const [publiImg, setPubliImg] = useState('');

    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/company/information/img_company/`); 
                setPubliImg(response.data[0]); 

                console.log('------- response.data :', response.data[0]);
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da publi:', error);
            }
        }

        fetchPublis();
    }, []);



    return(
        <>
        <ContainerText>
            <TextRight> Sobre Nós</TextRight>
        </ContainerText>
        <ContainerImgs>
        <img></img>
            {/* <ContainerAboutLeft>
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
            </ContainerAboutRight> */}
        </ContainerImgs>
        </>
    )
}

export default CorpoAboutImg
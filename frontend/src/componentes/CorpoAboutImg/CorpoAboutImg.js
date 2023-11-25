import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ContainerImgs, ContainerText, TextRight } from "./style";

function CorpoAboutImg({ idCorporation }) {
    const images = 'http://localhost:3010/uploads/'
    const [publiImg, setPubliImg] = useState([]);

    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/company/informations/` + idCorporation);
                setPubliImg(response.data);
            } catch (error) {
                console.error('Erro ao recuperar as informações da publi:', error);
            }
        }

        fetchPublis();
    }, [idCorporation]);

    return (
        <>
            <ContainerText>
                <TextRight> Sobre Nós</TextRight>
            </ContainerText>
            <ContainerImgs>
                {publiImg && publiImg.length > 0 && publiImg.map((item) => (
                    <div key={item.id}>
                        {item.img && <img src={images + item.img} alt="oi" />}
                    </div>
                ))}
            </ContainerImgs>
        </>
    )
}

export default CorpoAboutImg;

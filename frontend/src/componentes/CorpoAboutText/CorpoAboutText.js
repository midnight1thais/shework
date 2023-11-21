import { useEffect, useState } from 'react';
import seta from '../../assets/JobSeta.svg'
import { api } from '../../services/api';
import { ButtonLeft, ButtonRight, DivLeft, DivRight, SubLeft, SubRight, TitleLeft, TitleRight } from './style'


function CorpoAboutText({idCorporation}){

    const [texts, setTexts] = useState([]);
    
    
    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/company/informations/` + idCorporation); 
                setTexts(response.data);
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da publi:', error);
            }
        }

        fetchPublis();
    }, [idCorporation]);

    return(
        <>
        <DivLeft>

            <TitleLeft>
                Quem somos
            </TitleLeft>
            {texts.map((textos) => {
                return (
                    <SubLeft>
                        {textos.somos_descricao}
                    </SubLeft>
                    )
            
            })}
            <ButtonLeft>
                Saiba Mais
                <img src={seta} alt=''/>
            </ButtonLeft>
        </DivLeft>
        <DivRight>
            <TitleRight>
                O que fazemos
            </TitleRight>
            {texts.map((textos) => {
                    return (
                <SubRight>
                 {textos.fazemos_descricao}
                </SubRight>
                )
            
            })}
            <ButtonRight>
                Saiba Mais
                <img src={seta} alt=''/>
            </ButtonRight>
        
        </DivRight>
    
        </>
    )
}

export default CorpoAboutText
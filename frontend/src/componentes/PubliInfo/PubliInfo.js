import { DivIcon, DivInfo, DivLeftA, DivRightA, DivTextA, HeaderInfo, IconProfile, SectionInfo, SubTextLeft, TextInfo, TextLeft } from "./style";
import PubliIconProfile from '../../assets/PubliIconProfile.svg'
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

function PubliInfo({idPubliPerson}){

    const [informacoes, setInfoPerson] = useState([]);
    
    useEffect(() => {
        async function fetchPublis() {
            try {
                const response = await api.get(`/publiperson/` + idPubliPerson); 
                setInfoPerson(response.data.data);
                console.log("Informações da pessoa", response.data.data)
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da publi:', error);
            }
        }

        fetchPublis();
    }, [idPubliPerson]);

    console.log("as informações", informacoes)

    return(
        <>
        <SectionInfo>
            <HeaderInfo>
                <DivIcon>
                    <IconProfile src={PubliIconProfile} alt=""/>
                </DivIcon>
                <TextInfo>Informações Pessoais</TextInfo>
            </HeaderInfo>
            {informacoes.map((infoPerson) => {
                const formattedDate = format(new Date(infoPerson.dt_nascimento), 'dd/MM/yyyy', { locale: ptBR });
                return (
            <DivInfo>
                <DivLeftA>
                    <DivTextA>
                        <TextLeft>
                            Data de Nascimento
                        </TextLeft>
                        <SubTextLeft>
                            {formattedDate}
                        </SubTextLeft>
                            
                    </DivTextA>
                    <DivTextA>
                        <TextLeft>
                            Cidade e Estado
                        </TextLeft>
                        <SubTextLeft>
                            {infoPerson.cidade_estado}
                        </SubTextLeft>
                    </DivTextA>
                </DivLeftA>
                <DivRightA>
                    <DivTextA>
                        <TextLeft>
                            Email
                        </TextLeft>
                        <SubTextLeft>
                            {infoPerson.email}
                        </SubTextLeft>
                    </DivTextA>
                    <DivTextA>
                        <TextLeft>
                            Linkedlin
                        </TextLeft>
                        <SubTextLeft>
                            {infoPerson.linkedin}
                        </SubTextLeft>
                    </DivTextA>
                </DivRightA>
                <DivRightA>
                    <DivTextA>
                        <TextLeft>
                            Area Interesse
                        </TextLeft>
                        <SubTextLeft>
                            {infoPerson.area_interesse}
                        </SubTextLeft>
                    </DivTextA>
                    <DivTextA>
                        <TextLeft>
                            Descricao
                        </TextLeft>
                        <SubTextLeft>
                            {infoPerson.descricao}
                        </SubTextLeft>
                    </DivTextA>
                </DivRightA>
            </DivInfo>
                    )
                })}

        </SectionInfo>
        
        </>
    )
}

export default PubliInfo
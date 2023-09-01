import React, { useState } from 'react';
import { AddIcon, AddIconButton, AddThings, AddTitle, BodyBack, ContainerAdd, ContainerBottom, ContainerFooter, ContainerGlobalTop, ContainerLeft, ContainerRight, Input, Label, Main, Popup, SubTitle, TitleGlobal} from "./style";
import AddIconImg from '../../assets/plusIcon.svg'
import CreateAddItem from '../../componentes/CreateAddItem/CreateAddItem';

function CreatePubli() {

    const [competencias, setCompetencias] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
      };
    
      const closePopup = () => {
        setShowPopup(false);
      };

      const adicionarCompetencia = (competencia) => {
        setCompetencias([...competencias, competencia]);
        closePopup(); // Fechar o pop-up após adicionar
      };
    return(
        <>
        <BodyBack>
            <Main>
                <TitleGlobal> Publicação </TitleGlobal>
                <ContainerGlobalTop>
                    <ContainerRight>
                        <SubTitle>Informações Pessoais</SubTitle>
                        <Label>Nome
                            <Input type="text" />
                        </Label>
                        <Label>Data de Nascimento
                             <Input type="text" />
                        </Label>
                        <Label>Cidade e Estado
                             <Input type="text" />
                        </Label>
                        <Label>Email
                             <Input type="text" />
                        </Label>
                        <Label>Linkedin
                             <Input type="text" />
                        </Label>
                        <Label>Nacionalidade
                             <Input type="text" />
                        </Label>
                    </ContainerRight>
                    <ContainerLeft>
                        <SubTitle>Competências Técnicas</SubTitle>
                        <AddThings>
                            <AddTitle>Adicionar Competência</AddTitle>
                            <AddIconButton onClick={openPopup}><AddIcon src={AddIconImg} alt=""/></AddIconButton>
                            {showPopup && (
                                <Popup>
                                {/* Conteúdo do pop-up, como campos para adicionar competência */}
                                <button onClick={closePopup}>Cancelar</button>
                                <button onClick={() => adicionarCompetencia('Nova Competência')}>Confirmar</button>
                                </Popup>
                            )}
                             <ContainerAdd>
                             {competencias.map((competencia, index) => (
                             <CreateAddItem key={index} descricao={competencia} />
                            ))}
                            </ContainerAdd>
                        </AddThings>
                    </ContainerLeft>
                </ContainerGlobalTop>
                <ContainerBottom>

                </ContainerBottom>
                <ContainerFooter>

                </ContainerFooter>
            </Main>
        </BodyBack>
        </>
    )
}

export default CreatePubli
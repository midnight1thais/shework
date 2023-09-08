import React, { useState } from 'react';
import { AddIcon, AddIconButton, AddThings, AddTitle, BodyBack, ButtonBack, ButtonForward, ContainerAdd, ContainerBottom, ContainerFooter, ContainerGlobalTop, ContainerLeft, ContainerRight, IconBack, Input, Label, Main, SubTitle, SubTitleLeft, SubTitleLeft2, TitleGlobal} from "./style";

import AddIconImg from '../../assets/plusIcon.svg'
import IconButtonBack from '../../assets/IconButtonBack.svg'
import CreateModal from '../../componentes/CreateModal/CreateModal';


function CreatePubli() {

    const [openModal, setOpenModal] = useState(false)

    const [competencias, setCompetencias] = useState([]);
    const [experiencias, setExperiencias] = useState([]);
    const [linguas, setLinguas] = useState([]);

    const handleAddItem = (item, tipoLista) => {
        switch (tipoLista) {
            case "competencias":
                setCompetencias([...competencias, item]);
                console.log(item)
                break;
            case "experiencias":
                setExperiencias([...experiencias, item]);
                break;
            case "linguas":
                setLinguas([...linguas, item]);
                break;
            default:
                break;
        }
        setOpenModal(false);
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
                        <SubTitleLeft>Competências</SubTitleLeft>
                        <AddThings >
                            <AddTitle>Adicionar Competência</AddTitle>
                            <AddIconButton onClick={() => setOpenModal(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                            <CreateModal  
                            isOpen={openModal}
                            setModalOpen={() => setOpenModal(!openModal)}
                            addCurso={(curso, tipoLista) => handleAddItem(curso, tipoLista)}
                            tipoLista="competencias"
                            />
                        </AddThings>
                        
                        <ContainerAdd>
                        <ul>
                            {competencias.map((curso, index) => (
                            <li key={index}>{curso}</li>
                            ))}
                        </ul>
                        </ContainerAdd>


                        <SubTitleLeft2>Experiência</SubTitleLeft2>
                        <AddThings >
                            <AddTitle>Adicionar Experiência</AddTitle>
                            <AddIconButton onClick={() => setOpenModal(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                            <CreateModal 
                            isOpen={openModal}
                            setModalOpen={() => setOpenModal(!openModal)}
                            addCurso={(curso, tipoLista) => handleAddItem(curso, tipoLista)}
                            tipoLista="experiencias"
                            />
                        </AddThings>
                        
                        <ContainerAdd>
                        <ul>
                            {experiencias.map((curso, index) => (
                            <li key={index}>{curso}</li>
                            ))}
                        </ul>
                        </ContainerAdd>

                        <SubTitleLeft2>Linguas</SubTitleLeft2>
                        <AddThings >
                            <AddTitle>Adicionar Linguas</AddTitle>
                            <AddIconButton onClick={() => setOpenModal(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                            <CreateModal
                            isOpen={openModal}
                            setModalOpen={() => setOpenModal(!openModal)}
                            addCurso={(curso, tipoLista) => handleAddItem(curso, tipoLista)}
                            tipoLista="linguas"
                            />
                        </AddThings>
                        
                        <ContainerAdd>
                        <ul>
                            {linguas.map((curso, index) => (
                            <li key={index}>{curso}</li>
                            ))}
                        </ul>
                        </ContainerAdd>
                    </ContainerLeft>
                </ContainerGlobalTop>
                <ContainerBottom>
                        <SubTitleLeft>Competências Técnicas</SubTitleLeft>
                        <AddThings >
                            <AddTitle>Adicionar Competência</AddTitle>
                            <AddIconButton onClick={() => setOpenModal(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                            <CreateModal 
                            isOpen={openModal}
                            setModalOpen={() => setOpenModal(!openModal)}
                            addCurso={(curso, tipoLista) => handleAddItem(curso, tipoLista)}
                            tipoLista="competencias"
                            />
                        </AddThings>
                        
                        <ContainerAdd>
                        <ul>
                            {competencias.map((curso, index) => (
                            <li key={index}>{curso}</li>
                            ))}
                        </ul>
                        </ContainerAdd>
                </ContainerBottom>
                <ContainerFooter>
                    <ButtonBack><IconBack src={IconButtonBack}/></ButtonBack>
                    <ButtonForward> Avançar </ButtonForward>
                    <div></div>
                </ContainerFooter>
            </Main>
        </BodyBack>
        </>
    )
}

export default CreatePubli
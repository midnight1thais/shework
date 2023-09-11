import React, { useState } from 'react';
import { AddIcon, AddIconButton, AddThings, AddThingsRequisite, AddTitle, BodyBack, ButtonBack, ButtonForward, ContainerAdd, ContainerChange, ContainerFooter, ContainerGlobalTop, ContainerLeft, ContainerPDF, ContainerProgression, ContainerRight, IconBack, Input, Label, Main, SubTitle, SubTitleLeft, SubTitleLeft2, TitleGlobal} from "./style";

import AddIconImg from '../../assets/plusIcon.svg'
import IconButtonBack from '../../assets/IconButtonBack.svg'
import CreateModal from '../../componentes/CreateModal/CreateModal';
import { Link } from 'react-router-dom';


function CreateJob() {

    const [openModal, setOpenModal] = useState(false);

    const [obrigatorio, setObrigatorio] = useState([]);
    const [desejavel, setDesejavel] = useState([]);
    const [responsabilities, setresponsabilities] = useState([]);
    const [progression, setProgression] = useState([]);
    const [job, setJob] = useState([]);

    const handleAddItem = (item, tipoLista) => {
        if (tipoLista === "obrigatorio") {
            setObrigatorio([...obrigatorio, item]);
            
        } else if (tipoLista === "desejavel") {
            setDesejavel([...desejavel, item]);
            
        } else if (tipoLista === "responsabilities") {
            setresponsabilities([...responsabilities, item]);
        }
         else if (tipoLista === "progression") {
            setProgression([...progression, item]);
        }
        else if (tipoLista === "job") {
            setJob([...job, item]);
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
                        <SubTitle>Detalhes da Vaga</SubTitle>
                        <Label>Tipo de Vaga
                            <Input type="text" />
                        </Label>
                        <Label>Data de anuncio
                             <Input type="text" />
                        </Label>
                        <Label>Cidade e Estado
                             <Input type="text" />
                        </Label>
                        <Label>Media Salarial da Vaga
                             <Input type="text" />
                        </Label>
                        <Label>Nível de Experiencia
                             <Input type="text" />
                        </Label>
                        <Label>Área de Atuação
                             <Input type="text" />
                        </Label>
                        <ContainerProgression>
                            <SubTitleLeft>Possivel Progressão</SubTitleLeft>
                            <AddThings >
                                <AddTitle>Adicionar Possivel Progressão</AddTitle>
                                <AddIconButton  onClick={() => setOpenModal(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                                <CreateModal  
                                isOpen={openModal}
                                setModalOpen={() => setOpenModal(!openModal)}
                                tipoLista="progression"
                                addCurso={(curso, tipoLista) => handleAddItem(curso, tipoLista)}
                                />
                            </AddThings>
                            
                            <ContainerAdd>
                            <ul>
                                {progression.map((curso, index) => (
                                <li key={index}>{curso}</li>
                                ))}
                            </ul>
                            </ContainerAdd>
                        </ContainerProgression>
                        <ContainerProgression>
                            <AddThings >
                                    <AddTitle>Trocar imagem </AddTitle>
                                    <AddIconButton  onClick={() => setOpenModal(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                                    
                            </AddThings>
                            <ContainerChange>

                            </ContainerChange>
                        </ContainerProgression>
                    </ContainerRight>
                    <ContainerLeft>
                        <SubTitleLeft>Requisitos</SubTitleLeft>
                        <AddThings >
                            <AddTitle>Adicionar Requisitos Obrigatórios</AddTitle>
                            
                            <AddIconButton  onClick={() => setOpenModal(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                            <CreateModal  
                            isOpen={openModal}
                            setModalOpen={() => setOpenModal(!openModal)}
                            tipoLista="obrigatorio"
                            addCurso={(curso, tipoLista) => handleAddItem(curso, tipoLista)}
                            />
                        </AddThings>
                        
                        <ContainerAdd>
                        <ul>
                            {obrigatorio.map((curso, index) => (
                            <li key={index}>{curso}</li>
                            ))}
                        </ul>
                        </ContainerAdd>

                        <AddThingsRequisite>
                            <AddTitle>Adicionar Requisitos Desejaveis</AddTitle>
                            <AddIconButton onClick={() => setOpenModal(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                            <CreateModal 
                            isOpen={openModal}
                            setModalOpen={() => setOpenModal(!openModal)}
                            tipoLista="desejavel"
                            addCurso={(curso, tipoLista) => handleAddItem(curso, tipoLista)}
                            />
                        </AddThingsRequisite>
                        
                        <ContainerAdd >
                        <ul>
                            {desejavel.map((curso, index) => (
                            <li key={index}>{curso}</li>
                            ))}
                        </ul>
                        </ContainerAdd>                 
                        <SubTitleLeft2>Responsabilidades</SubTitleLeft2>
                        <AddThings >
                            <AddTitle>Adicionar Responsabilidades</AddTitle>
                            <AddIconButton onClick={() => setOpenModal(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                            <CreateModal
                            isOpen={openModal}
                            setModalOpen={() => setOpenModal(!openModal)}
                            addCurso={(curso, tipoLista) => handleAddItem(curso, tipoLista)}
                            tipoLista="responsabilities"
                            />
                        </AddThings>
                        
                        <ContainerAdd>
                        <ul>
                            {responsabilities.map((curso, index) => (
                            <li key={index}>{curso}</li>
                            ))}
                        </ul>
                        </ContainerAdd>
                        <ContainerProgression>
                            <AddThings >
                                    <AddTitle>Trocar imagem </AddTitle>
                                    <AddIconButton  onClick={() => setOpenModal(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                                    
                            </AddThings>
                            <ContainerChange>

                            </ContainerChange>
                        </ContainerProgression>
                        <ContainerPDF>
                            <SubTitleLeft2>Adicionar Projetos Relacionados a Vaga</SubTitleLeft2>
                            <AddThings >
                                <AddTitle>Anexe arquivos PDF sobre os Projetos</AddTitle>
                                <AddIconButton onClick={() => setOpenModal(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                                <CreateModal
                                isOpen={openModal}
                                setModalOpen={() => setOpenModal(!openModal)}
                                addCurso={(curso, tipoLista) => handleAddItem(curso, tipoLista)}
                                tipoLista="job"
                                />
                            </AddThings>
                            
                            <ContainerAdd>
                            <ul>
                                {job.map((curso, index) => (
                                <li key={index}>{curso}</li>
                                ))}
                            </ul>
                            </ContainerAdd>
                        </ContainerPDF>
                    </ContainerLeft>
                </ContainerGlobalTop>
               
                <ContainerFooter>
                    <ButtonBack><Link to='/homeRegister'><IconBack src={IconButtonBack}/></Link></ButtonBack>
                    <ButtonForward> Avançar </ButtonForward>
                    <div></div>
                </ContainerFooter>
            </Main>
        </BodyBack>
        </>
    )
}

export default CreateJob
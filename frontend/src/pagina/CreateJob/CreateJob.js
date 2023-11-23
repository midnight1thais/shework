import React, { useState } from 'react';
import { AddIcon, AddIconButton, AddThings, AddThingsRequisite, AddTitle, BodyBack, ButtonBack, ButtonForward, ContainerAdd, ContainerChange, ContainerFooter, ContainerGlobalTop, ContainerLeft, ContainerPDF, ContainerProgression, ContainerRight, IconBack, Input, Label, Main, SubTitle, SubTitleLeft, SubTitleLeft2, TitleGlobal} from "./style";

import AddIconImg from '../../assets/plusIcon.svg'
import IconButtonBack from '../../assets/IconButtonBack.svg'
import CreateModal from '../../componentes/CreateModal/CreateModal';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api } from '../../services/api';
import { ContainerTop, TitleDes } from '../../componentes/CreateModal/style';


function CreateJob() {
    // do modal (pop-up)
    const [openModalProgressao, setOpenModalProgressao] = useState(false);
    const [openModalRequisitosOB, setOpenModalRequisitosOB] = useState(false);
    const [openModalRequisitosDJ, setOpenModalRequisitosDJ] = useState(false);
    const [openModalResponsabilidades, setOpenModalResponsabilidades] = useState(false);
    const [openModalProjetos, setOpenModalProjetos] = useState(false);

    //geral
    const [item, setItem] = useState();
    const codPublicacao = localStorage.getItem("@Auth:publiCompany_id");
    const navigate = useNavigate();

    // da vaga
    const [tipo_vaga, setTipoVaga] = useState("");
    const [dt_anuncio, setAnuncio] = useState("");
    const [cidade_estado, setCidadeEstado] = useState("");
    const [media_salarial, setMediaSalarial] = useState("");
    const [nivel_conhecimento, setConhecimento] = useState("");
    const [escolhaExperiencia, setEscolhaExperiencia] = useState('')
    const [area_atuacao, setAreaAtuacao] = useState("");
    const [nome_vaga, setNomeVaga] = useState("");
    
    // da progressao
    const [descricaoProgressao, setDescricaoProgressao] = useState("");

    // dos requisitos obrigatórios
    const [descricaoRequisitosOB, setDescricaoRequisitosOB] = useState("");

    // dos requisitos desejaveis
    const [descricaoRequisitosDJ, setDescricaoRequisitosDJ] = useState("");

    // das responsabilidades
    const [descricaoResponsabilidades, setDescricaoResponsabilidades] = useState("");

    // dos projetos
    const [nomeProjeto, setNomeProjeto] = useState("");
    const [link_projeto, setLinkProjeto] = useState("");
    const [nomeProjetos, setNomeProjetos] = useState([]); //array  
    const [link_projetos, setLinkProjetos] = useState([]); //array  


    const addProgressao = () => {
        setDescricaoProgressao(descricaoProgressao);
        console.log("essa é a descricao da progressao", descricaoProgressao)
    }

    const addRequisitosOB = () => {
        setDescricaoRequisitosOB(descricaoRequisitosOB);
        console.log("essa é a descricao da descricaoRequisitosOB", descricaoRequisitosOB)
    }

    const addRequisitosDJ = () => {
        setDescricaoRequisitosDJ(descricaoRequisitosDJ);
        console.log("essa é a descricao da descricaoRequisitosDJ", descricaoRequisitosDJ)
    }

    const addResponsabilidades = () => {
        setDescricaoResponsabilidades(descricaoResponsabilidades);
        console.log("essa é a descricao da descricaoResponsabilidades", descricaoResponsabilidades)
    }

    const addProjetos = () => {
        setLinkProjetos([...link_projetos, link_projeto]);
        setNomeProjetos([...nomeProjetos, nomeProjeto]);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (nivel_conhecimento === escolhaExperiencia) {
            alert("Por favor, escolha um nivel antes de cadastrar.");
            return;
        }

        const formVaga = {
            id_empresa_vaga: codPublicacao,
            tipo_vaga:tipo_vaga,
            dt_anuncio:dt_anuncio,
            cidade_estado:cidade_estado,
            media_salarial:media_salarial,
            nivel_conhecimento:nivel_conhecimento,
            area_atuacao:area_atuacao,
            nome_vaga:nome_vaga
          };

        
        // post das informações da pessoa
        axios.post(`${api.defaults.baseURL}/publivaga/create`, formVaga)
        .then(function (response) {
            // post da progressao
                const formProgressao = {
                    id_publicacao_vaga: response.data.data.insertId,
                    descricao: descricaoProgressao,
                };
    
                axios.post(`${api.defaults.baseURL}/publivaga/progressao/create`, formProgressao)
                .then(function (response) {
                    setItem(response.data.data)
                })
                .catch(function (error) {
                    alert("erro na progressao")
                    console.log(error)
                });

            //post dos requisitos obrigatórios
                const formRequisitosOB = {
                    id_publicacao_vaga: response.data.data.insertId,
                    descricao: descricaoRequisitosOB,
                };
    
                axios.post(`${api.defaults.baseURL}/publivaga/requisitosOB/create`, formRequisitosOB)
                .then(function (response) {
                    console.log("esse é o formRequisitos", formRequisitosOB)
                    setItem(response.data.data)
                    console.log("esse é o setItem", setItem)
                })
                .catch(function (error) {
                    alert("erro nos requisitos")
                    console.log(error)
                });

            //post dos requisitos desejaveis
            const formRequisitosDJ = {
                id_publicacao_vaga: response.data.data.insertId,
                descricao: descricaoRequisitosDJ,
            };

            axios.post(`${api.defaults.baseURL}/publivaga/requisitosDJ/create`, formRequisitosDJ)
            .then(function (response) {
                console.log("esse é o formRequisitos", formRequisitosDJ)
                setItem(response.data.data)
                console.log("esse é o setItem", setItem)
            })
            .catch(function (error) {
                alert("erro nos requisitos")
                console.log(error)
            });

            //post das responsabilidades
            const formResponsabilidades = {
                id_publicacao_vaga: response.data.data.insertId,
                descricao: descricaoResponsabilidades,
            };

            axios.post(`${api.defaults.baseURL}/publivaga/responsabilidades/create`, formResponsabilidades)
            .then(function (response) {
                console.log("esse é o formRequisitos", formResponsabilidades)
                setItem(response.data.data)
                console.log("esse é o setItem", setItem)
            })
            .catch(function (error) {
                alert("erro nos requisitos")
                console.log(error)
            });

                console.log("esse é o form", formResponsabilidades)
                console.log('esse é o insertedId', response.data.data.insertId)
            // post da certificados
            link_projetos.map((item, index) => {
                const formProjetos = {
                    id_publicacao_vaga: response.data.data.insertId,
                    projeto_link:item,
                    descricao: nomeProjetos[index],
                }
                axios.post(`${api.defaults.baseURL}/publivaga/projetos/create`, formProjetos)
                .then(function (response) {
                    setItem(response.data.data)
                })
                .catch(function (error) {
                    alert("erro no certificado")
                    console.log(error)
                });
            })
            

            // console.log(`/publiPerson/${response.data.data.insertId}`);


            setItem(response.data.data);
            alert('Vaga criada com sucesso!')
            navigate('/jobCompany/' + response.data.data.insertId);
        })
        .catch(function (error) {
            alert("erro")
            console.log(error)
        });    


};     

    return(
        <>
        <BodyBack>
            <Main>
                <TitleGlobal> Publicação </TitleGlobal>
                <ContainerGlobalTop>
                    <ContainerRight>
                        <SubTitle>Detalhes da Vaga</SubTitle>
                        <Label>Nome do Cargo
                            <Input type="text"  value={nome_vaga} onChange={(e) => setNomeVaga(e.target.value)}/>
                        </Label>
                        <Label>Tipo de Vaga
                            <Input type="text"  value={tipo_vaga} onChange={(e) => setTipoVaga(e.target.value)}/>
                        </Label>
                        <Label>Data de anuncio
                             <Input type="date" value={dt_anuncio} onChange={(e) => setAnuncio(e.target.value)} />
                        </Label>
                        <Label>Cidade e Estado
                             <Input type="text" value={cidade_estado} onChange={(e) => setCidadeEstado(e.target.value)}/>
                        </Label>
                        <Label>Media Salarial da Vaga
                             <Input type="text" value={media_salarial} onChange={(e) => setMediaSalarial(e.target.value)}/>
                        </Label>
                        <Label>Nível de Experiencia
                             <select type="text" value={nivel_conhecimento} onChange={(e) => setConhecimento(e.target.value)}>
                                    <option value={escolhaExperiencia} type='text'>Escolha Nivel de Experiencia</option>
                                    <option value="Junior" type='text'>Junior</option>
                                    <option value="Pleno" type='text'>Pleno</option>
                                    <option value="Sênior" type='text'>Sênior</option>
                             </select>
                        </Label>
                        <Label>Área de Atuação
                             <Input type="text" value={area_atuacao} onChange={(e) => setAreaAtuacao(e.target.value)}/>
                        </Label>
                        <ContainerProgression>
                            <SubTitleLeft>Possivel Progressão</SubTitleLeft>
                            <AddThings >
                                <AddTitle>Adicionar Possivel Progressão</AddTitle>
                                <AddIconButton  onClick={() => setOpenModalProgressao(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                                <CreateModal isOpen={openModalProgressao} setModalOpen={() => setOpenModalProgressao(!openModalProgressao)}>
                                    <div>
                                            <ContainerTop>
                                            <TitleDes> Adicionar Possivel Progressao </TitleDes>
                                            </ContainerTop>
                                            <Label>Descricao
                                                <Input type="text" value={descricaoProgressao} onChange={(e) => setDescricaoProgressao(e.target.value)}/>
                                            </Label>
                                    </div>
                                    <button onClick={() => addProgressao()}>Salvar</button>
                                </CreateModal>
                            </AddThings>
                            
                            <ContainerAdd>
                            <ul>
                                <li >{descricaoProgressao}</li>
                            </ul>
                            </ContainerAdd>
                        </ContainerProgression>
                        {/* <ContainerProgression>
                            <AddThings >
                                    <AddTitle>Trocar imagem </AddTitle>
                                    <AddIconButton  onClick={() => setOpenModal(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                                    
                            </AddThings>
                            <ContainerChange>

                            </ContainerChange>
                        </ContainerProgression> */}
                    </ContainerRight>
                    <ContainerLeft>
                        <SubTitleLeft>Requisitos</SubTitleLeft>
                        <AddThings >
                            <AddTitle>Adicionar Requisitos Obrigatorios</AddTitle>
                            <AddIconButton  onClick={() => setOpenModalRequisitosOB(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                            <CreateModal isOpen={openModalRequisitosOB} setModalOpen={() => setOpenModalRequisitosOB(!openModalRequisitosOB)}>
                                <div>
                                        <ContainerTop>
                                        <TitleDes> Adicionar Requisitos Obrigatórios </TitleDes>
                                        </ContainerTop>
                                        <Label>Descricao
                                            <Input type="text" value={descricaoRequisitosOB} onChange={(e) => setDescricaoRequisitosOB(e.target.value)}/>
                                        </Label>
                                </div>
                                <button onClick={() => addRequisitosOB()}>Salvar</button>
                            </CreateModal>
                        </AddThings>
                        
                        <ContainerAdd>
                        <ul>
                            <li>{descricaoRequisitosOB}</li>
                        </ul>
                        </ContainerAdd>

                        <AddThingsRequisite>
                            <AddTitle>Adicionar Requisitos Desejaveis</AddTitle>
                            <AddIconButton  onClick={() => setOpenModalRequisitosDJ(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                            <CreateModal isOpen={openModalRequisitosDJ} setModalOpen={() => setOpenModalRequisitosDJ(!openModalRequisitosDJ)}>
                                <div>
                                        <ContainerTop>
                                        <TitleDes> Adicionar Requisitos Desejaveis </TitleDes>
                                        </ContainerTop>
                                        <Label>Descricao
                                            <Input type="text" value={descricaoRequisitosDJ} onChange={(e) => setDescricaoRequisitosDJ(e.target.value)}/>
                                        </Label>
                                </div>
                                <button onClick={() => addRequisitosDJ()}>Salvar</button>
                            </CreateModal>
                        </AddThingsRequisite>
                        
                        <ContainerAdd >
                        <ul>
                            <li>{descricaoRequisitosDJ}</li>
                        </ul>
                        </ContainerAdd>                 
                        <SubTitleLeft2>Responsabilidades</SubTitleLeft2>
                        <AddThings >
                            <AddTitle>Adicionar Responsabilidades</AddTitle>
                            <AddIconButton  onClick={() => setOpenModalResponsabilidades(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                            <CreateModal isOpen={openModalResponsabilidades} setModalOpen={() => setOpenModalResponsabilidades(!openModalResponsabilidades)}>
                                <div>
                                        <ContainerTop>
                                        <TitleDes> Adicionar Responsabilidades</TitleDes>
                                        </ContainerTop>
                                        <Label>Descricao
                                            <Input type="text" value={descricaoResponsabilidades} onChange={(e) => setDescricaoResponsabilidades(e.target.value)}/>
                                        </Label>
                                </div>
                                <button onClick={() => addResponsabilidades()}>Salvar</button>
                            </CreateModal>
                        </AddThings>
                        
                        <ContainerAdd>
                        <ul>
                            <li >{descricaoResponsabilidades}</li>
                        </ul>
                        </ContainerAdd>
                        {/* <ContainerProgression>
                            <AddThings >
                                    <AddTitle>Trocar imagem </AddTitle>
                                    <AddIconButton  onClick={() => setOpenModal(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                                    
                            </AddThings>
                            <ContainerChange>

                            </ContainerChange>
                        </ContainerProgression> */}
                        <ContainerPDF>
                            <SubTitleLeft2>Adicionar Projetos Relacionados a Vaga</SubTitleLeft2>
                            <AddThings >
                                    <AddTitle>Adicionar Link para Projetos Relacionados a Vaga</AddTitle>
                                    <AddIconButton onClick={() => setOpenModalProjetos(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                                    <CreateModal isOpen={openModalProjetos} setModalOpen={() => setOpenModalProjetos(!openModalProjetos)} >
                                    <div>
                                        <ContainerTop>
                                        <TitleDes> Adicionar Projetos</TitleDes>
                                        </ContainerTop>
                                        <Label>Nome
                                            <Input type="text" value={nomeProjeto} onChange={(e) => setNomeProjeto(e.target.value)}/>
                                        </Label>
                                        <Label> Link para acesso 
                                            <Input type="text" value={link_projeto} onChange={(e) => setLinkProjeto(e.target.value)}/>
                                        </Label>
                                    </div>
                                    <button onClick={() => addProjetos()}>Salvar</button>
                                    </CreateModal>
                                </AddThings>
                                
                                <ContainerAdd>
                                    <ul>
                                        {link_projetos.map((item, index) => (
                                            <li key={index} style={{border: '1px solid gray', borderRadius: '10px', }}> {nomeProjetos[index]}</li>
                                        ))}
                                    </ul>
                                </ContainerAdd>
                        </ContainerPDF> 
                    </ContainerLeft>
                </ContainerGlobalTop>
               
                <ContainerFooter>
                    <ButtonBack><Link to='/homeRegisterCompany'><IconBack src={IconButtonBack}/></Link></ButtonBack>
                    <ButtonForward onClick={handleSubmit}>Avançar</ButtonForward>
                    <div></div>
                </ContainerFooter>
            </Main>
        </BodyBack>
        </>
    )
}

export default CreateJob
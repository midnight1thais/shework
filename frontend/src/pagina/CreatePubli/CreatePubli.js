import React, { useState } from 'react';
import { AddIcon, AddIconButton, AddThings, AddTitle, BodyBack, ButtonBack, ButtonForward, ContainerAdd, ContainerBottom, ContainerFooter, ContainerGlobalTop, ContainerLeft, ContainerRight, IconBack, Input, Label, Main, SubTitle, SubTitleLeft, SubTitleLeft2, TitleGlobal} from "./style";

import AddIconImg from '../../assets/plusIcon.svg'
import IconButtonBack from '../../assets/IconButtonBack.svg'
import CreateModal from '../../componentes/CreateModal/CreateModal';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { api } from "../../services/api";
import { ContainerMid, ContainerTop, TitleDes } from '../../componentes/CreateModal/style';


function CreatePubli() {
    // do modal (pop-up)
    const [openModal, setOpenModal] = useState(false);
    const [openModalCompetencia, setOpenModalCompetencia] = useState(false);
    const [openModalExperiencia, setOpenModalExperiencia] = useState(false);
    const [openModalLingua, setOpenModalLingua] = useState(false);
    const [openModalCertificado, setOpenModalCertificado] = useState(false);
    //geral
    const [item, setItem] = useState();

    // da pessoa
    const [nomePessoa, setNomePessoa] = useState("");
    const [dt_nascimento, setNascimento] = useState("");
    const [cidade_estado, setCidadeEstado] = useState("");
    const [email, setEmail] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [nacionalidade, setNacionalidade] = useState("");
    const [area_interesse, setAreaInteresse] = useState("");
    
    // da competência
    const [nomeCompetencia, setNomeCompetencia] = useState("");
    const [nivel_competencia, setNivelCompetencia] = useState("");

    // da experiencia 
    const [nomeExperiencia, setNomeExperiencia] = useState("");
    const [dt_inicioExperiencia, setDataInicioExperiencia] = useState("");
    const [dt_finalExperiencia, setDataFinalExperiencia] = useState("");
    const [descricaoExperiencia, setDescricaoExperiencia] = useState("");

    // da lingua
    const [nomeLingua, setNomeLingua] = useState("");
    const [nivel_lingua, setNivelLingua] = useState("");

    // da certificados
    const [nomeCertificado, setNomeCertificado] = useState("");
    const [link_certificado, setLinkCertificado] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formPessoa = {
            nome:nomePessoa,
            dt_nascimento:dt_nascimento,
            cidade_estado:cidade_estado,
            email:email,
            linkedin:linkedin,
            nacionalidade:nacionalidade,
            area_interesse:area_interesse
          };

        const formCompetencia = {
            nome:nomeCompetencia,
            nivel_conhecimento: nivel_competencia,
        };

        const formExperiencia = {
            nome:nomeExperiencia,
            dt_inicio:dt_inicioExperiencia,
            dt_final:dt_finalExperiencia,
            descricao:descricaoExperiencia
        }
        const formLinguas = {
            nome:nomeLingua,
            nivel_conhecimento: nivel_lingua,
        }
        const formCertificados = {
            nome:nomeCertificado,
            link: link_certificado,
        }
        // post das informações da pessoa
        axios.post(`${api.defaults.baseURL}/publiperson/create`, formPessoa)
        .then(function (response) {
            setItem(response.data.data)
        })
        .catch(function (error) {
            alert("erro")
        });    

        // post da competencia tecnica
        axios.post(`${api.defaults.baseURL}/competenciaTec/create`, formCompetencia)
        .then(function (response) {
            setItem(response.data.data)
        })
        .catch(function (error) {
            alert("erro")
        });

        // post da experiencia
        axios.post(`${api.defaults.baseURL}/experiencias/create`, formExperiencia)
        .then(function (response) {
            setItem(response.data.data)
        })
        .catch(function (error) {
            alert("erro")
        });
      

        // post da lingua
        axios.post(`${api.defaults.baseURL}/linguas/create`, formLinguas)
        .then(function (response) {
            setItem(response.data.data)
        })
        .catch(function (error) {
            alert("erro")
        });
        

        // post da certificados
        axios.post(`${api.defaults.baseURL}/certificados/create`, formCertificados)
        .then(function (response) {
            setItem(response.data.data)
        })
        .catch(function (error) {
            alert("erro")
        });

};    

    const fetchData = async () => {
        const response = await api.get('/posts');        
        setPostsList(response.data.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <>
        <BodyBack>
            <Main>
                <TitleGlobal> Publicação </TitleGlobal>
                <ContainerGlobalTop>
                    <ContainerRight>
                        <SubTitle>Informações Pessoais</SubTitle>
                        <Label>Nome
                            <Input type="text" value={nomePessoa} onChange={(e) => setNomePessoa(e.target.value)} />
                        </Label>
                        <Label>Data de Nascimento
                             <Input type="date"value={dt_nascimento} onChange={(e) => setNascimento(e.target.value)} />
                        </Label>
                        <Label>Cidade e Estado
                             <Input type="text" value={cidade_estado} onChange={(e) => setCidadeEstado(e.target.value)}/>
                        </Label>
                        <Label>Email
                             <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </Label>
                        <Label>Linkedin
                             <Input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)}/>
                        </Label>
                        <Label>Nacionalidade
                             <Input type="text" value={nacionalidade} onChange={(e) => setNacionalidade(e.target.value)}/>
                        </Label>
                        <Label>Area Interesse
                             <Input type="text" value={area_interesse} onChange={(e) => setAreaInteresse(e.target.value)}/>
                        </Label>
                    </ContainerRight>
                    <ContainerLeft>
                        <SubTitleLeft>Competências</SubTitleLeft>
                        <AddThings >
                            <AddTitle>Adicionar Competência</AddTitle>
                            <button onClick={() => setOpenModalCompetencia(true)}><AddIcon src={AddIconImg} alt=''/></button>
                            <CreateModal isOpen={openModalCompetencia} setModalOpen={() => setOpenModalCompetencia(!openModalCompetencia)}>
                            <div>
                                <ContainerTop>
                                <TitleDes> Adicionar Competencia </TitleDes>
                                </ContainerTop>
                                <Label>Nome
                                    <Input type="text" value={nomeCompetencia} onChange={(e) => setNomeCompetencia(e.target.value)}/>
                                </Label>
                                <Label>Nivel de Conhecimento 
                                        <Input type="text" value={nivel_competencia} onChange={(e) => setNivelCompetencia(e.target.value)}/>
                                </Label>
                            </div>
                            
                            </CreateModal>
                          
                        </AddThings>
                        
                        <ContainerAdd>
                            {/* onde fica listado as competencias */}
                        </ContainerAdd>


                        <SubTitleLeft2>Experiência</SubTitleLeft2>
                        <AddThings >
                            <AddTitle>Adicionar Experiência</AddTitle>
                            <AddIconButton onClick={() => setOpenModalExperiencia(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                            <CreateModal isOpen={openModalExperiencia} setModalOpen={() => setOpenModalExperiencia(!openModalExperiencia)}>
                            <div>
                                <ContainerTop>
                                <TitleDes> Adicionar Experiencia </TitleDes>
                                </ContainerTop>
                                <Label> Nome da Experiência
                                    <Input type="text" value={nomeExperiencia} onChange={(e) => setNomeExperiencia(e.target.value)}/>
                                </Label>
                                <ContainerMid>
                                    <Label> Data de Inicio
                                            <Input type="text" value={dt_inicioExperiencia} onChange={(e) => setDataInicioExperiencia(e.target.value)}/>
                                    </Label>
                                    <Label> Data Final
                                            <Input type="text" value={dt_finalExperiencia} onChange={(e) => setDataFinalExperiencia(e.target.value)}/>
                                    </Label>   
                                </ContainerMid>
                                <Label> Descrição da Experiência
                                        <Input type="text" value={descricaoExperiencia} onChange={(e) => setDescricaoExperiencia(e.target.value)}/>
                                </Label>
                            </div>
                            </CreateModal>
                        </AddThings>
                        
                        <ContainerAdd>
                            {/* onde fica listado as experiências */}
                        </ContainerAdd>

                        <SubTitleLeft2>Linguas</SubTitleLeft2>
                        <AddThings >
                            <AddTitle>Adicionar Linguas</AddTitle>
                            <AddIconButton onClick={() => setOpenModalLingua(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                            <CreateModal isOpen={openModalLingua} setModalOpen={() => setOpenModalLingua(!openModalLingua)} >
                            <div>
                                <ContainerTop>
                                <TitleDes> Adicionar Lingua </TitleDes>
                                </ContainerTop>
                                <Label>Nome
                                    <Input type="text" value={nomeLingua} onChange={(e) => setNomeLingua(e.target.value)}/>
                                </Label>
                                <Label>Nivel de Conhecimento 
                                    <Input type="text" value={nivel_lingua} onChange={(e) => setNivelLingua(e.target.value)}/>
                                </Label>
                            </div>
                            </CreateModal>
                        </AddThings>
                        
                        <ContainerAdd>
                            {/* onde fica listado as linguas */}
                        </ContainerAdd>
                    </ContainerLeft>
                </ContainerGlobalTop>
                <ContainerBottom>
                        <SubTitleLeft>Certificados Academicos</SubTitleLeft>
                        <AddThings >
                            <AddTitle>Adicionar Certificados</AddTitle>
                            <AddIconButton onClick={() => setOpenModalCertificado(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                            <CreateModal isOpen={openModalCertificado} setModalOpen={() => setOpenModalCertificado(!openModalCertificado)} >
                            <div>
                                <ContainerTop>
                                <TitleDes> Adicionar Certificados</TitleDes>
                                </ContainerTop>
                                <Label>Nome
                                    <Input type="text" value={nomeCertificado} onChange={(e) => setNomeCertificado(e.target.value)}/>
                                </Label>
                                <Label> Link para acesso 
                                    <Input type="text" value={link_certificado} onChange={(e) => setLinkCertificado(e.target.value)}/>
                                </Label>
                            </div>
                            </CreateModal>
                        </AddThings>
                        
                        <ContainerAdd>
                            {/* onde fica listado as linguas */}
                        </ContainerAdd>
                </ContainerBottom>
                <ContainerFooter>
                    <ButtonBack><Link to='/homeRegister'><IconBack src={IconButtonBack}/></Link></ButtonBack>
                    <Link to='/publiPerson'><ButtonForward onClick={handleSubmit}>Avançar </ButtonForward></Link>
                    <div></div>
                </ContainerFooter>
            </Main>
        </BodyBack>
        </>
    )
};

export default CreatePubli
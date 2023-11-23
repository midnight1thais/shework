import React, { useState } from 'react';
import { AddIcon, AddIconButton, AddThings, AddTitle, BodyBack, ButtonBack, ButtonForward, ContainerAdd, ContainerBottom, ContainerFooter, ContainerGlobalTop, ContainerLeft, ContainerRight, IconBack, Input, Label, Main, SubTitle, SubTitleLeft, SubTitleLeft2, TitleGlobal} from "./style";

import AddIconImg from '../../assets/plusIcon.svg'
import IconButtonBack from '../../assets/IconButtonBack.svg'
import CreateModal from '../../componentes/CreateModal/CreateModal';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { api } from "../../services/api";
import { ContainerMid, ContainerTop, TitleDes } from '../../componentes/CreateModal/style';
import { useNavigate } from 'react-router-dom';


function CreatePubli() {
    // do modal (pop-up)
    const [openModalCompetencia, setOpenModalCompetencia] = useState(false);
    const [openModalExperiencia, setOpenModalExperiencia] = useState(false);
    const [openModalLingua, setOpenModalLingua] = useState(false);
    const [openModalCertificado, setOpenModalCertificado] = useState(false);
    const [openModalCurso, setOpenModalCurso] = useState(false);
    //geral
    const [item, setItem] = useState();
    const codUsuario = localStorage.getItem("@Auth:user_id");
    const navigate = useNavigate();
    const [codUser, setCodUser] = useState("");

    // da pessoa
    const [nomePessoa, setNomePessoa] = useState("");
    const [dt_nascimento, setNascimento] = useState("");
    const [cidade_estado, setCidadeEstado] = useState("");
    const [email, setEmail] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [nacionalidade, setNacionalidade] = useState("");
    const [area_interesse, setAreaInteresse] = useState("");
    const [descricaoPessoa, setDescricaoPessoa] = useState("");
    
    // da competência
    const [nomeCompetencia, setNomeCompetencia] = useState("");
    const [nivel_competencia, setNivelCompetencia] = useState("");
    const [nomeCompetencias, setNomeCompetencias] = useState([]); //array   
    const [nivel_competencias, setNivelCompetencias] = useState([]); //array   

    // da experiencia 
    const [nomeExperiencia, setNomeExperiencia] = useState("");
    const [dt_inicioExperiencia, setDataInicioExperiencia] = useState("");
    const [dt_finalExperiencia, setDataFinalExperiencia] = useState("");
    const [descricaoExperiencia, setDescricaoExperiencia] = useState("");

    const [nomeExperiencias, setNomeExperiencias] = useState([]);  //array  
    const [dt_inicioExperiencias, setDataInicioExperiencias] = useState([]);  //array  
    const [dt_finalExperiencias, setDataFinalExperiencias] = useState([]);  //array  
    const [descricaoExperiencias, setDescricaoExperiencias] = useState([]);  //array  

    // da lingua
    const [nomeLingua, setNomeLingua] = useState("");
    const [nivel_lingua, setNivelLingua] = useState("");
    const [nomeLinguas, setNomeLinguas] = useState([]); //array  
    const [nivel_linguas, setNivelLinguas] = useState([]); //array  

    // da certificados
    const [nomeCertificado, setNomeCertificado] = useState("");
    const [link_certificado, setLinkCertificado] = useState("");
    const [nomeCertificados, setNomeCertificados] = useState([]); //array  
    const [link_certificados, setLinkCertificados] = useState([]); //array  

    // do curso
    const [nomeCurso, setNomeCurso] = useState("");
    const [dt_inicioCurso, setDataInicioCurso] = useState("");
    const [dt_finalCurso, setDataFinalCurso] = useState("");
    const [descricaoCurso, setDescricaoCurso] = useState("");

    const [nomeCursos, setNomeCursos] = useState([]);  //array  
    const [dt_inicioCursos, setDataInicioCursos] = useState([]);  //array  
    const [dt_finalCursos, setDataFinalCursos] = useState([]);  //array  
    const [descricaoCursos, setDescricaoCursos] = useState([]);  //array  

    const addCompetencias = () => {
        setNomeCompetencias([...nomeCompetencias, nomeCompetencia]);
        setNivelCompetencias([...nivel_competencias, nivel_competencia]);
    }

    const addCertificados = () => {
        setNomeCertificados([...nomeCertificados, nomeCertificado]);
        setLinkCertificados([...link_certificados, link_certificado]);
    }

    const addExperiencias = () => {
        setNomeExperiencias([...nomeExperiencias, nomeExperiencia]);
        setDataInicioExperiencias([...dt_inicioExperiencias, dt_inicioExperiencia]);
        setDataFinalExperiencias([...dt_finalExperiencias, dt_finalExperiencia]);
        setDescricaoExperiencias([...descricaoExperiencias, descricaoExperiencia]);
    }

    const addLinguas= () => {
        setNomeLinguas([...nomeLinguas, nomeLingua]);
        setNivelLinguas([...nivel_linguas, nivel_lingua]);
    }

    const addCursos = () => {
        setNomeCursos([...nomeCursos, nomeCurso]);
        setDataInicioCursos([...dt_inicioCursos, dt_inicioCurso]);
        setDataFinalCursos([...dt_finalCursos, dt_finalCurso]);
        setDescricaoCursos([...descricaoCursos, descricaoCurso]);
    }



    const handleSubmit = async (e) => {
        e.preventDefault();

        const formPessoa = {
            id_usuario: codUsuario,
            nome:nomePessoa,
            dt_nascimento:dt_nascimento,
            cidade_estado:cidade_estado,
            email:email,
            linkedin:linkedin,
            nacionalidade:nacionalidade,
            area_interesse:area_interesse,
            descricao:descricaoPessoa
          };

        
        // post das informações da pessoa
        axios.post(`${api.defaults.baseURL}/publiperson/create`, formPessoa)
        .then(function (response) {
            // post da competencia tecnica
            nomeCompetencias.map((item, index) => {
                const formCompetencia = {
                    id_publicacao_pessoa: response.data.data.insertId,
                    nome:item,
                    nivel_conhecimento: nivel_competencias[index],
                };
    
                axios.post(`${api.defaults.baseURL}/competenciaTec/create`, formCompetencia)
                .then(function (response) {
                    setItem(response.data.data)
                })
                .catch(function (error) {
                    alert("erro na competencia")
                });

            })
            // // post da certificados
            nomeCertificados.map((item, index) => {
                const formCertificados = {
                    id_publicacao_pessoa: response.data.data.insertId,
                    nome:item,
                    link: link_certificados[index],
                }
                axios.post(`${api.defaults.baseURL}/certificados/create`, formCertificados)
                .then(function (response) {
                    setItem(response.data.data)
                })
                .catch(function (error) {
                    alert("erro no certificado")
                });
            })
            // post Experiencias
            nomeExperiencias.map((item, index) => {
                const formExperiencias = {
                    id_publicacao_pessoa: response.data.data.insertId,
                    nome:item,
                    dt_inicio: dt_inicioExperiencias[index],
                    dt_final: dt_finalExperiencias[index],
                    descricao: descricaoExperiencias[index],
                }
                axios.post(`${api.defaults.baseURL}/experiencias/create`, formExperiencias)
                .then(function (response) {
                    setItem(response.data.data)
                })
                .catch(function (error) {
                    alert("erro na experiencia", error)
                });
            })
            // post Linguas
            nomeLinguas.map((item, index) => {
                const formLinguas = {
                    id_publicacao_pessoa: response.data.data.insertId,
                    nome:item,
                    nivel_conhecimento: nivel_linguas[index],
                }
                axios.post(`${api.defaults.baseURL}/linguas/create`, formLinguas)
                .then(function (response) {
                    setItem(response.data.data)
                })
                .catch(function (error) {
                    alert("erro na lingua", error)
                });
            })
            // post Cursos
            nomeCursos.map((item, index) => {
                const formCursos = {
                    id_publicacao_pessoa: response.data.data.insertId,
                    nome:item,
                    dt_inicio: dt_inicioCursos[index],
                    dt_final: dt_finalCursos[index],
                    descricao: descricaoCursos[index],
                }
                axios.post(`${api.defaults.baseURL}/cursos/create`, formCursos)
                .then(function (response) {
                    setItem(response.data.data)
                })
                .catch(function (error) {
                    alert("erro no curso", error)
                });
            })
            


            // console.log(`/publiPerson/${response.data.data.insertId}`);


            setItem(response.data.data)
            navigate('/publiPerson/' + response.data.data.insertId)
        })
        .catch(function (error) {
            alert("erro")
        });    




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
                            <Input type="text" value={nomePessoa} onChange={(e) => setNomePessoa(e.target.value)} />
                        </Label>
                        <Label>Breve Descricao sobre Você
                             <Input type="text" maxlength="72" value={descricaoPessoa} onChange={(e) => setDescricaoPessoa(e.target.value)}/>
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
                                    <button onClick={() => addCertificados()}>Salvar</button>
                                    </CreateModal>
                                </AddThings>
                                
                                <ContainerAdd>
                                    <ul>
                                        {nomeCertificados.map((item, index) => (
                                            <li key={index} style={{border: '1px solid gray', borderRadius: '10px', }}>{item} - {link_certificados[index]}</li>
                                        ))}
                                    </ul>
                                </ContainerAdd>
                        </ContainerBottom>
                    </ContainerRight>
                    <ContainerLeft>
                        <SubTitleLeft>Competências</SubTitleLeft>
                        <AddThings >
                            <AddTitle>Adicionar Competência</AddTitle>
                            
                            <button 
                                onClick={() => setOpenModalCompetencia(true)}>
                                <AddIcon src={AddIconImg} alt=''/>
                            </button>
                            
                            <CreateModal 
                                isOpen={openModalCompetencia} 
                                setModalOpen={() => setOpenModalCompetencia(!openModalCompetencia)}
                            >
                            
                            <div>
                                <ContainerTop>
                                <TitleDes> Adicionar Competencia </TitleDes>
                                </ContainerTop>
                                <Label>Nome
                                    <Input type="text" value={nomeCompetencia} onChange={(e) => setNomeCompetencia(e.target.value)}/>
                                </Label>
                                <Label>Nivel de Conhecimento 
                                        {/* <Input type="text" value={nivel_competencia} onChange={(e) => setNivelCompetencia(e.target.value)}/> */}
                                        <select value={nivel_competencia} onChange={(e) => setNivelCompetencia(e.target.value)}>
                                            <option value="Básico">Básico</option>
                                            <option value="Intermediário">Intermediário</option>
                                            <option value="Avançado">Avançado</option>
                                        </select>
                                </Label>
                            </div>
                            
                                <button onClick={() => addCompetencias()}>Salvar</button>
                            </CreateModal>
                          
                        </AddThings>
                        
                        <ContainerAdd>
                            <ul>
                                {nomeCompetencias.map((item, index) => (
                                    <li key={index} style={{border: '1px solid gray', borderRadius: '10px', }}>{item} - {nivel_competencias[index]}</li>
                                ))}
                            </ul>
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
                                            <Input type="date" value={dt_inicioExperiencia} onChange={(e) => setDataInicioExperiencia(e.target.value)}/>
                                    </Label>
                                    <Label> Data Final
                                            <Input type="date" value={dt_finalExperiencia} onChange={(e) => setDataFinalExperiencia(e.target.value)}/>
                                    </Label>   
                                </ContainerMid>
                                <Label> Descrição da Experiência
                                        <Input type="text" value={descricaoExperiencia} onChange={(e) => setDescricaoExperiencia(e.target.value)}/>
                                </Label>
                            </div>
                            <button onClick={() => addExperiencias()}>Salvar</button>
                            </CreateModal>
                        </AddThings>
                        
                        <ContainerAdd>
                            <ul>
                                {nomeExperiencias.map((item, index) => (
                                    <li key={index} style={{border: '1px solid gray', borderRadius: '10px', }}>{item} - {descricaoExperiencias[index]}</li>
                                ))}
                            </ul>
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
                                        <select value={nivel_lingua} onChange={(e) => setNivelLingua(e.target.value)}>
                                            <option value="Básico">Básico</option>
                                            <option value="Intermediário">Intermediário</option>
                                            <option value="Avançado">Avançado</option>
                                        </select>
                                </Label>
                            </div>
                            <button onClick={() => addLinguas()}>Salvar</button>
                            </CreateModal>
                        </AddThings>
                        
                        <ContainerAdd>
                            <ul>
                                {nomeLinguas.map((item, index) => (
                                    <li key={index} style={{border: '1px solid gray', borderRadius: '10px', }}>{item} - {nivel_linguas[index]}</li>
                                ))}
                            </ul>
                        </ContainerAdd>
                        <ContainerBottom>
                                <SubTitleLeft>Cursos</SubTitleLeft>
                                <AddThings >
                                    <AddTitle>Adicionar Cursos</AddTitle>
                                    <AddIconButton onClick={() => setOpenModalCurso(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
                                    <CreateModal isOpen={openModalCurso} setModalOpen={() => setOpenModalCurso(!openModalCurso)} >
                                    <div>
                                        <ContainerTop>
                                        <TitleDes> Adicionar Cursos</TitleDes>
                                        </ContainerTop>
                                        <Label> Nome do Curso
                                            <Input type="text" value={nomeCurso} onChange={(e) => setNomeCurso(e.target.value)}/>
                                        </Label>
                                        <ContainerMid>
                                            <Label> Data de Inicio
                                                    <Input type="date" value={dt_inicioCurso} onChange={(e) => setDataInicioCurso(e.target.value)}/>
                                            </Label>
                                            <Label> Data Final
                                                    <Input type="date" value={dt_finalCurso} onChange={(e) => setDataFinalCurso(e.target.value)}/>
                                            </Label>   
                                        </ContainerMid>
                                        <Label> Descrição do Curso
                                                <Input type="text" value={descricaoCurso} onChange={(e) => setDescricaoCurso(e.target.value)}/>
                                        </Label>
                                    </div>
                                    <button onClick={() => addCursos()}>Salvar</button>
                                    </CreateModal>
                                </AddThings>
                                
                                <ContainerAdd>
                                    <ul>
                                        {nomeCursos.map((item, index) => (
                                            <li key={index} style={{border: '1px solid gray', borderRadius: '10px', }}>{item} - {descricaoCursos[index]}</li>
                                        ))}
                                    </ul>
                                </ContainerAdd>
                    </ContainerBottom>
                    </ContainerLeft>
                </ContainerGlobalTop>
                
                <ContainerFooter>
                    <ButtonBack><Link to='/homeRegister'><IconBack src={IconButtonBack}/></Link></ButtonBack>
                    <ButtonForward onClick={handleSubmit}>Avançar </ButtonForward>
                    <div></div>
                </ContainerFooter>
            </Main>
        </BodyBack>
        </>
    )
};

export default CreatePubli
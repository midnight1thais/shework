
import React, { useState } from 'react'
import { api } from "../../services/api";
import { Link, useNavigate } from 'react-router-dom'
import AddIconImg from '../../assets/plusIcon.svg'
import { AddIcon, AddIconButton, Background, ButtonAdd, ButtonHere, ContainerButtons, ContainerCenter, ContainerMid, ContainerModal, ContainerTop, ImgDiv, Input, Label, TitleDes} from './style'


function CompanyModal({ isOpen, setModalOpen}){

// editando usuario

const [nome, setName] = useState("");
const [somos_descricao, setSomos] = useState("");
const [fazemos_descricao, setFazemos] = useState("");
const [valores, setValores] = useState("");

const [user, setUser] = useState("");
const userId= localStorage.getItem('@Auth:user_id')

const navigate = useNavigate();

const handleLogout = () => {
  // Limpa o localStorage
  localStorage.removeItem("@Auth:user");
  localStorage.removeItem("@Auth:token");
  localStorage.removeItem("@Auth:user_email");
  localStorage.removeItem("@Auth:id");
  localStorage.removeItem("@Auth:user_id");
  localStorage.removeItem("@Auth:user_categoria");
  localStorage.removeItem("@Auth:user_name");

  // Redireciona de volta para a tela de login
  navigate("/login");
  window.location.reload();
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      id_usuarioEmpresa:userId,
      nome,
      somos_descricao,
      fazemos_descricao,
      valores
    };

    console.log(data)
    const response = await api.post('/company/create', data);
    console.log(response.data.data[0])
    alert("Empresa publicada com sucesso!");


  };



  if (isOpen) {

    return (
      <Background>
        <ContainerModal>
          <div>
            <ContainerTop>
              <TitleDes> Editar Tela Empresa </TitleDes>
            </ContainerTop>
            <ContainerMid>
              <Label>Nome
                    <Input type="text" 
                    value={nome}
                    onChange={(e) => setName(e.target.value)} 
                    is required 
                    />
              </Label>
              <Label>Nossos valores
                    <Input type="text" 
                    value={valores}
                    onChange={(e) => setValores(e.target.value)} 
                    />
              </Label>
              <ImgDiv>
              <Label>Adicionar Fotos
                    <Input type="text" />
              </Label>
              <AddIconButton ><AddIcon src={AddIconImg} alt=''/></AddIconButton>
              </ImgDiv>
            </ContainerMid>
            <ContainerCenter>
              <Label>O que somos
                    <Input type="text" 
                    value={somos_descricao}
                    onChange={(e) => setSomos(e.target.value)} 
                    />
              </Label>
              <Label>O que fazemos
                    <Input type="text" 
                    value={fazemos_descricao}
                    onChange={(e) => setFazemos(e.target.value)} 
                    />
              </Label>
            </ContainerCenter>


            <ContainerTop>
              <TitleDes> Adicionar Projeto </TitleDes>
            </ContainerTop>

            <ContainerCenter>
              <Label> Titulo do Projeto
                    <Input type="text" />
              </Label>
              <Label> Descrição
                    <Input type="text" />
              </Label>
            </ContainerCenter>
            <ContainerTop>
              <ButtonAdd>Adicionar Projeto</ButtonAdd>
            </ContainerTop>
            
          </div>
          <ContainerButtons>
            <ButtonHere onClick={setModalOpen}>Fechar</ButtonHere>
            <ButtonHere onClick={handleSubmit}>Salvar</ButtonHere>
            <ButtonHere onClick={handleLogout}>Sair</ButtonHere>
          </ContainerButtons>
        </ContainerModal>
      </Background>
    )
  }
  return null
}

export default CompanyModal
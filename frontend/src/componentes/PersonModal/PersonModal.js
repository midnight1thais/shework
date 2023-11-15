import React, { useState } from 'react'
import { Background, ButtonHere, ContainerButtons, ContainerMid, ContainerModal, ContainerTop, Input, Label, TitleDes} from './style'
import { useNavigate } from 'react-router-dom'
import { api } from "../../services/api";
import axios from 'axios';

function PersonModal({ isOpen, setModalOpen}){

  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setPassword] = useState("");

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


      const formUpdate = {
        nome:nome,
        email:email,
        senha:senha,
        id_usuario:userId
      };
      
      console.log(formUpdate)

      try {
        const response = await api.put(`/user/${userId}`, formUpdate);
        setUser(response.data.formUpdate);
    
        console.log("A resposta .data", response.data.formUpdate);
    
        if (response.data.success === true) {
          alert("Usuário editado com sucesso!");
    
          // Atualize os dados no localStorage
          const updatedUser = {
            id: userId,
            nome: formUpdate.nome,
            email: formUpdate.email,
            senha: formUpdate.senha,
            categoria: localStorage.getItem("@Auth:user_categoria")
          };
    
          localStorage.setItem("@Auth:user", JSON.stringify(updatedUser.email));
          localStorage.setItem("@Auth:user_name", formUpdate.nome);
        } else {
          alert("Erro ao editar usuário no banco de dados");
        }
      } catch (error) {
        console.error("Erro ao realizar a requisição:", error.message);
      }
              
    };




  if (isOpen) {

    return (
      <Background>
        <ContainerModal>
          <div>
            <ContainerTop>
              <TitleDes> Editar Perfil </TitleDes>
            </ContainerTop>
            <ContainerMid>
              <Label>Nome
                    <Input type="text" 
                      value={nome}
                      onChange={(e) => setName(e.target.value)}
                    />
              </Label>
              <Label>Email
                    <Input type="text" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                    />
              </Label>
              <Label>Senha
                    <Input type="password" 
                      value={senha}
                      onChange={(e) => setPassword(e.target.value)}
                    />
              </Label>
            </ContainerMid>
           
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

export default PersonModal
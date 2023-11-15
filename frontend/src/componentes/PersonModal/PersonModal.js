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
    localStorage.removeItem("@Auth:email");
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
      nome,
      email,
      senha,
      id_usuario:userId
    };
 

        const response = await api.put(`/user/${userId}`, data)
            setUser(response.data);
            
            console.log(response.data.data[0])
            localStorage.removeItem("@Auth:email");
            localStorage.removeItem("@Auth:user_name");
            if (response.data.success === true) {
              alert("Usuário editado com sucesso!");
            
              const userName = response.data.data[0].nome;
              const userEmail = response.data.data[0].email;

              localStorage.setItem("@Auth:user_name", userName);
              localStorage.setItem("@Auth:user_email", userEmail);

            } else {
              alert("Erro ao editar localStorage");
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
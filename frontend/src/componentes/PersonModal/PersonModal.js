import React from 'react'
import { Background, ButtonHere, ContainerButtons, ContainerMid, ContainerModal, ContainerTop, Input, Label, TitleDes} from './style'
import { useNavigate } from 'react-router-dom'

function PersonModal({ isOpen, setModalOpen}){

  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpa o localStorage
    localStorage.removeItem("@Auth:user");
    localStorage.removeItem("@Auth:token");

    // Redireciona de volta para a tela de login
    navigate("/login");
    window.location.reload();
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
                    <Input type="text" />
              </Label>
              <Label>Email
                    <Input type="text" />
              </Label>
              <Label>Senha
                    <Input type="text" />
              </Label>
            </ContainerMid>
           
          </div>
          <ContainerButtons>
            <ButtonHere onClick={setModalOpen}>Fechar</ButtonHere>
            <ButtonHere onClick={handleLogout}>Sair</ButtonHere>
          </ContainerButtons>
        </ContainerModal>
      </Background>
    )
  }
  return null
}

export default PersonModal
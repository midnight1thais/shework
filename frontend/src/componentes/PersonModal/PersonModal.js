import React from 'react'
import { Background, ButtonHere, ContainerButtons, ContainerMid, ContainerModal, ContainerTop, Input, Label, TitleDes} from './style'
import { Link } from 'react-router-dom'

function PersonModal({ isOpen, setModalOpen}){


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
            <Link to='/home'><ButtonHere>Sair</ButtonHere></Link>
          </ContainerButtons>
        </ContainerModal>
      </Background>
    )
  }
  return null
}

export default PersonModal
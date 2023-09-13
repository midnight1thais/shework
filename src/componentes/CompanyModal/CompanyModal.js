
import React from 'react'

import { Background, ButtonAdd, ButtonHere, ContainerButtons, ContainerMid, ContainerModal, ContainerTop, Input, Label, TitleDes} from './style'
import { Link } from 'react-router-dom'

function CompanyModal({ isOpen, setModalOpen}){


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
                    <Input type="text" />
              </Label>
              <Label>Adicionar Fotos
                    <Input type="text" />
              </Label>
            </ContainerMid>
            <ContainerMid>
              <Label>O que somos
                    <Input type="text" />
              </Label>
              <Label>O que fazemos
                    <Input type="text" />
              </Label>
            </ContainerMid>
            <Label>Nossos valores
                    <Input type="text" />
            </Label>

            <ContainerTop>
              <TitleDes> Adicionar Projeto </TitleDes>
            </ContainerTop>

            <ContainerMid>
              <Label> Titulo do Projeto
                    <Input type="text" />
              </Label>
              <Label> Descrição
                    <Input type="text" />
              </Label>
            </ContainerMid>
            <ContainerTop>
              <ButtonAdd>Adicionar Projeto</ButtonAdd>
            </ContainerTop>
            
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

export default CompanyModal
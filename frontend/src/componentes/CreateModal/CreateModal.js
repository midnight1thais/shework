import React, {useState} from 'react'
import { Background, ContainerMid, ContainerModal, ContainerTop, Input, Label, TitleDes} from './style'

function CreateModal({ isOpen, children, setModalOpen}){
  const [nomeCurso, setNomeCurso] = useState(''); // Estado para o nome do curso
 

  if (isOpen) {
  
    return (
      <Background>
        <ContainerModal>
          <div>{children}</div>
          <button onClick={setModalOpen}>Fechar</button>
        </ContainerModal>
      </Background>
    )
  }
  return null
}

export default CreateModal
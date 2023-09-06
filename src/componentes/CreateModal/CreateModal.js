import React, {useState} from 'react'

import { Background, ContainerMid, ContainerModal, ContainerTop, Input, Label, TitleDes} from './style'

function CreateModal({ isOpen, setModalOpen, addCurso}){
  
  const [nomeCurso, setNomeCurso] = useState(''); // Estado para o nome do curso

  // Função para lidar com a adição do curso
  const handleAddCurso = () => {
    if (nomeCurso.trim() !== '') {
      addCurso(nomeCurso); // Chama a função passada por prop para adicionar o curso
      setModalOpen(); // Fecha o modal
    }
  };

  if (isOpen) {
    return (
      <Background>
        <ContainerModal>
          <div>
            <ContainerTop>
              <TitleDes> Descrição do Curso </TitleDes>
            </ContainerTop>
            <Label>Nome
                  <Input type="text" value={nomeCurso} onChange={(e) => setNomeCurso(e.target.value)} />
            </Label>
            <ContainerMid>
              <Label>Data de Inicio
                    <Input type="text" />
              </Label>
              <Label>Data de Término
                    <Input type="text" />
              </Label>
            </ContainerMid>
            <Label>Descrição do Curso
                    <Input type="text" />
            </Label>
          </div>
          <button onClick={handleAddCurso}>Fechar</button>
        </ContainerModal>
      </Background>
    )
  }
  return null
}

export default CreateModal
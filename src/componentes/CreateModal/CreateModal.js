import React, {useState} from 'react'
import { Background, ContainerMid, ContainerModal, ContainerTop, Input, Label, TitleDes} from './style'

function CreateModal({ isOpen, setModalOpen, addCurso, tipoLista}){
  console.log('função', tipoLista)  

  const [nomeCurso, setNomeCurso] = useState(''); // Estado para o nome do curso
 

  if (isOpen) {
  
      // Função para lidar com a adição do curso
    const handleAddCurso = () => {
      if (nomeCurso.trim() !== '') {
          addCurso(nomeCurso, tipoLista);
          console.log('handleAddCurso', tipoLista)
          setModalOpen();
      }
    };
    return (
      <Background>
        <ContainerModal>
          <div>
            <ContainerTop>
              <TitleDes> Adicionar Informação </TitleDes>
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
            <Label>Descrição
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
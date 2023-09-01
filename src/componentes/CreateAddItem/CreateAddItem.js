import { CompetenciaContainer, CompetenciaDescricao } from "./style";


function CreateAddItem(descricao){

    return(
        <CompetenciaContainer>
            <CompetenciaDescricao>{descricao}</CompetenciaDescricao>
        </CompetenciaContainer>
    )
}

export default CreateAddItem
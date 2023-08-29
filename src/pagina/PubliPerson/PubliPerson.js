import { BigTitle, ContainerHeader, ContainerInput, ContainerSearch, IconSearch, InputSearch, LittleTitle } from "./style"

import iconsearch from '../../assets/IconSearch.svg'

function PubliPerson(){

    return(
        <>
        <ContainerHeader>
            <BigTitle>EXPLORE AS PUBLICAÇÕES</BigTitle>
            <LittleTitle>Compartilhe sua vaga para uma possível contratação</LittleTitle>
        </ContainerHeader>
        <ContainerSearch>
            <ContainerInput>
                <IconSearch src={iconsearch} alt=""/>
                <InputSearch placeholder="Search"/>
            </ContainerInput>
        </ContainerSearch>

        </>
    )
}

export default PubliPerson
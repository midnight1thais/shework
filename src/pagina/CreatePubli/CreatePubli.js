import React from "react";
import { BodyBack, ContainerBottom, ContainerFooter, ContainerGlobalTop, ContainerLeft, ContainerRight, Input, Label, Main, SubTitle, TitleGlobal} from "./style";

function CreatePubli() {

    return(
        <>
        <BodyBack>
            <Main>
                <TitleGlobal> Publicação </TitleGlobal>
                <ContainerGlobalTop>
                    <ContainerRight>
                        <SubTitle>Informações Pessoais</SubTitle>
                        <Label>Nome
                            <Input type="text" />
                        </Label>
                        <Label>Data de Nascimento
                             <Input type="text" />
                        </Label>
                        <Label>Cidade e Estado
                             <Input type="text" />
                        </Label>
                        <Label>Email
                             <Input type="text" />
                        </Label>
                        <Label>Linkedin
                             <Input type="text" />
                        </Label>
                        <Label>Nacionalidade
                             <Input type="text" />
                        </Label>
                    </ContainerRight>
                    <ContainerLeft>
                        <SubTitle>Competências Técnicas</SubTitle>
                        
                    </ContainerLeft>
                </ContainerGlobalTop>
                <ContainerBottom>

                </ContainerBottom>
                <ContainerFooter>

                </ContainerFooter>
            </Main>
        </BodyBack>
        </>
    )
}

export default CreatePubli
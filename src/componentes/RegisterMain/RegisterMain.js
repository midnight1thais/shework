import React, { useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react'
import { Background, Container, Div, Main, Title, Input, Select, ContactForm, Button, LinkA, Entrar, Label, Text, InputCategory } from './style'

function RegisterMain() {

    const [servico, setServico] = useState('gerais');
    const [outrosServicos, setOutrosServicos] = useState('');

    const handleChange = (event) => {
        setServico(event.target.value);
        if (event.target.value !== 'gerais') {
            setOutrosServicos('');
        }
    };

    const handleOutrosServicosChange = (event) => {
        setOutrosServicos(event.target.value);
    };


    return (
        <>
            <Background>
                <Main>
                    <Container>
                        <Title>Cadastro</Title>
                        {/* <ContactForm> */}
                        {/* <Div> */}
                        <Grid templateColumns='repeat(2, 1fr)' 
                         templateRows='repeat(3, 1fr)'
                         h='60vh'
                        bg={'red'}
                        gap={0.5} >

                            <GridItem w='35vw' colSpan={2}
                            colStart={1} colEnd={1}
                             rowSpan={1}
                            h='30vh'>

                                <Label>E-mail
                                    <Input type="text" />
                                </Label>

                                <Label>Senha
                                    <Input type="password" />
                                </Label>

                                <Label>Confirmação da Senha
                                    <Input type="password" />
                                </Label>
                            </GridItem>
                            
                            <GridItem  w='35vw' h='10vh' 
                             colStart={2} colEnd={2}
                             rowSpan={1}
                            >
                                <Label>Nome
                                    <Input type="text" />
                                </Label>

                                <Label>Data de Nascimento
                                    <Input type="date" />
                                </Label>
                                <Label htmlFor="servico">Categoria
                                    <Select id="servico" value={servico} onChange={handleChange} type='text'>
                                        <option value="gerais" type='text'>Outros serviços gerais</option>
                                        <option value="ti" type='text'>Técnico TI</option>
                                    </Select>
                                </Label >
                                {/* {servico === 'gerais' && (
                                    <Label htmlFor="outrosServicosInput">Descreva o serviço:
                                        <InputCategory
                                            type="text"
                                            id="outrosServicosInput"
                                            value={outrosServicos}
                                            onChange={handleOutrosServicosChange}
                                        />
                                    </Label>

                                )} */}
                            </GridItem>

                            <GridItem  
                               colStart={1} colEnd={2}
                               rowSpan={2}

                            w='35vw' h='5vh' 
                            >
                                {servico === 'gerais' && (
                                    <Label htmlFor="outrosServicosInput">Descreva o serviço:
                                        <InputCategory
                                            type="text"
                                            id="outrosServicosInput"
                                            value={outrosServicos}
                                            onChange={handleOutrosServicosChange}
                                        />
                                    </Label>

                                )}
                            </GridItem>

                            <GridItem w='35vw' h='20vh'
                             justifyItems="center"
                             alignItems="center"
                            colStart={1} colEnd={2}
                            rowSpan={3}
                            // colSpan={4}
                            >
                                <Button value="Cadastrar" type="submit">Cadastrar</Button>

                                <Entrar>
                                    <Text>Você ja tem uma conta?
                                        <LinkA> Entrar</LinkA>
                                    </Text>
                                </Entrar>

                                <Entrar>
                                    <Text>Quer contratar?
                                        <LinkA> Cadastre-se </LinkA>
                                    </Text>
                                </Entrar>
                            </GridItem>
                        </Grid>
                        {/* </Div> */}



                        {/* </ContactForm> */}

                    </Container>
                </Main>
            </Background>

        </>

    )
}

export default RegisterMain
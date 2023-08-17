import React, { useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react'
import { Background, Container, Main, Title, Input, Select, Button, LinkA, Entrar, Label, Text, InputCategory } from './style'

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
                        <Grid 
                            templateColumns='repeat(2, 1fr)' 
                            templateRows='repeat(3, 1fr)'
                            h='60vh'
                            bg={'red'}
                            gap={0.5}
                            justifyContent="center"  
                            alignItems="center" 
                        >

                            <GridItem 
                            // w='35vw'
                                colSpan={2}
                                colStart={1} colEnd={1}
                                rowSpan={1}
                                bg="yellow"
                                h='30vh'
                            >

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
                            
                            <GridItem 
                                bg="blue" 
                                h='30vh' 
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
                            </GridItem>

                            <GridItem 
                                bg={'orange'} 
                                colStart={1} colEnd={3}
                                rowSpan={2}
                                w='30vw'
                                h='10vh' 
                                justifySelf="center"
                                alignItems="center"
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

                            <GridItem 
                            colStart={1} colEnd={3}
                            rowSpan={2}
                            w='50vw'
                            bg={'orange'}
                            justifySelf="center"
                            alignItems="center"
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

                    </Container>
                </Main>
            </Background>

        </>

    )
}

export default RegisterMain
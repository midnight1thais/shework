import React, { useState } from 'react';
import { Flex, Grid, GridItem } from '@chakra-ui/react'
import { Background, Main, Title, Input, Select, Button, LinkA, Entrar, Label, Text, InputCategory, ContainerForm } from './style'
import { api } from "../../services/api";
import { Link } from 'react-router-dom';

function RegisterMain() {

    const [servico, setServico] = useState('');
    const [outrosServicos, setOutrosServicos] = useState('');

    const [email, setEmail] = useState("");
    const [senha, setPassword] = useState("");
    const [nome, setName] = useState("");
  

    const handleChange = (event) => {
        setServico(event.target.value);
        if (event.target.value !== 'gerais') {
            setOutrosServicos('');
        }
    };

    const handleOutrosServicosChange = (event) => {
        setOutrosServicos(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
          nome,
          email,
          senha,
          servico
        };
        console.log(data)
        const response = await api.post('/user/create', data);
        console.log(response.data.data[0])
        alert("Usuário criado com sucesso!");
      };


    return (
        <>
            <Background>
                <Main>
                    <ContainerForm onSubmit={handleSubmit}>
                        <Title>Cadastro</Title>
                        <Grid 
                            templateColumns='repeat(2, 1fr)' 
                            templateRows='repeat(3, 1fr)'
                            h='70vh'
                            gap={0.5}
                            justifyContent="center"  
                            alignItems="center" 
                        >

                            <GridItem 
                            // w='35vw'
                                colSpan={2}
                                colStart={1} colEnd={1}
                                rowSpan={1}
                                h='32vh'
                                maxW='40vw'
                                ml='4vw'
                            >
                           
                                <Label>E-mail
                                    <Input 
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} 
                                    />
                                </Label>

                                <Label>Senha
                                    <Input 
                                    type="password" 
                                    value={senha}
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Label>

                                <Label>Confirmação da Senha
                                    <Input type="password" />
                                </Label>
                            </GridItem>
                            
                            <GridItem 
                                h='32vh' 
                                maxW='40vw'
                                ml='2vw'
                                colStart={2} colEnd={2}
                                rowSpan={1}

                            >
                                <Label>Nome
                                    <Input 
                                    type="text"
                                    value={nome}
                                    onChange={(e) => setName(e.target.value)}
                                    />
                                </Label>

                                <Label>Data de Nascimento
                                    <Input type="date" />
                                </Label>
                                <Label htmlFor="servico">Categoria
                                    <Select id="servico" value={servico} onChange={(e) => setServico(e.target.value)} type='text'>
                                        <option value="gerais" type='text'>Outros Trabalhos</option>
                                        <option value="ti" type='text'>Técnico TI</option>
                                        <option value="company" type='text'>Empresa</option>
                                    </Select>
                                </Label >
                            </GridItem>

                            <GridItem 
                                colStart={1} colEnd={3}
                                rowSpan={2}
                                w='32vw'
                                h='10vh' 
                                justifySelf="center"
                                alignItems="center"
                            >
                                {servico === 'gerais' && (
                                    <Label htmlFor="outrosServicosInput">Descreva o trabalho:
                                        <InputCategory
                                            type="text"
                                            id="outrosServicosInput"
                                            value={servico}
                                            onChange={(e) => setServico(e.target.value)}
                                        />
                                    </Label>

                                )}
                            </GridItem>
                            <GridItem 
                            colStart={1} colEnd={3}
                            rowSpan={2}
                            w='50vw'
                            justifySelf="center"
                            alignItems="center"
                            >
                            <Flex justifyContent="center" flexDirection="column" mb="2vh">
                            <Button value="Cadastrar" type="submit">Cadastrar</Button>

                                <Entrar>
                                    <Text>Você ja tem uma conta?
                                        <LinkA><Link to='/login'>Entrar</Link></LinkA>
                                    </Text>
                                </Entrar>

                              
                            </Flex>
                            </GridItem>
                        </Grid>

                    </ContainerForm>
                </Main>
            </Background>

        </>

    )
}

export default RegisterMain
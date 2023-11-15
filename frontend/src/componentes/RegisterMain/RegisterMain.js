import React, { useState} from 'react';
import { Flex, Grid, GridItem } from '@chakra-ui/react'
import { Background, Main, Title, Input, Select, Button, LinkA, Entrar, Label, Text, InputCategory, ContainerForm } from './style'
import { api } from "../../services/api";
import { Link, Navigate, useNavigate } from 'react-router-dom';

function RegisterMain() {

    const [categoria, setServico] = useState('');
    const [outrosServicos, setOutrosServicos] = useState('');
    // para colocar o email, senha nome e navegação
    const [email, setEmail] = useState("");
    const [senha, setPassword] = useState("");
    const [nome, setName] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");
    const [escolhaCategoria, setEscolhaCategoria] = useState('')

    // const categoria = {
    //     servico1: 'Trabalhos Diversos',
    //     servico2: 'Técnico TI',
    //     servico3: 'Empresa'
    //   };

    const navigate = useNavigate();
    
    const goToHome = () => {
       
        navigate("/homeRegister");
    
        window.location.reload();
          
        };
  
   // se o evento for diferente de 'gerais' ele vai por outro serviço

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

        if (categoria === escolhaCategoria) {
            alert("Por favor, escolha uma categoria antes de cadastrar.");
            return;
        }
        
        if (senha !== confirmSenha) {
            alert("A senha e a confirmação da senha não coincidem.");
            return;
        }

        const data = {
          nome,
          email,
          senha,
          categoria
        };
        console.log(data)
        const response = await api.post('/user/create', data);
        console.log(response.data.data[0])
        alert("Usuário criado com sucesso!");

        goToHome()
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
                                    is required 
                                    />
                                </Label>

                                <Label>Senha
                                    <Input 
                                    type="password" 
                                    value={senha}
                                    onChange={(e) => setPassword(e.target.value)}
                                    is required 
                                    />
                                </Label>

                                <Label>Confirmação da Senha
                                    <Input type="password" 
                                    value={confirmSenha}
                                    onChange={(e) => setConfirmSenha(e.target.value)}
                                    is required 
                                    />
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
                                    is required 
                                    />
                                </Label>

                                <Label htmlFor="servico">Categoria
                                    <Select id="servico" value={categoria} onChange={(e) => setServico(e.target.value)} type='text' is required>
                                        <option value={escolhaCategoria} type='text'>Escolha Categoria</option>
                                        <option value="Trabalhos Diversos" type='text'>Trabalhos Diversos</option>
                                        <option value="Técnico em TI" type='text'>Técnico TI</option>
                                        <option value="Empresa" type='text'>Empresa</option>
                                        
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
                                {/* {servico === 'gerais' && (
                                    <Label htmlFor="outrosServicosInput">Descreva o trabalho:
                                        <InputCategory
                                            type="text"
                                            id="outrosServicosInput"
                                            value={servico}
                                            onChange={(e) => setServico(e.target.value)}
                                        />
                                    </Label>

                                )} */}
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
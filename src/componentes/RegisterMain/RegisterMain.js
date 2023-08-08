import React, { useState } from 'react';


import { Background, Container, Div, Main, Title, Input, Select, ContactForm, Button, LinkA, Entrar, Label, Text} from './style'


function RegisterMain(){

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

    return(
    <>
        <Background>
            <Main>
                <Container>
                <Title>Cadastro</Title>
                    <ContactForm>
                        <Div >
                            <Label>Nome</Label>
                            <Input type="text"/>
                        </Div>
                        <Div>
                            <Label>Data de Nascimento</Label>
                            <Input type="date"/>
                        </Div>
                        <Div> 
                            <Label>E-mail</Label>
                            <Input type="text"/>
                        </Div>
                        <Div>
                            <Label>Senha</Label>
                            <Input type="password"/>
                        </Div>
                        <Div> 
                            <Label>Confirmação da Senha</Label>
                            <Input type="password"/>
                        </Div>
                        <Div>
                            <Div>
                                <Label htmlFor="servico">Categoria</Label >
                                <Select id="servico" value={servico} onChange={handleChange} type='text'>
                                    <option value="gerais" type='text'>Outros serviços gerais</option>
                                    <option value="ti" type='text'>Técnico TI</option>
                                </Select>

                                {servico === 'gerais' && (
                                    <Div>
                                    <Label htmlFor="outrosServicosInput">Descreva o serviço:</Label>
                                    <Input
                                        type="text"
                                        id="outrosServicosInput"
                                        value={outrosServicos}
                                        onChange={handleOutrosServicosChange}
                                    />
                                    </Div>
                                )}
                            </Div>
                        </Div>
                        <Button value="Cadastrar" type="submit"/>
                        <Entrar>
                            <Text>Você ja tem uma conta?</Text>
                            <LinkA> Entrar</LinkA> 
                        </Entrar> 
                        <Entrar>
                            <Text>Quer contratar?</Text>
                            <LinkA> Cadastre-se </LinkA> 
                        </Entrar>      
                    </ContactForm>
        
                </Container>
            </Main>
        </Background>
        </>
        
    )
}

export default RegisterMain
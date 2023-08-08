import React, { useState } from 'react';


<<<<<<< HEAD
import { Background, Container, Div, Main, Title, Input, Select, ContactForm, Button, LinkA, Entrar, Label, Text} from './style'
=======
import { Background, Container, Main, Title, Input, Select, ContactForm, Button, LinkA, Entrar, LabelStyle, DivStyle } from './style'
>>>>>>> 3d63ad885631afcbd641f813fc90f3180f9aa823


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

<<<<<<< HEAD
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
=======
    return (
        <>
            <Background>
                <Main>
                    <Container>
                        <Title>Cadastro</Title>
                            <ContactForm>
                                <DivStyle>
                                    <LabelStyle>E-mail
                                        <Input type="text" />
                                    </LabelStyle>

                                    <LabelStyle>Senha
                                        <Input type="password" />
                                    </LabelStyle>

                                    <LabelStyle>Confirmação da Senha
                                        <Input type="password" />
                                    </LabelStyle>
                              
                                    <LabelStyle>Nome
                                        <Input type="text" />
                                    </LabelStyle>

                                    <LabelStyle>Data de Nascimento
                                        <Input type="date" />
                                    </LabelStyle>

                                    <LabelStyle htmlFor="servico">Categoria
                                        <Select id="servico" value={servico} onChange={handleChange} type='text'>
                                            <option value="gerais" type='text'>Outros serviços gerais</option>
                                            <option value="ti" type='text'>Técnico TI</option>
                                        </Select>
                                    </LabelStyle>
    
                                
                                    {servico === 'gerais' && (
                                        <LabelStyle
                                            htmlFor="outrosServicosInput">Descreva o serviço:
                                            <Input
                                                type="text"
                                                id="outrosServicosInput"
                                                value={outrosServicos}
                                                onChange={handleOutrosServicosChange}
                                            />
                                        </LabelStyle>
                                    )}

                                </DivStyle> 

                                    <Button value="Cadastrar" type="submit" />
                                    <Entrar>
                                        <p>Você ja tem uma conta?</p>
                                        <LinkA> Entrar</LinkA>
                                    </Entrar>
                                    <Entrar>
                                        <p>Quer contratar?</p>
                                        <LinkA> Cadastre-se </LinkA>
                                    </Entrar>
                            </ContactForm>



                    </Container>
                </Main>
            </Background>
>>>>>>> 3d63ad885631afcbd641f813fc90f3180f9aa823
        </>

    )
}

export default RegisterMain
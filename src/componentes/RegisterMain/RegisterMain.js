import React, { useState } from 'react';


import { Background, Container, Main, Title, Input, Select, ContactForm, Button, LinkA, Entrar, LabelStyle, DivStyle } from './style'


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
        </>

    )
}

export default RegisterMain
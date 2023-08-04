import React, { useState } from 'react';


import { Background, Container, Div, Main, Title, Input, Select, ContactForm, Button, LinkA, Entrar} from './style'


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
                <div class="contact">
                    <ContactForm>
                        <Div>
                            <label>Nome</label>
                            <Input type="text"/>
                        </Div>
                        <Div>
                            <label>Data de Nascimento</label>
                            <Input type="date"/>
                        </Div>
                        <Div> 
                            <label>E-mail</label>
                            <Input type="text"/>
                        </Div>
                        <Div>
                            <label>Senha</label>
                            <Input type="password"/>
                        </Div>
                        <Div> 
                            <label>Confirmação da Senha</label>
                            <Input type="password"/>
                        </Div>
                        <Div> {/* Linha corrigida */}
                            <Div>
                                <label htmlFor="servico">Categoria</label >
                                <Select id="servico" value={servico} onChange={handleChange} type='text'>
                                    <option value="gerais" type='text'>Outros serviços gerais</option>
                                    <option value="ti" type='text'>Técnico TI</option>
                                </Select>

                                {servico === 'gerais' && (
                                    <Div>
                                    <label htmlFor="outrosServicosInput">Descreva o serviço:</label>
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
                            <p>Você ja tem uma conta?</p>
                            <LinkA> Entrar</LinkA> 
                        </Entrar> 
                        <Entrar>
                            <p>Quer contratar?</p>
                            <LinkA> Cadastre-se </LinkA> 
                        </Entrar>      
                    </ContactForm>
            
                    
                </div>

                </Container>
            </Main>
        </Background>
        </>
        
    )
}

export default RegisterMain
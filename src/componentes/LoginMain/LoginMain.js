
import { Link } from 'react-router-dom'
import { Background, Container, Div, Main, Title, Input, ContactForm, Button, LinkA, Entrar} from './style'


function LoginMain(){


    return(
        <>
        <Background>
            <Main>
                <Container>
                <Title>Entrar</Title>
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
                            <Input 
                            type='email'
                            />
                        </Div>
                        <Div>
                            <label>Senha</label>
                            <Input 
                            type='password'
                            />
                        </Div>
                        <Button type="submit"><Link to='/homeRegister'>Entrar </Link></Button>
                        <Entrar>
                            <p>Você não tem uma conta?</p>
                            <LinkA> Cadastrar</LinkA> 
                        </Entrar> 
                        <Entrar>
                            <p>É uma empresa?</p>
                            <LinkA> Cadastre-se </LinkA> 
                        </Entrar>      
                    </ContactForm>

                </Container>
            </Main>
        </Background>
        </>
    )
}

export default LoginMain
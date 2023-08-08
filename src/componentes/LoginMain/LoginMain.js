
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
                            <Input type="text"/>
                        </Div>
                        <Div>
                            <label>Senha</label>
                            <Input type="password"/>
                        </Div>
    
                        <Button value="Entrar" type="submit"/>
                        <Entrar>
                            <p>Você não tem uma conta?</p>
                            <LinkA> Cadastrar</LinkA> 
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

export default LoginMain
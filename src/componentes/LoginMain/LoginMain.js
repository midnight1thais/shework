
import { Link, useNavigate } from 'react-router-dom'
import { Background, Container, Div, Main, Title, Input, ContactForm, Button, LinkA, Entrar, Label, ButtonBack } from './style'
import { useState } from 'react';
import axios from 'axios';
import ButtonBackIMG from '../../assets/JobButtonBack.svg'

function LoginMain(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const navigate = useNavigate()
  
    const goToHomeRegister = () => {
      navigate('/homeRegister')
    }
  
    const hadleSubmit = (e) => {
      e.preventDefault()
  
      const credentials = { email, password } 
      
      axios
      .post('http://localhost:8000/login', credentials, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        alert(response.data.message)
        goToHomeRegister()
      })
      .catch(error => console.log(error))
      
    };

    return(
        <>
        <Background>
            <Main>
                <Container>
                <Title>Entrar</Title>
                    <ContactForm onSubmit={hadleSubmit}>
                        <Div>
                            <Label>Nome</Label>
                            <Input type="text"/>
                        </Div>
                        <Div>
                            <Label>Data de Nascimento</Label>
                            <Input type="date"/>
                        </Div>
                        <Div> 
                            <Label>E-mail</Label>
                            <Input 
                            type='email'
                            value={email}
                            onChange = {(e) => setEmail(e.target.value)}
                            />
                        </Div>
                        <Div>
                            <Label>Senha</Label>
                            <Input 
                            type='password'
                            value={password} 
                            onChange = {(e) => setPassword(e.target.value)}  
                            />
                        </Div>
                        <Button type="submit">Entrar</Button>
                        <Entrar>
                            <p>Você não tem uma conta?</p>
                            <LinkA><Link to='/register'>Cadastrar</Link></LinkA> 
                        </Entrar> 
                        <Entrar>
                            <p>É uma empresa?</p>
                            <LinkA><Link to='/register'>Cadastre-se</Link></LinkA> 
                        </Entrar>   
                        <Link to='/home'><ButtonBack src={ButtonBackIMG} alt=''/></Link>  
                    </ContactForm>
                </Container>
            </Main>
        </Background>
        </>
    )
}

export default LoginMain

import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Background, Container, Div, Main, Title, Input, ContactForm, Button, LinkA, Entrar, Label, ButtonBack } from './style'
import { useContext, useState } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../services/api";
import ButtonBackIMG from '../../assets/JobButtonBack.svg'

function LoginMain(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const { signIn, signed } = useContext(AuthContext);
    const [user, setUser] = useState(null);
  
    const navigate = useNavigate();
  
    const goToHome = () => {
       
      navigate("/home");
  
      window.location.reload();
        
      };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        email,
        senha
      };
      try{
      const response = await api.post('auth/login', data)
  
        alert("Usuário conectado com sucesso!");
        console.log(user)
        console.log(signIn)
  
        setUser(response.data);
        
  
        api.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${response.data.data[0].token}`
          
        localStorage.setItem("@Auth:user", JSON.stringify(response.data.data[0].nome));
        localStorage.setItem("@Auth:token", response.data.data[0].token);
        
        goToHome()
        
      } catch (error) {
        alert('Algo de errado não está certo')
        console.log(error.response);
      }
    };
  
  
    if (!signed) {
        return(
            <>
            <Background>
                <Main>
                    <Container>
                    <Title>Entrar</Title>
                        <ContactForm onSubmit={handleSubmit}>
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
                                value={senha} 
                                onChange = {(e) => setSenha(e.target.value)}  
                                />
                            </Div>
                            <Button type="submit" onClick={handleSubmit}>Entrar</Button>
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
    } else {
        console.log('entrei no signed')
        return <Navigate to="/home" />;
    };
};

export default LoginMain
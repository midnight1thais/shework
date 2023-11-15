import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Background, Container, Div, Main, Title, Input, ContactForm, Button, LinkA, Entrar, Label, ButtonBack } from './style'
import { useState } from 'react';
import { api } from "../../services/api";
import ButtonBackIMG from '../../assets/JobButtonBack.svg'

function LoginMain(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [user, setUser] = useState(null);
    const signed = false;
  
    const navigate = useNavigate();
  
    const goToHome = () => {
       
      navigate("/homeRegister");
  
      window.location.reload();
        
      };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const data = {
            email,
            senha
        };
        console.log(data);
        
            const response = await api.post('auth/login', data)
            console.log(response.data);

            // Reorna da API com as chaves
            if (response.data.success === true) {
                alert("Usuário conectado com sucesso!");

                api.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${response.data.data[0].token}`

                localStorage.setItem("@Auth:user", JSON.stringify(response.data.data[0].email));
                localStorage.setItem("@Auth:token", response.data.data[0].token);
                setUser(response.data.data[0])

                const userName = response.data.data[0].nome;
                const userCategoria = response.data.data[0].categoria;
                const userId = response.data.data[0].id_usuario;
                localStorage.setItem("@Auth:user_name", userName); 
                localStorage.setItem("@Auth:user_categoria", userCategoria); 
                localStorage.setItem("@Auth:user_id", userId)
                //signed = true;
                
                goToHome()

            } else {
                alert('Num deu!')

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
                                <Label>E-mail</Label>
                                <Input 
                                type='email'
                                placeholder='teste2@gmail.com'
                                value={email}
                                onChange = {(e) => setEmail(e.target.value)}
                                />
                            </Div>
                            <Div>
                                <Label>Senha</Label>
                                <Input 
                                type='password'
                                placeholder='**************'
                                value={senha} 
                                onChange = {(e) => setSenha(e.target.value)}  
                                />
                            </Div>
                            <Button type="submit" onClick={handleSubmit}>Entrar</Button>
                            <Entrar>
                                <p>Você não tem uma conta?</p>
                                <LinkA><Link to='/register'>Cadastrar</Link></LinkA> 
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
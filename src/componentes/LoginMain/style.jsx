import styled from 'styled-components';

import fundo from '../../assets/fundo.svg';


export const Background = styled.div`
    background-image: url(${fundo});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;

    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
`

export const Main = styled.main`
    height: 90vh;
    width: 80vw;

    background-color: rgba(255, 255, 255, 0.1) /* Cor preta com 50% de transparência */;
    backdrop-filter: blur(40px); /* Efeito de desfoque */
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.45); /* Sombra */

`

export const Container = styled.section`
    height: 100vh;
    padding: 0vh 8vw 0vh 8vw;
`

export const ContactForm = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0vh 8vw 0vh 8vw;
    gap: 1rem;

    height: 100vh;

`

export const Div = styled.div`
    input[type="text"],
    input[type="password"],
    input[type="date"] {
    color: #FFFFFF;
    text-indent: 1vw;
  }
    label{
    align-self: flex-start;

    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color:#FFFFFF;
    
}

`


export const Title = styled.h1` 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3vh;
    

    font-size: 30px;
    font-weight: 400px;
    color:#FFFFFF;
    
`



export const Input = styled.input`
    width: 50vw;
    height: 5vh;

    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 300;
    background: rgba(0, 0, 0, 0.11);
    border-radius: 4px;
    border: none;

    ::placeholder {
       color: #800075;
   }
   

`



export const Button = styled.input`
    width: 45%;
    height: 3.5%;
    
    font-family: 'Poppins', sans-serif;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(2px);
    border-radius: 23px;
    border: none;

` 
export const Entrar = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: row nowrap;

    p{
        color: rgba(255, 255, 255, 0.9);
    }
  
`

export const LinkA = styled.button`
    text-decoration: underline;
    font-family: 'Poppins', sans-serif;
    color: rgba(255, 255, 255, 0.9);
    margin-left: 0.5vw;
`
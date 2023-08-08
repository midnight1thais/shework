import styled from 'styled-components';

import fundo from '../../assets/fundo.svg';


export const Background = styled.div`
    background-image: url(${fundo});
    background-repeat: no-repeat;
    background-size: cover;
    color:  rgba(14, 6, 58, 0.651);
    height: 100%;
    width: 100vw;

    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
`

export const Main = styled.main`
    margin-top: 5vh;
    margin-bottom: 5vh;
    height: 10%;
    width: 80%;

    background-color: rgba(255, 255, 255, 0.1) /* Cor preta com 50% de transparência */;
    backdrop-filter: blur(40px); /* Efeito de desfoque */
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.45); /* Sombra */

`

export const Container = styled.section`
    height: 100%;
    padding: 0vh 8vw 0vh 8vw;
`

export const ContactForm = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0vh 8vw 0vh 8vw;
    gap: 1rem;

    height: 100%;

`

export const Div = styled.div`


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

export const Label = styled.label`
    align-self: flex-start;

    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 300;
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
    color: #FFFFFF;
    text-indent: 1vw;

    ::placeholder {
       color: #800075;
   }
   

`

export const Select = styled.select`
    width: 50vw;
    height: 4.5vh;
    margin-bottom: 2vh;

    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 300;
    background: rgba(0, 0, 0, 0.281);
    border-radius: 4px;
    border: none;

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

  
`
export const Text = styled.p`
    color: rgba(255, 255, 255, 0.9);
`

export const LinkA = styled.a`
    text-decoration: underline;
    font-family: 'Poppins', sans-serif;
    color: rgba(255, 255, 255, 0.9);
    margin-left: 0.5vw;
`
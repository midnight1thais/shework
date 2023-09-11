import styled from 'styled-components';

import fundo from '../../assets/fundo.png';


export const Background = styled.div`
    background-image: url(${fundo});
    /* background-repeat: no-repeat; */
    background-size: 100%;
    color:  rgba(14, 6, 58, 0.651);
    height: 100vh;
    width: 100%;


    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
`

export const Main = styled.main`
    margin-top: 5vh;
    margin-bottom: 5vh;
    width: 80%;

    background-color: rgba(255, 255, 255, 0.1) /* Cor preta com 50% de transparência */;
    backdrop-filter: blur(40px); /* Efeito de desfoque */
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.45); /* Sombra */

`

export const Container = styled.section`
    /* height: 80vh; */
    /* padding: 0vh 8vw 0vh 8vw; */
` 

export const ContactForm = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    /* padding: 0vh 8vw 0vh 8vw; */
    gap: 1rem;

`



export const Div = styled.div`
    gap: 6%;
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
    display: flex;
    flex-direction: column;
    margin-top: 2vh;
    margin-left: 2vw;


    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color:#FFFFFF;
`

export const Input = styled.input`
    width: 30vw;
    height: 5vh;

    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 300;
    background: rgba(0, 0, 0, 0.11);
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    text-indent: 1vw;


`

export const InputCategory = styled.input`
    width: 30vw;
    height: 5vh;

    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 300;
    background: rgba(0, 0, 0, 0.11);
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    text-indent: 1vw;

    &::placeholder {
       color: #8e858d;
   }
   

`



export const Select = styled.select`
    width: 30vw;
    height: 4.5vh;
    margin-bottom: 2vh;

    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 300;
    background: rgba(0, 0, 0, 0.281);
    border-radius: 4px;
    border: none;

`

export const Button = styled.button`
    width: 45%;
    height: 6vh;
    margin-top: 5vh;
    margin-bottom: 1vh;
    margin-left: 14vw;
    
    font-family: 'Poppins', sans-serif;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(2px);
    border-radius: 23px;
    border: none;

` 
export const Entrar = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-flow: row nowrap;
   
  
`
export const Text = styled.p`
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 1.5vh;
`

export const LinkA = styled.button`
    text-decoration: underline;
    font-family: 'Poppins', sans-serif;
    color: rgba(255, 255, 255, 0.9);
    margin-left: 0.5vw;
    
`
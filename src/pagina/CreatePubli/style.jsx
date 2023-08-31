import styled from 'styled-components';

export const BodyBack = styled.body`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 120vh;
    background-color: #324176;
`

export const Main = styled.main`
    height: 90vh;
    width: 80vw;
    margin-top: 5vh;

    background-color: rgba(255, 255, 255, 0.1) /* Cor preta com 50% de transparência */;
    backdrop-filter: blur(40px); /* Efeito de desfoque */
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.45); /* Sombra */

`

export const ContainerGlobalTop = styled.section`
    display: flex;
    flex-direction: row;
    background-color: red;

`

export const TitleGlobal = styled.h1`
    color: #FFF;
    text-align: center;
    font-family: 'Work Sans';
    font-size: 76px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const ContainerRight = styled.div`
    display: flex;
    flex-direction: column;

    background-color: yellow;
`

export const  SubTitle = styled.h1`
    color: #FFF;
    font-family: 'Poppins';
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.32px;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;


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
export const ContainerLeft = styled.div`
    
    background-color: #ed3957;
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: row;
`

export const ContainerBottom = styled.div`

    background-color: green;
`

export const ContainerFooter = styled.footer`
    
    background-color: blue;

`


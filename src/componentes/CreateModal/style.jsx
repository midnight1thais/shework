import styled from 'styled-components';


export const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #1d1d1f88;
    z-index: 1000;
`

  
export const ContainerModal = styled.div`
    display: flex;
    flex-direction: column;

    position: fixed;
    margin-top: 15vh;
    margin-left: 15vw;
    padding: 60px;
    background-color: #324176;
    border-radius: 10px;
    color: black;

    

`

export const ContainerTop = styled.div`
    display: flex;
    justify-content: center;
`
export const ContainerMid = styled.div`
    display: flex;
    flex-direction: row;
    

`

export const TitleDes = styled.h1`
    display: flex;
    align-self: center;

    color: #FFF;
    font-family: 'Poppins';
    font-size: 22px;
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
    width: 20vw;
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
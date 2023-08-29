import styled from 'styled-components';

export const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 15vh;
    width: 100%;
    gap: 2vh;
    padding-top: 2vh;
    
    background-color: rgba(8, 26, 92, 0.61);
    opacity: 0.8;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const BigTitle = styled.h1`
    color: #FFF;
    font-family: 'Roboto';
    font-size: 55px;
    font-style: normal;
    font-weight: 600;
    line-height: 90.909%;
    letter-spacing: 5.5px;
`

export const LittleTitle = styled.p`
    color: rgba(255, 255, 255, 0.49);
    font-family: 'Work Sans';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const ContainerSearch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 10vh;
    width: 70vw;
    margin-top: 6vh;
    margin-left: 15vw;
    
    border-radius: 30px;
    

    opacity: 0.6;
    background: #345274;
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: row;
    height: 6vh;
    width: 30vw;

    gap: 2vw;
    margin-left: 2vw;
    padding: 10px;
    align-items: center;

    border-radius: 8px;
    background-color: white;
`

export const IconSearch = styled.img`
    
`

export const InputSearch = styled.input`
    width: 15vw;
    border: none;
    outline: none;
    background-color: transparent;

`

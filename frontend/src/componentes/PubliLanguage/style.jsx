import { styled } from "styled-components";

export const SectionCourse = styled.section`
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 35vw;
`

export const HeaderCourse = styled.div`
    display: flex;
    flex-direction: row;
`

export const DivIcon = styled.div`
    display: flex;
    justify-content: center;
    max-width: 5.5vw;
    max-height: 7vh;
    width: 5.5vw;
    height: 7vh;
    border-radius: 10px;
    background-color:#B8C4D2;
`

export const IconProfile = styled.img`
   display: flex;
   align-self: center;
   max-width: 5.5vw;
   max-height: 7vh;
   width: 4.4vw;
   height: 6vh;
`

export const TextCourse = styled.p`
    display: flex;
    align-self: center;
    margin-left: 2vw;

    color: #000;
    font-family: 'Poppins';
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.32px;
`

export const DivCourse = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 3vh;
    margin-left: 2vw;

    width: 30vw;
    height: 40vh;
    max-width: 30vw;
    max-height: 40vh;
    flex-shrink: 0;

    border-radius: 16px;
    background-color: #E9E7EA;
    box-shadow: 0px 4px 10px 0px #000;

    overflow: auto;

    &::-webkit-scrollbar {
        width: 8px;
        padding-top: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: #B8C4D2; /* Cor do polegar da barra de rolagem */
        border-radius: 4px; /* Borda do polegar da barra de rolagem */
    }
    
    &::-webkit-scrollbar-track {
        background-color: transparent; /* Cor de fundo da barra de rolagem */
        border-radius: 8px; /* Borda da barra de rolagem */
        height: 27vh;
    }


`

export const DivLeftA = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2vh;
    margin-left: 1.5vw;
    gap: 2vh;
`

export const DivTextA = styled.div`

`

export const TextLeft = styled.p`
    color: #000;
    font-family: 'Poppins';
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.24px;
    opacity: 0.5;
`

export const SubTextLeft = styled.p`
    color: #000;
    font-family: 'Poppins';
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.24px;
`


export const DivRightA = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10vw;
    margin-top: 2vh;
    gap: 2vh;
`
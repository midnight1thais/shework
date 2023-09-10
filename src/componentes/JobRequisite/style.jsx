import { styled } from "styled-components";

export const SectionInfo = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    width: 70vw;
    margin-left: 2vw;
`

export const HeaderInfo = styled.div`
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
   width: 4.7vw;
   max-width: 5.5vw;
   max-height: 7vh;
`

export const TextInfo = styled.p`
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

export const DivInfo = styled.div`
    display: flex;
    flex-direction: row;
`

export const DivContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 3vh;
    gap: 3vw;
    width: 96vw;
    height: 70vh;
`

export const DivRe = styled.div`
    display: flex;
    flex-direction: column;
    width: 35vw;
    max-width: 35vw;
    max-height: 70vh;
    margin-left: 9vw;
    gap: 3vh;

    border-radius: 14px;
    background-color: #3D548D;

    /* Adicione overflow:auto para adicionar uma barra de rolagem quando necessário */
    overflow: auto;
    
    /* Estilização da barra de rolagem (Google Chrome) */
    scrollbar-width: thin;
    scrollbar-color:  #B8C4D2;
    
    /* Estilização da barra de rolagem (Webkit Browsers) */
    &::-webkit-scrollbar {
        width: 8px;
        max-height: 2vh;
    }
    
    &::-webkit-scrollbar-thumb {
        height: 2px; 
        background-color: #B8C4D2; /* Cor do polegar da barra de rolagem */
        border-radius: 4px; /* Borda do polegar da barra de rolagem */
    }
    
    &::-webkit-scrollbar-track {
        background-color: transparent; /* Cor de fundo da barra de rolagem */
        border-radius: 8px; /* Borda da barra de rolagem */
    }
`

export const TitleRe = styled.h1`
    display: flex;
    align-self: center;
    color: #FFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Poppins';
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.32px;

    margin-top: 2vh;
    margin-bottom: 4vh;
`

export const SubRe = styled.p`
    margin-left: 3vw;

    color: #FFF;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Be Vietnam Pro';
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 25px; 
`
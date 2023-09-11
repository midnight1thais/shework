import styled from 'styled-components';
import BackImg from '../../assets/CorpoProjectImg.png'


export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4vh;
    
    gap: 4vh;

    max-width: 67vw;
    width: 67vw;
    height: 80vh;
    flex-shrink: 0;


    background-image: url(${BackImg});
    background-color:transparent;
    
`

export const DivText = styled.div`
    width: 40vw;
    max-width: 50vw;
    height: 80vh;
    opacity: 0.9;
    background: #D9D9D9;
`

export const TextA = styled.p`
    color: #2F2D2D;
    font-family: 'Poppins';
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.32px;

    margin-top: 6vh;
    margin-left: 4vw;
    margin-right: 6vw;
`

export const SubTitle = styled.p`
    text-align: justify;
    color: #000F2D;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Be Vietnam Pro';
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: 23px; /* 127.778% */

    margin-top: 6vh;
    margin-left: 4vw;
    margin-right: 6vw;
`
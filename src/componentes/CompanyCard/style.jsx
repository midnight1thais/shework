import styled from 'styled-components';


export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4vh;
    gap: 4vh;

    width: 23vw;
    height: 40vh;
    flex-shrink: 0;

    border-radius: 16px;
    background: #FFF;
    box-shadow: 0px 4px 10px 0px #000;
    
`

export const Icon = styled.img`
    display: flex;
    align-self: center;
    margin-top: 2vh;
    
    width: 165px;
    height: 140px;
    flex-shrink: 0;
`

export const Text = styled.p`
    color: #243D5A;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Be Vietnam Pro';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
`
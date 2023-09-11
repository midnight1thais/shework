import styled from 'styled-components';


export const ContainerCard = styled.div`
    display: flex;
    margin-top: 4vh;
    margin-left: 2vw;
    margin-right: 2vw;
    gap: 4vh;

    width: 95%;
    height: 30vh;
    flex-shrink: 0;

    border-radius: 16px;
    background: #FFF;
    box-shadow: 0px 4px 10px 0px #000;
    
`

export const ContainerAll = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4vh;
`

export const ContainerTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Date = styled.p`
    
`

export const Service = styled.p`
    
`

export const Title = styled.h1`
    color: #243D5A;
    text-align: left;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Be Vietnam Pro';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
`

export const Icon = styled.img`
    display: flex;
    align-self: center;
    margin-left: 2vh;
    
    width: 12.5vw;
    height: 22vh;
    flex-shrink: 0;

    border-radius: 16px;
    background: #FFF;
    box-shadow: 0px 4px 10px 0px #000;
`

export const Description = styled.p`
    color: #000;
    text-align: left;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Be Vietnam Pro';
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
`
export const ButtonPubli = styled.button`
    width: 19vw;
    height: 9vh;
    flex-shrink: 0;
    margin-top: 2vh;
    margin-left: 7.3vw;

    border-radius: 19px;
    background: #345274;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    color: #FFF;
    text-align: center;
    font-family: 'Work Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const ContainerLink = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 3vh;
    margin-left: 7.6vw;
    gap: 1vw;
`

export const LinkA = styled.button`

    color: rgba(0, 0, 0, 0.49);
    font-family: 'Work Sans';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const ContainerImg = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2vh;
    gap: 4vh;
`

export const ButtonRight = styled.button`
    border-style: none;
    background-color: transparent;
    
`
export const IconRight = styled.img`
    display: flex;
    margin-right: 3vw;
`
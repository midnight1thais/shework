import styled from 'styled-components';


export const ContainerCard = styled.div`
    display: flex;
    margin-top: 2vh;
    margin-bottom: 2vh;
    margin-left: 2vw;
    gap: 3vh;

    width: 58vw;
    height: 20vh;
    flex-shrink: 0;

    border-radius: 16px;
    background: #FFF;
    box-shadow: 0px 4px 10px 0px #000;
    
`

export const ContainerAll = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2vh;
    margin-left: 2vw;
    gap: 2vh;
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
    margin-top: 2vh;
    margin-left: 2vh;
    
    width: 10vw;
    height: 25vh;
    flex-shrink: 0;
`

export const Description = styled.p`

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
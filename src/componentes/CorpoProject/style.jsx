import styled from 'styled-components';

export const ContainerText = styled.div`
    display: flex;
    justify-content: right;
    background-color: #9AACC1;
    width: 17vw;
    border-radius: 0px 10px 10px 0px;
    margin-bottom: 15vh;
`

export const TextRight = styled.p`
    margin-right: 3vw;

    color: #000;
    font-family: 'Poppins';
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.32px;
`

export const ContainerCarousel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const ButtonBack = styled.button`
    margin-right: 4vw;
    
`

export const ArrowBack = styled.img`
    width: 10vw;
    height: 10vh;

`

export const ButtonNext = styled.button`
    margin-left: 4vw;
`

export const ArrowNext = styled.img`
    width: 10vw;
    height: 10vh;

    transform: rotate(180deg);
`

export const ContainerCards = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5vw;
`

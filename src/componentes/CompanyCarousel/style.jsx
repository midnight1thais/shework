import styled from 'styled-components';


export const ContainerCarousel = styled.div`
    display: flex;
    flex-direction: row;
`

export const ButtonBack = styled.button`
    margin-right: 4vw;
    
`

export const ArrowBack = styled.img`
    width: 6vw;
    height: 6vh;
`

export const ButtonNext = styled.button`
    margin-left: 4vw;
`

export const ArrowNext = styled.img`
    width: 6vw;
    height: 6vh;

    transform: rotate(180deg);
`


export const ContainerCards = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5vw;
`

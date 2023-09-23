import styled from 'styled-components';

export const ContainerCarousel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const DotContainer = styled.div`
    display: flex;
    gap: 8vw;
    margin-top: 3vh; 
`

export const ContainerCards = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5vw;
`

export const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => (props.isActive ? '#243D5A' : '#C1C1C1')};
    margin: 0 6px;
    cursor: pointer;
`

export const ActiveDot = styled.div`
    width: 10px;
    background-color: #243d5a;
    border-radius: 50%;
`

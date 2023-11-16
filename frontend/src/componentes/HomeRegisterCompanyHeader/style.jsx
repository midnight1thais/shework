import styled from 'styled-components';

export const HeaderGlobal = styled.header`
    display: flex;
    flex-direction: row;
    gap: 22vw;
    
    height: 10vh;
    width: 100%;
    
    background-color: transparent;
    
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 4rem;
`

export const ItemMenu = styled.button`
    color: #FFF;
    font-family: 'Work Sans';
    font-size: 80%;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const ProfileDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1em;
    margin-right: 3%;
    width: 20vw;
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    margin-right: 3%;
`


export const NameProfile = styled.button`
    display: flex;
    align-items: left;
    margin-top: 1vh;
    width: 12vw;
    color: #FFF;
    font-family: 'Poppins';
    font-size: 90%;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`


export const DesProfile = styled.p`

    color: #FFF;
    font-family: 'Work Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.4px;
`

export const LogoStyle = styled.img`
    width: 15vw;
    height: 10vh;

`
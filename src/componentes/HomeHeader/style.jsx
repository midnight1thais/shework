import styled from 'styled-components';

export const HeaderGlobal = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    height: 10vh;
    width: 100%;
    
    background-color: transparent;
    
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 4rem;
`;

export const ItemMenu = styled.button`
    color: #FFF;
    font-family: 'Work Sans';
    font-size: 80%;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const JoinButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1em;
    margin-right: 3%;
`
export const LoginButton = styled.button`
    color: #FFF;
    font-family: 'Work Sans';
    font-size: 90%;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
export const RegisterButton = styled.button`
    width: 10vw;
    height: 5vh;
    margin-top: 2.5vh;
   

    background-color: #6A84E0;
    box-shadow: 2px 3px 7px #0000005f;
    

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
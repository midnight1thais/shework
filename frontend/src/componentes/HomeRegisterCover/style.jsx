import styled from 'styled-components';

import MulherFundo from '../../assets/MulherFundoA.png'

export const Background = styled.div`
    background-image: url(${MulherFundo});
    background-repeat: no-repeat;
    color:  rgba(14, 6, 58, 0.651);
    height: 173vh;
    width: 100%;


    display: flex;
    flex-direction: column;
`

export const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    margin-left: 48%;
    margin-top: 55vh;
`

export const Title = styled.h1`
    color: #3D548D;
    font-family: 'Roboto';
    font-size: 110px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-shadow: inset 0px 0px 10px rgba(0, 0, 0, 2);
`

export const Description = styled.p`
    color: #B6C0E4;
    font-family: 'Lato';
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; 
    letter-spacing: 0.3px;
`
import React from 'react';
import { Background, Description, Title, TitleDiv } from './style';
import HomeRegisterHeader from '../HomeRegisterHeader/HomeRegisterHeader';


function HomeRegisterCover() {
    return(
        <Background>
            <HomeRegisterHeader/>
            <TitleDiv>
                <Title>Empregando</Title>
                <Title>Mulheres</Title>
                
                <Description>
                    Aqui buscamos auxiliar na busca por 
                </Description>
                <Description>
                    empregos gerais e dentro da TI
                </Description>
            </TitleDiv>

        </Background>
    )
}

export default HomeRegisterCover
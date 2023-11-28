import React from 'react';
import HomeHeader from '../HomeHeader/HomeHeader';
import { Background, Description, Title, TitleDiv } from './style';


function HomeCover() {
    return(
        <Background>
            <HomeHeader/>
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

export default HomeCover
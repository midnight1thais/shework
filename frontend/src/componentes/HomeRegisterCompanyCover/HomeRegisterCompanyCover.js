import React from 'react';
import { Background, Description, Title, TitleDiv } from './style';
import HomeRegisterCompanyHeader from '../HomeRegisterCompanyHeader/HomeRegisterCompanyHeader';


function HomeRegisterCompanyCover() {
    return(
        <Background>
            <HomeRegisterCompanyHeader/>
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

export default HomeRegisterCompanyCover
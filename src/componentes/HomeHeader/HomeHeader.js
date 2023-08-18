import React from 'react';
import { HeaderGlobal, Menu, ItemMenu, JoinButtons, LoginButton, RegisterButton, LogoStyle } from './style'
import Logo from '../../assets/Logo.svg'

function HomeHeader() {

    return(
        <>
        <HeaderGlobal>
        <LogoStyle src={Logo} alt=''/>

        <Menu>
            <ItemMenu>Home</ItemMenu>
            <ItemMenu>Publicações</ItemMenu>
            <ItemMenu>Experiências</ItemMenu>
        </Menu>
        
        <JoinButtons>
            <LoginButton>Entrar</LoginButton>
            <RegisterButton>Cadastrar</RegisterButton>
        </JoinButtons>

        </HeaderGlobal>
        </>
    )
}

export default HomeHeader
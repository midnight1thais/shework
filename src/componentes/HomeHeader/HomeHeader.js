import React from 'react';
import { HeaderGlobal, Menu, ItemMenu, JoinButtons, LoginButton, RegisterButton, LogoStyle } from './style'
import Logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom';

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
            <LoginButton><Link to='/login'>Entrar</Link></LoginButton>
            <RegisterButton>Cadastrar</RegisterButton>
        </JoinButtons>

        </HeaderGlobal>
        </>
    )
}

export default HomeHeader
import React from 'react';
import { HeaderGlobal, Menu, ItemMenu, LogoStyle, Description, NameProfile, DesProfile, ProfileDiv } from './style'
import Logo from '../../assets/Logo.svg'
import HomeRegisterProfile from '../HomeRegisterProfile/HomeRegisterProfile';

function HomeRegisterHeader() {

    return(
        <>
        <HeaderGlobal>
        <LogoStyle src={Logo} alt=''/>

        <Menu>
            <ItemMenu>Home</ItemMenu>
            <ItemMenu>Publicações</ItemMenu>
            <ItemMenu>Experiências</ItemMenu>
        </Menu>
        
        <ProfileDiv>
            <HomeRegisterProfile/>
            <Description>
                <NameProfile>Anna George</NameProfile>
                <DesProfile>Serviços Gerais</DesProfile>
            </Description>
        </ProfileDiv>

        </HeaderGlobal>
        </>
    )
}

export default HomeRegisterHeader
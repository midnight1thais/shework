import React, {useState} from 'react';
import { HeaderGlobal, Menu, ItemMenu, LogoStyle, Description, NameProfile, DesProfile, ProfileDiv } from './style'
import Logo from '../../assets/Logo.svg'
import HomeRegisterProfile from '../HomeRegisterProfile/HomeRegisterProfile';
import PersonModal from '../PersonModal/PersonModal';

function HomeRegisterHeader() {

    const [openModal, setOpenModal] = useState(false);
    const userIdName = localStorage.getItem('@Auth:user_name')
    const userIdCategoria = localStorage.getItem('@Auth:user_categoria')
    

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
                <NameProfile onClick={() => setOpenModal(true)}>{userIdName}</NameProfile>
                <DesProfile>{userIdCategoria}</DesProfile>
                <PersonModal  
                    isOpen={openModal}
                    setModalOpen={() => setOpenModal(!openModal)}
                />
            </Description>
        </ProfileDiv>

        </HeaderGlobal>
        </>
    )
}

export default HomeRegisterHeader
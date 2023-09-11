import React, {useState} from 'react';
import { HeaderGlobal, Menu, ItemMenu, LogoStyle, Description, NameProfile, DesProfile, ProfileDiv } from './style'
import Logo from '../../assets/Logo.svg'
import HomeRegisterProfile from '../HomeRegisterProfile/HomeRegisterProfile';
import CompanyModal from '../CompanyModal/CompanyModal';

function HomeRegisterCompanyHeader() {

    const [openModal, setOpenModal] = useState(false);


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
                <NameProfile onClick={() => setOpenModal(true)}>Technology Company</NameProfile>
                <DesProfile>Empresa</DesProfile>
                <CompanyModal  
                    isOpen={openModal}
                    setModalOpen={() => setOpenModal(!openModal)}
                />
            </Description>
        </ProfileDiv>

        </HeaderGlobal>
        </>
    )
}

export default HomeRegisterCompanyHeader
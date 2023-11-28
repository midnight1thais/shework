import React, {useEffect, useState} from 'react';
import { HeaderGlobal, Menu, ItemMenu, LogoStyle, Description, NameProfile, DesProfile, ProfileDiv } from './style'
import Logo from '../../assets/Logo.svg'
import HomeRegisterProfile from '../HomeRegisterProfile/HomeRegisterProfile';
import CompanyModal from '../CompanyModal/CompanyModal';
import { api } from '../../services/api';

function HomeRegisterCompanyHeader() {

    const [openModal, setOpenModal] = useState(false);
    const userIdName = localStorage.getItem('@Auth:user_name')
    const userIdCategoria = localStorage.getItem('@Auth:user_categoria')
    const userId =  localStorage.getItem('@Auth:user_id')

    const [infos, setInfos] = useState('');

    useEffect(() => {
        async function fetchPublis() {
            try {
                // const response = await api.get(`/publiperson/` + userId); 
                // setInfos(response.data.data);

                const response = await api.get(`/company/companyGet/${userId}`);
                console.log('tentando pegar publicacao empresa', response.data);
                    // Reorna da API com as chaves
                    if (response.data.success === true) {
                        const publiEmpresa = response.data.data[0].id_publiEmpresa;
                        localStorage.setItem("@Auth:publiCompany_id", publiEmpresa); 
                        console.log('companyGet', response.data.data[0].id_publiEmpresa);
                    } else {
                        console.log('deu problem')
                    }  
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da publi:', error);
            }
        }
  
        fetchPublis();
    }, [userId]);


    // const response = await api.get(`/company/companyGet/${userId}`);
    // console.log('tentando pegar publicacao empresa', response.data);
    //     // Reorna da API com as chaves
    //     if (response.data.success === true) {
    //         // const publiEmpresa = response.data.data[0].id_publiEmpresa;
    //         // localStorage.setItem("@Auth:publiCompany_id", publiEmpresa); 
    //         // console.log('companyGet', response.data.data[0].id_publiEmpresa);
    //         alert('entrou no true')
    //     } else if (response.data.success === false) {
    //         alert('te manda bro')
    //     }  

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
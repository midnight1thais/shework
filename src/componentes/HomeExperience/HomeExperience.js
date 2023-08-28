import ExperienceCarousel from "../ExperienceCarousel/ExperienceCarousel"
import { BigTitle, ContainerAction, ContainerCarousel, ContainerEmail, ContainerExperience, ContainerShare, ContainerTitle, InputTitle, InputWrite, LittleTitle, TextEmail } from './style'


function HomeExperience(){

    return(
        <>
        <ContainerExperience>
            <ContainerTitle>
                <BigTitle>Conte sua experiência</BigTitle>
                <LittleTitle>Aqui mostramos a experiência de alguns dos nossos clientes</LittleTitle>
            </ContainerTitle>
            <ContainerAction>
                <ContainerShare>
                    <InputTitle>Compartilhe a sua!</InputTitle>
                    <InputWrite placeholder='Escreva aqui'/>
                </ContainerShare>
                <ContainerCarousel>
                    <ExperienceCarousel/>
                </ContainerCarousel>
            </ContainerAction>
        </ContainerExperience>
        <ContainerEmail>
                <TextEmail>sheworkempresa@gmail.com</TextEmail>
        </ContainerEmail>
        </>
    )
}

export default HomeExperience
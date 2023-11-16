import HomeCompany from "../../componentes/HomeCompany/HomeCompany"
import HomeExperience from "../../componentes/HomeExperience/HomeExperience"
import HomePerson from "../../componentes/HomePerson/HomePerson"
import HomeRegisterCompanyCover from "../../componentes/HomeRegisterCompanyCover/HomeRegisterCompanyCover";

function HomeRegisterCompany(){
    document.body.style.overflow = 'hidden'; //  Corta o conteúdo que ultrapassa o tamanho da DIV

    return(
        <>
            <HomeRegisterCompanyCover/>
            <HomeCompany/>
            <HomePerson/>
            <HomeExperience/>
        </>
    )
}

export default HomeRegisterCompany
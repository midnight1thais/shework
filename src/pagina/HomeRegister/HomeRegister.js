import HomeCompany from "../../componentes/HomeCompany/HomeCompany"
import HomeExperience from "../../componentes/HomeExperience/HomeExperience"
import HomePerson from "../../componentes/HomePerson/HomePerson"
import HomeRegisterCover from "../../componentes/HomeRegisterCover/HomeRegisterCover"

function HomeRegister(){
    return(
        <>
            <HomeRegisterCover/>
            <HomeCompany/>
            <HomePerson/>
            <HomeExperience/>
        </>
    )
}

export default HomeRegister
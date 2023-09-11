import HomeCompany from "../../componentes/HomeCompany/HomeCompany"
import HomeExperience from "../../componentes/HomeExperience/HomeExperience"
import HomePerson from "../../componentes/HomePerson/HomePerson"
import HomeRegisterCompanyCover from "../../componentes/HomeRegisterCompanyCover/HomeRegisterCompanyCover";

function HomeRegisterCompany(){


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
import HomeCompany from "../../componentes/HomeCompany/HomeCompany"
import HomeCover from "../../componentes/HomeCover/HomeCover"
import HomeExperience from "../../componentes/HomeExperience/HomeExperience"
// import HomeHeader from "../../componentes/HomeHeader/HomeHeader"
import HomePerson from "../../componentes/HomePerson/HomePerson"

function Home(){
    return(
        <>
        
            <HomeCover/>
            <HomeCompany/>
            <HomePerson/>
            <HomeExperience/>
        </>
    )
}

export default Home
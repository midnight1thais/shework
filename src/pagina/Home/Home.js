import HomeCompany from "../../componentes/HomeCompany/HomeCompany"
import HomeCover from "../../componentes/HomeCover/HomeCover"
import HomeHeader from "../../componentes/HomeHeader/HomeHeader"
import HomePerson from "../../componentes/HomePerson/HomePerson"

function Home(){
    return(
        <>
        
            <HomeHeader/>
            <HomeCover/>
            <HomeCompany/>
            <HomePerson/>
        </>
    )
}

export default Home
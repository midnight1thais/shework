import HomeCompany from "../../componentes/HomeCompany/HomeCompany"
import HomeCover from "../../componentes/HomeCover/HomeCover"
import HomeHeader from "../../componentes/HomeHeader/HomeHeader"

function Home(){
    return(
        <>
        
            <HomeHeader/>
            <HomeCover/>
            <HomeCompany/>
        </>
    )
}

export default Home
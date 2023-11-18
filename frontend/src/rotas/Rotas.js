import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pagina/Home/Home'
import Login from '../pagina/Login/Login'
import HomeRegister from "../pagina/HomeRegister/HomeRegister";
import Register from "../pagina/Register/Register";
import ExploreCompany from '../pagina/ExploreCompany/ExploreCompany'
import ExplorePerson from '../pagina/ExplorePerson/ExplorePerson'
import CreatePubli from '../pagina/CreatePubli/CreatePubli'
import CreateJob from '../pagina/CreateJob/CreateJob'
import Corporation from '../pagina/Corporation/Corporation'
import JobCompany from '../pagina/JobCompany/JobCompany'
import PubliPerson from '../pagina/PubliPerson/PubliPerson'
import HomeRegisterCompany from "../pagina/HomeRegisterCompany/HomeRegisterCompany";

function Rotas(){

    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="homeRegister" element={<HomeRegister/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="exploreCompany" element={<ExploreCompany/>}/>
            <Route path="explorePerson" element={<ExplorePerson/>}/>
            <Route path="createPubli" element={<CreatePubli/>}/>
            <Route path="createJob" element={<CreateJob/>}/>
            <Route path="corporation" element={<Corporation/>}/>
            <Route path="jobCompany" element={<JobCompany/>}/>
            <Route path="publiPerson/:id" element={<PubliPerson/>}/>
            <Route path="homeRegisterCompany" element={<HomeRegisterCompany/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas
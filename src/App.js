import React from 'react';
import StyledGlobal from "./styledGlobal";
import { ChakraProvider } from '@chakra-ui/react'
import Rotas from './rotas/Rotas';

// import Login from './pagina/Login/Login';
// import Register from './pagina/Register/Register';
// import Home from './pagina/Home/Home'
// import HomeRegister from './pagina/HomeRegister/HomeRegister';
// import CreateJob from './pagina/CreateJob/CreateJob';
// import CreatePubli from './pagina/CreatePubli/CreatePubli';
// import PubliPerson from './pagina/PubliPerson/PubliPerson';
// import JobCompany from './pagina/JobCompany/JobCompany';
// import PubliCompany from './pagina/PubliCompany/PubliCompany';
// import Corporation from './pagina/Corporation/Corporation';

function App() {
  return (
    <>
      <ChakraProvider>
        <StyledGlobal />
        {/* <PubliCompany/> */}
        {/* <CreatePubli/> */}
        {/* <Home/> */}
        {/* <HomeRegister/> */}
        {/* <Register /> */}
        {/* <Login/> */}
        {/* <PubliPerson/> */}
        {/* <JobCompany/> */}
        {/* <Corporation/> */}
        {/* <CreateJob/> */}
        <Rotas/>
      </ChakraProvider>
    </>
  );
}

export default App;

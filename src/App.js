import React from 'react';
import StyledGlobal from "./styledGlobal";
import { ChakraProvider } from '@chakra-ui/react'

// import Login from './pagina/Login/Login';
// import Register from './pagina/Register/Register';
// import Home from './pagina/Home/Home'
// import CreatePubli from './pagina/CreatePubli/CreatePubli';
// import PubliPerson from './pagina/PubliPerson/PubliPerson';
// import JobCompany from './pagina/JobCompany/JobCompany';
// import PubliCompany from './pagina/PubliCompany/PubliCompany';
import Corporation from './pagina/Corporation/Corporation';

function App() {
  return (
    <>
      <ChakraProvider>
        <StyledGlobal />
        {/* <PubliCompany/> */}
        {/* <CreatePubli/> */}
        {/* <Home/> */}
        {/* <Register /> */}
        {/* <Login/> */}
        {/* <PubliPerson/> */}
        {/* <JobCompany/> */}
        <Corporation/>
      </ChakraProvider>
    </>
  );
}

export default App;

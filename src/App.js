import React from 'react';
import StyledGlobal from "./styledGlobal";
import { ChakraProvider } from '@chakra-ui/react'

// import Login from './pagina/Login/Login';
// import Register from './pagina/Register/Register';
// import Home from './pagina/Home/Home'
// import PubliPerson from './pagina/PubliPerson/PubliPerson';
import CreatePubli from './pagina/CreatePubli/CreatePubli';


function App() {
  return (
    <>
      <ChakraProvider>
        <StyledGlobal />
        <CreatePubli/>
        {/* <PubliPerson/> */}
        {/* <Home/> */}
        {/* <Register /> */}
        {/* <Login/> */}
      </ChakraProvider>
    </>
  );
}

export default App;

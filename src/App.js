import React from 'react';
// import Login from './pagina/Login/Login';
import Register from './pagina/Register/Register';

import StyledGlobal from "./styledGlobal";
import { ChakraProvider } from '@chakra-ui/react'



function App() {
  return (
    <>
      <ChakraProvider>
        <StyledGlobal />
        <Register />
        {/* <Login/> */}
      </ChakraProvider>
    </>
  );
}

export default App;

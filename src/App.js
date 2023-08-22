import React from 'react';
import StyledGlobal from "./styledGlobal";
import { ChakraProvider } from '@chakra-ui/react'

// import Login from './pagina/Login/Login';
// import Register from './pagina/Register/Register';
import Home from './pagina/Home/Home'


function App() {
  return (
    <>
      <ChakraProvider>
        <StyledGlobal />
        <Home/>
        {/* <Register /> */}
        {/* <Login/> */}
      </ChakraProvider>
    </>
  );
}

export default App;

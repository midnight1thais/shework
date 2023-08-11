import React from 'react';
import StyledGlobal from "./styledGlobal";
import { ChakraProvider } from '@chakra-ui/react'

// import Login from './pagina/Login/Login';
// import Register from './pagina/Register/Register';
import Header from './componentes/Header/Header';
import Cover from './componentes/Cover/Cover'

function App() {
  return (
    <>
      <ChakraProvider>
        <StyledGlobal />
        <Header/>
        <Cover/>
        {/* <Register /> */}
        {/* <Login/> */}
      </ChakraProvider>
    </>
  );
}

export default App;

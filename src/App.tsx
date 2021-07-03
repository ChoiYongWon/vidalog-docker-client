import React from 'react';
import { RouterIndex } from "./routes/index"
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  html, body {
    width : 100%;
    height : 100%;
    padding : 0;
    margin : 0;
  }
`

function App() {
  return (
    <>
        <GlobalStyle/>
        <RouterIndex/>
    </>
  );
}

export default App;

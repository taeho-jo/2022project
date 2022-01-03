import React from 'react';

// Router
import { useRoutes } from "react-router-dom";
import routes from "./router";
// Styles
import { Global } from "@emotion/react";
import reset from './assets/styles/Global.styles';

function App() {

  const routing = useRoutes(routes())

  return (
    <>
      <Global styles={reset}/>
      {routing}
    </>

  );
}



export default App;

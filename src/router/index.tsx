import React from 'react'

// Components
import Main from "../pages/Main";
import Counter from '../pages/couter/Counter'
import Recharts from "../pages/recharts/Recharts";
import NivoChart from '../pages/nivo/NivoChart'

// Types
import { ReactElement } from "react";
interface routeType {
  path: string,
  element: ReactElement,
  children?: Array<routeType>
}

const routes = (): Array<routeType> => {
  const route = [
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/calculator',
      element: <Counter />,
    },
    {
      path: '/recharts',
      element: <Recharts />,
    },
    {
      path: '/nivo',
      element: <NivoChart />,
    },
  ]

  return route
}

export default routes;

import React from 'react'

// Components
import Main from "../pages/Main";
import Counter from '../pages/couter/Counter'
import Recharts from "../pages/recharts/Recharts";
import NivoChart from '../pages/nivo/NivoChart'

// Types
import { ReactElement } from "react";
import MiniTodoList from "../pages/miniTodoList/MiniTodoList";
import HookForm from "../pages/hookForm/HookForm";
import StoryBook from "../pages/story/StoryBook";
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
      path: '/counter',
      element: <Counter />,
    },
    {
      path: '/todo',
      element: <MiniTodoList />,
    },
    {
      path: '/form',
      element: <HookForm />,
    },
    {
      path: '/storybook',
      element: <StoryBook />,
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

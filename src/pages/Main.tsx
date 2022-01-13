/** @jsxImportSource @emotion/react */
import React, {useCallback} from 'react'

// Router
import { useNavigate } from "react-router-dom";

// Styles
import {Wrapper, MainContainer} from "./main.styles";
import HomeCard from "../components/common/HomeCard";

// Images
import calcImg from '../assets/images/calc.png'
import todoImg from '../assets/images/todo.png'
import hookForm from '../assets/images/hookform.png'
import rechartImg from '../assets/images/rechart.png'
import nivoImg from '../assets/images/nivo.png'
import storybook from '../assets/images/storybook.png'

// Types
interface MainCardType {
  img: string,
  alt: string,
  title: string
}
interface Atype {
  id: string,
  task: number[],
  loading: boolean
}

// Data
const MAIN_HOME_CARD: Array<MainCardType> = [
  {img: calcImg, alt: 'counter', title: 'Counter'},
  {img: todoImg, alt: 'todo', title: 'Mini Todo List'},
  {img: hookForm, alt: 'form', title: 'React Hook Form'},
  {img: storybook, alt: 'storybook', title: 'Story Book'},
  {img: rechartImg, alt: 'recharts', title: 'Recharts Test'},
  {img: nivoImg, alt: 'nivo', title: 'Nivo Chart Test'},
]

const Main = () => {
  const navigate = useNavigate();

  const handleNavigate = useCallback((url): void => {
    navigate(url)
  },[])

  return (
    <MainContainer>
      <Wrapper>
        {MAIN_HOME_CARD.map((item, index) => {
          return (
            <HomeCard
              key={index}
              imgSrc={item.img}
              imgAlt={item.alt}
              title={item.title}
              handleNavigate={handleNavigate} />
          )
        })}
      </Wrapper>
    </MainContainer>

  )
}

export default Main;

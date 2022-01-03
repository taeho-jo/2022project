/** @jsxImportSource @emotion/react */
import React, {useCallback} from 'react'

// Router
import { useNavigate } from "react-router-dom";

// Styles
import {Wrapper, MainContainer} from "./main.styles";
import HomeCard from "../components/HomeCard";

// Images
import calcImg from '../assets/images/calc.png'
import rechartImg from '../assets/images/rechart.png'
import nivoImg from '../assets/images/nivo.png'


const Main = () => {
  const navigate = useNavigate();

  const handleNavigate = useCallback((url): void => {
    navigate(url)
  },[])

  return (
    <MainContainer>
      <Wrapper>
        <HomeCard
          imgSrc={calcImg}
          imgAlt={'calculator'}
          title={'Redux calculator Test'}
          handleNavigate={handleNavigate} />
        <HomeCard
          imgSrc={rechartImg}
          imgAlt={'recharts'}
          title={'Recharts Test'}
          handleNavigate={handleNavigate} />
        <HomeCard
          imgSrc={nivoImg}
          imgAlt={'nivo'}
          title={'Nivo Chart Test'}
          handleNavigate={handleNavigate} />
      </Wrapper>
    </MainContainer>

  )
}

export default Main;

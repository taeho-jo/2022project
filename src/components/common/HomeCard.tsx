/** @jsxImportSource @emotion/react */
import React from 'react'

// Styles
import styled from "@emotion/styled";
import {CommonColor, CommonFont} from "../../assets/styles/common.styles";

// Types
interface Props {
  imgSrc: string,
  imgAlt: string,
  title: string,
  handleNavigate(url: string): void
}

const HomeCard = ({imgSrc, imgAlt, title, handleNavigate}: Props) => {

  return (
    <DivBox>
      <InnerDivBox onClick={() => handleNavigate(imgAlt)}>
        <div className='flex-2'>
          <img src={imgSrc} alt={imgAlt}/>
        </div>

        <div className='flex-1'>
          <span>{title}</span>
        </div>

      </InnerDivBox>
    </DivBox>
  )
}

export default HomeCard;

const DivBox = styled.div`
  width: 25%;
  height: 300px;
  padding: 0.75rem;
  @media (max-width: 1280px) {
    width: 33.3333%;
  }
  @media (max-width: 960px) {
    width: 50%;
  }
  @media (max-width: 628px) {
    width: 100%;
  }
`
const InnerDivBox = styled.div`
  cursor: pointer;
  border: 1px solid ${CommonColor.grey3};
  border-radius: 5px;
  height: 100%;
  div.flex-1 {
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div.flex-2 {
    height: 70%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    object-fit: cover;
    width: 9rem;
  }
  span {
    display: inline-block;
    width: 100%;
    font-size: ${CommonFont.fs24};
    text-align: center;
  }
`


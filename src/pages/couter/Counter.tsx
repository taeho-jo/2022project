/** @jsxImportSource @emotion/react */
import React, { useCallback } from 'react'

// Components
import PageHeader from "../../components/common/PageHeader";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { ReducerType } from "../../store/reducers/rootReducer";
import { increment, decrement, incrementByAmount, decrementByAmount} from "../../store/reducers/couterReducer";

// Styles
import styled from "@emotion/styled";
import { CommonFont, CommonColor } from "../../assets/styles/common.styles";

const Counter = () => {

  const counterNumber = useSelector<ReducerType, number>(state => state.counter.value)
  const dispatch = useDispatch()

  const add = useCallback(() => {
    dispatch(increment())
  },[counterNumber])

  const minus = useCallback(() => {
    dispatch(decrement())
  },[counterNumber])

  const payloadAdd = useCallback((number: number) => {
    dispatch(incrementByAmount(number))
  },[counterNumber])

  const payloadMinus = useCallback((number: number) => {
    dispatch(decrementByAmount(number))
  },[counterNumber])

  return (
    <CounterContainer>
      <PageHeader title={'counter'}/>

      <div className='numberBox'>
        <h3>{counterNumber}</h3>
        <div>
          <button onClick={add}>+</button>
          <button onClick={() => payloadAdd(5)}>+5</button>
          <button onClick={minus}>-</button>
          <button onClick={() => payloadMinus(5)}>-5</button>
        </div>
      </div>

    </CounterContainer>
  )
}
export default Counter

const CounterContainer = styled.div`
  
  //margin-top: 20px;
  h1 {
    text-align: center;
    font-size: ${CommonFont.fs24};
    color: ${CommonColor.black};
    padding: 20px 0;
    border-bottom: 2px solid ${CommonColor.grey4};
  }
  .numberBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
  }
`

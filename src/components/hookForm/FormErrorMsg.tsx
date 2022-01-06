import React from "react";
import styled from "@emotion/styled";
import {CommonFont} from "../../assets/styles/common.styles";

interface PropsType {
  errorMsg: string
}

const FormErrorMsg = ({errorMsg}: PropsType) => {
  return (
    <ErrorMsg>{errorMsg}</ErrorMsg>
  )
}

export default FormErrorMsg

const ErrorMsg = styled('p')`
  color: #ef3b7d;
  font-size: ${CommonFont.fs12};
  padding-top: 2px;
`

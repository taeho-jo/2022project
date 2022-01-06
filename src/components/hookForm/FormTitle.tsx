import React from "react";
// Styles
import styled from "@emotion/styled";
import {CommonColor, CommonFont} from "../../assets/styles/common.styles";

interface PropsType {
  title: string
}

const FormTitle = ({title}: PropsType) => {
  return <H1>{title}</H1>
}

export default FormTitle

const H1 = styled('h1')`
  font-size: ${CommonFont.fs22};
  width: 100%;
  border-bottom: 1px solid ${CommonColor.grey4};
  text-align: center;
  padding-bottom: 10px;
`

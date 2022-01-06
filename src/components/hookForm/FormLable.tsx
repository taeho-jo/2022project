import React from "react";

import styled from "@emotion/styled";
import {CommonColor, CommonFont} from "../../assets/styles/common.styles";

interface PropsType {
  label: string
}

const FormLabel = ({label}: PropsType) => {
  return (
    <Label>{label}</Label>
  )
}

export default FormLabel

const Label = styled('label')`
  font-size: ${CommonFont.fs14};
  color: ${CommonColor.blue4};
`

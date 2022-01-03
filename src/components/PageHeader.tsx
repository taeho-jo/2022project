import React from 'react';
import styled from "@emotion/styled";
import {CommonColor, CommonFont} from "../assets/styles/common.styles";

interface Props {
  title: string
}

const PageHeader = ({title}: Props ) => {
  return (
    <HeaderTitle>{title}</HeaderTitle>
  )
}

export default PageHeader;

const HeaderTitle = styled.h1`
  text-align: center;
  font-size: ${CommonFont.fs24};
  color: ${CommonColor.black};
  padding: 20px 0;
  border-bottom: 2px solid ${CommonColor.grey4};
`

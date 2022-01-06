import React from "react";
// Components
import PageHeader from "../../components/common/PageHeader";
import FormLoginField from "../../components/hookForm/FormLoginField";
import FormRadioCheckBoxField from "../../components/hookForm/FormRadioCheckBoxField";
// Styles
import styled from "@emotion/styled";
import {CommonColor} from "../../assets/styles/common.styles";

const HookForm = () => {
  return (
    <main>
      <PageHeader title={'React Hook Form'} />

      <MainSection>
        <div className='areaDiv'>
          <FormLoginField />
        </div>

        <div className='areaDiv'>
          <FormRadioCheckBoxField />
        </div>

      </MainSection>

    </main>
  )
}

export default HookForm;

const MainSection = styled('section')`
  //background: yellow;
  display: flex;
  
  div.areaDiv {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
  }
  div.areaDiv:first-of-type {
    border-right: 1px solid ${CommonColor.grey4};
  }
  
`

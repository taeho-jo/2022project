import React from "react";

// Styles
import styled from "@emotion/styled";
import {CommonColor, CommonFont} from "../../assets/styles/common.styles";

// Libraries
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
// Types
import {Inputs, ModifyInputs} from "../../pages/miniTodoList/MiniTodoList";

interface PropsType {
  onSubmit: SubmitHandler<Inputs> | SubmitHandler<ModifyInputs>
  todoValue?: string,
  todoId?: string
}


const TodoFormField = ({onSubmit}: PropsType) => {

  const { register, handleSubmit, formState: { errors} } = useForm<Inputs>();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TodoInput autoComplete={'off'} placeholder='할 일을 등록해주세요.' {...register('todo', {required: '할 일을 등록해주세요.'})}/>
      <ErrorMessage
        errors={errors}
        name="todo"
        render={({ message }) => <ErrorMsg>{message}</ErrorMsg>}
      />
      <input type="submit" value='등록하기'/>
    </Form>
  )
}

export const ModifyTodoFormField = ({onSubmit, todoValue, todoId}: PropsType) => {
  const { register, handleSubmit, formState: { errors} } = useForm<ModifyInputs>();
  return (
    <ModifyForm onSubmit={handleSubmit(onSubmit)}>
      <TodoInput autoComplete={'off'} defaultValue={todoValue} {...register('todo', {required: '할 일을 등록해주세요.'})}/>
      <TodoInput style={{display:"none"}} defaultValue={todoId} {...register('id')}/>
      <ErrorMessage
        errors={errors}
        name="todo"
        render={({ message }) => <ErrorMsg>{message}</ErrorMsg>}
      />
      <input type="submit" value='수정하기'/>
    </ModifyForm>
  )
}

export default TodoFormField;

const Form = styled.form`
  padding: 20px 10px;
  width: 100%;
  
  input[type="submit"] {
    width: 100%;
    background: ${CommonColor.purple2};
    color: white;
    border: none;
    border-radius: 4px;
    font-size: ${CommonFont.fs16};
    padding: 10px 15px;
    margin-top: 10px;
  }
`

const ModifyForm = styled(Form)`
  display: flex;
  align-items: center;

  input[type="submit"] {
    margin-top: 0;
    flex: 1;
    margin-left: 10px;
  }
`

const TodoInput = styled.input`
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${CommonColor.grey2};
  padding: 10px 10px;
  font-size: ${CommonFont.fs14};
  outline: none;
`

const ErrorMsg = styled.p`
  color: #bf1650;
  padding-top: 10px;
  font-size: ${CommonFont.fs12};
`

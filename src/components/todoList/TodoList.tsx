import React, {Fragment, useState} from "react";
import {create, TodoType, update} from "../../store/reducers/todoReducer";

// Libraries
import { MdOutlineRemoveCircle, MdBorderColor, MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'

// Styles
import styled from "@emotion/styled";
import { CommonColor, CommonFont } from "../../assets/styles/common.styles";
import TodoFormField, {ModifyTodoFormField} from "./TodoFormField";
import {SubmitHandler} from "react-hook-form";
import {v4 as uuidv4} from "uuid";
import moment from "moment";
import {Inputs, ModifyInputs} from "../../pages/miniTodoList/MiniTodoList";

// Types
interface PropsType {
  list: Array<TodoType> | null,
  // handleUpdate: (id:string, todo: string) => void,
  handleUpdate: (data: ModifyInputs) => void,
  handleChange: (id: string, status: boolean) => void,
  handleRemove: (id: string) => void
}
interface TodoContentType {
  done: string
}
interface ModifyType {
  index: number | null,
  status: boolean
}

const TodoList = ({list, handleUpdate, handleChange, handleRemove}: PropsType) => {

  const [modify, setModify] = useState<ModifyType>({
    index: null,
    status: false
  })

  const handleChangeModify = (index: number):void => {
    setModify({
      index: index,
      status: true
    })
  }

  const confirmModify = () => {
    setModify({
      index: null,
      status: false
    })
  }

  const handleChangeUpdate:SubmitHandler<ModifyInputs> = (data, e) => {
    const sendObject = {
      todo: data.todo,
      id: data.id
    }
    confirmModify()
    handleUpdate(sendObject)
    e?.target.reset()
  }

  return (
    <MainContainer>
      {
        list?.map((item, index) => {
          return (
            <TodoContainer key={item.id}>
              <div>
                {item.done ?
                  <MdCheckBox onClick={() => handleChange(item.id, item.done)} size={24} style={{marginRight: '10px'}}/>
                  : <MdCheckBoxOutlineBlank onClick={() => handleChange(item.id, item.done)} size={24} style={{marginRight: '10px'}}/>
                }
                {modify.index === index && modify.status ? (
                    <ModifyTodoFormField todoValue={item.todo} todoId={item.id} onSubmit={handleChangeUpdate} />
                ) : (
                  <TodoContent done={item.done ? 'line-through' : 'none'}>{item.todo}</TodoContent>
                )}
              </div>

              <div className={'btnBox'}>
                <MdBorderColor onClick={() => handleChangeModify(index)} color={CommonColor.blue4} size={24} style={{marginRight: '10px'}}/>
                <MdOutlineRemoveCircle onClick={() => handleRemove(item.id)} color={'#f50057'} size={24}/>
              </div>
            </TodoContainer>
          )
        })
      }
    </MainContainer>
  )
}

export default TodoList

const MainContainer = styled.main`
  padding: 0 10px;
`
const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  div {
    flex: 1;
    display: flex;
    align-items: center;
  }
  div.btnBox {
    justify-content: flex-end;
  }
`
// const TodoContent = styled.h3`
//   font-size: ${CommonFont.fs22};
//   text-decoration: ${props => props.done};
// `
const TodoContent = styled('h3')<TodoContentType>(
  {
    fontSize: CommonFont.fs22,
  },
  props => ({textDecoration: props.done})
)

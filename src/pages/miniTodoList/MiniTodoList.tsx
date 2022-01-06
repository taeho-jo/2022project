import React, {Fragment, useState} from 'react'

// Library
import moment from "moment";
import 'moment/locale/ko'
import { v4 as uuidv4 } from 'uuid';
import { SubmitHandler } from "react-hook-form";

// Components
import PageHeader from "../../components/PageHeader";

// Redux
import {useDispatch, useSelector} from "react-redux";
import {ReducerType} from "../../store/reducers/rootReducer";
import {TodoType} from "../../store/reducers/todoReducer";
import {create, checkDone, remove, update} from "../../store/reducers/todoReducer";
import TodoFormField from "../../components/TodoFormField";
import TodoList from "./TodoList";

// Types
export interface Inputs {
  todo: string
}
export interface ModifyInputs {
  todo: string,
  id: string
}

const MiniTodoList = () => {

  const todoList = useSelector<ReducerType, Array<TodoType>>(state => state.todo)
  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    const sendObject = {
      id: uuidv4(),
      done: false,
      todo: data.todo,
      createDate: moment().format('YYYY-MM-DD HH:mm:ss'),
      endDate : moment().format('YYYY-MM-DD HH:mm:ss'),
    }
    dispatch(create(sendObject))
    e?.target.reset()
  }

  const handleChangeDone = (id: string, status: boolean): void => {
    console.log(id, status)
    dispatch(checkDone({id, done: !status}))
  }

  const handleChangeRemove = (id: string): void => {
    dispatch(remove({id}))
  }

  const handleChangeUpdate = (data: ModifyInputs) => {
    console.log(data, 'DATA')
    const {todo, id} = data
    dispatch(update({id, todo }))
  }


  return (
    <div>
      <PageHeader title={'Mini Todo List'} />

      <TodoFormField onSubmit={onSubmit}/>
      {todoList.length !== 0 ? (
        <TodoList list={todoList} handleUpdate={handleChangeUpdate} handleChange={handleChangeDone} handleRemove={handleChangeRemove}/>
      ) : null}


    </div>
  )
}

export default MiniTodoList

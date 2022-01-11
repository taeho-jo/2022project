import React from 'react'

import '../../taskBox.css'

import PageHeader from "../../components/common/PageHeader";
import Task from "../../components/story/Task";

const StoryBook = () => {

  const onArchiveTask = (id: string) => {
    console.log(id)
  }
  const onPinTask = (id: string) => {
    console.log(id)
  }

  return (
    <main>
      <PageHeader title={'Story Book'} />
      <Task task={{id: '1', title: 'TASK 테스트입니다.', state:'TASK_INBOX'}} onArchiveTask={onArchiveTask} onPinTask={onPinTask} />
      <Task task={{id: '2', title: 'TASK PINNED 테스트입니다.', state:'TASK_PINNED'}} onArchiveTask={onArchiveTask} onPinTask={onPinTask} />
      <Task task={{id: '3', title: 'TASK ARCHIVED 테스트입니다.', state:'TASK_ARCHIVED'}} onArchiveTask={onArchiveTask} onPinTask={onPinTask} />
    </main>
  )
}

export default StoryBook

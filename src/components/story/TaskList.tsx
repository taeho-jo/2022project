import React from "react";

import Task, {TaskChildType, TaskPropsType} from "./Task";

export interface TaskListPropsType {
  loading: boolean,
  tasks: TaskChildType[],
  onPinTask: (id: string) => void,
  onArchiveTask: (id: string) => void,
}

const TaskList = ({loading, tasks, onPinTask, onArchiveTask}: TaskListPropsType) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };
  if (loading) {
    return <div className="list-items">loading</div>;
  }
  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items">
      {tasks.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}

export default TaskList;

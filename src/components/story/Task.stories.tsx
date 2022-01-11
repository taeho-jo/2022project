import React from "react";
// import '../../assets/styles/taskBox.css'
import Task, { TaskPropsType, TaskChildType } from "./Task";
import {Meta, Story} from "@storybook/react";

export default {
  component: Task,
  title: 'Task'
} as Meta


const Template: Story<TaskPropsType> = (args: TaskPropsType) => <Task {...args} />

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};

import { initializeTaskInput } from './src/taskInput.js';
import { createTaskItemElement } from './src/taskItem.js';
import { $ } from './utilFunc.js';

const $taskInput = $('todoInput');
const $taskList = $('taskList');

initializeTaskInput($taskInput, $taskList, createTaskItemElement);

import { initializeTaskInput } from './taskInput.js';
import { createTaskItemElement } from './taskItem.js';
import { $ } from './utilFunc.js';

const $taskInput = $('taskInput');
const $taskList = $('taskList');

initializeTaskInput($taskInput, $taskList, createTaskItemElement);

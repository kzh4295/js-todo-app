import { handleTodoInput } from './src/todoInput.js';
import { createTodoItemElement } from './src/todoItem.js';
import { $ } from './utilFunc.js';

const $todoInput = $('#todoInput');
const $todoList = $('#todoList');

handleTodoInput($todoInput, $todoList, createTodoItemElement);

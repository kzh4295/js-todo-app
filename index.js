import { $ } from './src/utils/dom.js';
import { addTodoItemElement } from './src/todoItem.js';

const $todoInput = $('#todoInput');
const $todoList = $('#todoList');

export const handleKeydownTodoInput = (event) => {
  const todoText = event.target.value.trim();

    if (event.key !== 'Enter' || !todoText) {
      return;
    }
   
    // Todo 더하기
    const todoItem = addTodoItemElement(todoText, $todoList);
  
    $todoList.appendChild(todoItem);
    //엔터치고 난후, 값 비워주기
    $todoInput.value = '';
  // } 
};

// addTodo
$todoInput.addEventListener('keydown', handleKeydownTodoInput);
// $todoInput.addEventListener('keydown', handleTodo);


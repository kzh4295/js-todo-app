import { $ } from './utils/dom.js';
import { createTodoItemElement } from '../src/todoItem.js';

const $todoInput = $('#todoInput');
const $todoList = $('#todoList');

export function handleTodoInput() {
  const handleKeydownTodoInput = (event) => {
    const todoText = event.target.value.trim();

    if (event.key !== 'Enter' || !todoText) {
      return;
    }

    const todoItem = createTodoItemElement(todoText, $todoList);
    $todoList.element.appendChild(todoItem);
    $todoInput.element.value = '';
  };

  $todoInput.addEventListener('keydown', handleKeydownTodoInput);
}

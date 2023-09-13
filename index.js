import { $ } from './src/utils/dom.js';
import { todos } from './src/models/todos.js'
import { addTodo, renderList } from './src/components/todo.js'

// input dom
const $todoInput = $('#todoInput');
// 필터 기능 테스트하려고 만든 임의의 버튼
const $allTodo = $('#allTodo');
const $leftTodo = $('#leftTodo');
const $completedTodo = $('#completedTodo');
const $completedAll = $('#completedAll');

// input에 입력을 하면 todo추가
$todoInput.addEventListener('keyup', addTodo);
// todos는 모든 todo를 render
$allTodo.addEventListener('click', ()=>{renderList(todos)})
// 필터링
$leftTodo.addEventListener('click', ()=>{renderList('unCheckedTodos')})
$completedTodo.addEventListener('click', () =>{renderList('checkedTodos')})
$completedAll.addEventListener('click', () =>{renderList('checkedAll')})

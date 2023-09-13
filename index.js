import { $ } from './src/utils/dom.js';
import { todos } from './src/models/todos.js'
import { uncheckedIcon, checkedIcon, deleteIcon } from "../assets/svgIcon.js";

//---------------------------------------------------------------------
const $todoInput = $('#todoInput');
const $todoList = $('#todoList');
// 필터 테스트하려고 만든 임의의 버튼
const $leftTodo = $('#leftTodo');
const $centerTodo = $('#centerTodo');
const $rightTodo = $('#rightTodo');

//---------------------------------------------------------------------
// SVG 아이콘을 생성하는 함수
const createIcon = (svgPath) => {
  const buttonIcon = document.createElement('img');
  buttonIcon.src = `data:image/svg+xml,${encodeURIComponent(svgPath)}`;
  return buttonIcon;
};

//---------------------------------------------------------------------
// 할 일 li를 생성하는 함수 (checkStatus, todoText, deleteButton으로 구성)
const formatLi = (text, checkStatus) => {
  const todoLi = document.createElement('li');
  const checkArea = document.createElement('span');
  const todoText = document.createElement('span');
  const deleteButton = createIcon(deleteIcon);

  //---------------------------------------------------------------------
// todoItem을 삭제하는 함수
 const handleTodoItemDelete = () => {
  // todoItemLi가 있으면서 부모노드가 있으면 부모노드에서 todoItemLi를 제거
  if (todoLi && todoLi.parentNode) {
    todos.
    todoLi.parentNode.removeChild(todoLi);
  }
};

  todoText.textContent = text;

  // 상태 객체를 생성하고 초기화
  const todoState = {
    text: text,
    isChecked: checkStatus,
  };

  // 초기 상태에 따라 아이콘 설정
  checkArea.appendChild(createIcon(checkStatus ? checkedIcon : uncheckedIcon));

  checkArea.addEventListener('click', () => {
    // 토글 상태
    todoState.isChecked = !todoState.isChecked;

    // 아이콘 변경
    checkArea.innerHTML = '';
    checkArea.appendChild(createIcon(todoState.isChecked ? checkedIcon : uncheckedIcon));

    // 텍스트 스타일 변경
    todoText.style.textDecoration = todoState.isChecked ? 'line-through' : '';
  });

  deleteButton.addEventListener('click', handleTodoItemDelete)

  todoLi.appendChild(checkArea);
  todoLi.appendChild(todoText);
  todoLi.appendChild(deleteButton);

  return todoLi;
};
//---------------------------------------------------------------------
// 할 일 목록에 아이템을 추가하는 함수
const addTodo = (event) => {
  if (event.key !== 'Enter') {
    return;
  }

  const todoText = $todoInput.value.trim();
  const todoObj = {
    isChecked: false,
    text: todoText
  }

  if (todoText) {
    todos.push(todoObj)
  }

  renderList();
};


//---------------------------------------------------------------------
// 렌더 함수(addTodo, filter에서 모두 사용)
const renderList = (basicTodos = todos) => {
  $todoList.innerHTML = ""; // todoList 초기화

  if (basicTodos === 'unCheckedTodos') {
    basicTodos = todos.filter((ele) => !ele.isChecked);
  } else if (basicTodos === 'checkedTodos') {
    basicTodos = todos.filter((ele) => ele.isChecked);
  }

  basicTodos.forEach((ele) => {
    const li = formatLi(ele.text, ele.isChecked);
    $todoList.appendChild(li);
  });

  $todoInput.value = ''; 
};

//---------------------------------------------------------------------
// input에 입력을 하면 todo추가
$todoInput.addEventListener('keyup', addTodo);
// todos는 모든 todo를 render
$leftTodo.addEventListener('click', renderList(todos))
// 필터링 해야지
$centerTodo.addEventListener('click', renderList('unCheckedTodos'))
$rightTodo.addEventListener('click', renderList('checkedTodos'))








































// // filterAreat가 생기는 조건의 함수
// const addFilterArea = () => {}

// // 체크 유무에 따른 처리
// const toggleCheck = () => {}

// // 할일 제거
// const deleteTodo = () => {}

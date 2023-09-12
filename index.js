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

  todoText.textContent = text;

  // data 속성을 활용하여 정보 저장
  todoLi.dataset.text = text;
  todoLi.dataset.checked = checkStatus;

  checkArea.appendChild(createIcon(uncheckedIcon));

//---------------------------------------------------------------------
  checkArea.addEventListener('click', () => {
    // data 속성을 통해 정보를 읽어와 토글 동작 수행
    const currentText = todoLi.dataset.text;
    const currentChecked = todoLi.dataset.checked === 'true';

    // 해당 항목을 찾아 토글
    const todoItem = todos.find((ele) => ele.text === currentText && ele.isChecked === currentChecked);
    if (todoItem) {
      todoItem.isChecked = !currentChecked;
      todoText.style.textDecoration = todoItem.isChecked ? 'line-through' : '';

      // 아이콘 변경
      checkArea.innerHTML = '';
      checkArea.appendChild(createIcon(todoItem.isChecked ? checkedIcon : uncheckedIcon));
    }
  });
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

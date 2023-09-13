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
console.log('todos-1', todos)
 const handleTodoItemDelete = () => {
  // 항목 삭제
  const index = todos.findIndex((ele) => ele.text === todoState.text && ele.isChecked === todoState.isChecked);
  if (index !== -1) {
    todos.splice(index, 1); // 배열에서 해당 항목을 제거합니다.
  }

  // HTML에서도 삭제
  if (todoLi && todoLi.parentNode) {
    todoLi.parentNode.removeChild(todoLi);
  }
  console.log('delete-todo', todos)
};

  todoText.textContent = text;
  //---------------------------------------------------------------------

  // 상태 객체를 생성하고 초기화
  const todoState = {
    text: text,
    isChecked: checkStatus,
  };

  // 초기 상태에 따라 아이콘 설정
  checkArea.appendChild(createIcon(checkStatus ? checkedIcon : uncheckedIcon));

  checkArea.addEventListener('click', () => {
    // 해당 항목을 찾음
    const todoItem = todos.find((ele) => ele.text === todoState.text && ele.isChecked === todoState.isChecked);
    if (todoItem) {
      // 현재 isChecked 값을 토글
      todoItem.isChecked = !todoItem.isChecked;
      // todoState 업데이트
      todoState.isChecked = todoItem.isChecked;
  
      // 이미지 아이콘의 src 속성 변경
      const icon = todoItem.isChecked ? createIcon(checkedIcon) : createIcon(uncheckedIcon);
      checkArea.innerHTML = '';
      checkArea.appendChild(icon);
  
      // 텍스트 스타일 변경
      todoText.style.textDecoration = todoItem.isChecked ? 'line-through' : '';
  
      console.log('check-todos', todos);
    }
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
    console.log('basicTodos-1', basicTodos)
    basicTodos = todos.filter((ele) => !ele.isChecked);
    console.log('basicTodos-2', basicTodos)
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
$leftTodo.addEventListener('click', ()=>{renderList(todos)})
// 필터링 해야지
$centerTodo.addEventListener('click', ()=>{renderList('unCheckedTodos')})
$rightTodo.addEventListener('click', () =>{renderList('checkedTodos')})

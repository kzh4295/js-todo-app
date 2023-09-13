import { $ } from '../utils/dom.js';
import { todos } from '../../src/models/todos.js'
import { uncheckedIcon, checkedIcon, deleteIcon } from "../../assets/svgIcon.js";

// input dom
const $todoInput = $('#todoInput');
// ul dom
const $todoList = $('#todoList');

// SVG 아이콘을 생성하는 함수
const createIcon = (svgPath) => {
  const buttonIcon = document.createElement('img');
  buttonIcon.src = `data:image/svg+xml,${encodeURIComponent(svgPath)}`;
  return buttonIcon;
};

// 할 일 li를 생성하는 함수 (checkArea, todoText, deleteButton으로 구성)
const formatLi = (text, checkStatus) => {
  // 동적으로 생성된 li
  const todoLi = document.createElement('li');
  // check영역 생성
  const checkArea = document.createElement('span');
  // 입력된 todo 넣을 영역 생성
  const todoText = document.createElement('span');
  // deleteButton 생성
  const deleteButton = createIcon(deleteIcon);

  // 전달 받은 값을 li의 텍스트 영역에 넣음
  todoText.textContent = text;

  // 상태에 따른 아이콘 설정
  checkArea.appendChild(createIcon(checkStatus ? checkedIcon : uncheckedIcon));

  // 체크영역을 클릭할 경우
  checkArea.addEventListener('click', () => {
    // 일치하는 항목을 탐색
    const todoItem = todos.find((ele) => ele.text === text && ele.isChecked === checkStatus);
    // 일치하는 항목이 있다면
    if (todoItem) {
      // 현재 isChecked 값을 토글
      todoItem.isChecked = !todoItem.isChecked;
      // checkStatus 업데이트
      checkStatus = !checkStatus;
  
      // 이미지 아이콘의 src 속성 변경
      checkArea.innerHTML = '';
      checkArea.appendChild(todoItem.isChecked ? createIcon(checkedIcon) : createIcon(uncheckedIcon));
  
      // 텍스트 스타일 변경
      todoText.style.textDecoration = todoItem.isChecked ? 'line-through' : '';
    }
  });


  // todoLi를 삭제하는 함수
  const handleTodoItemDelete = () => {
    // todos의 값중 상태객체와 동일한 조건일때 선택
    const index = todos.findIndex((ele) => ele.text === text && ele.isChecked === checkStatus);
    // 같지 않으면 배열에서 해당 항목 제거
    if (index !== -1) {
      todos.splice(index, 1); 
    }

    // HTML에서도 li삭제
    if (todoLi?.parentNode) {
      todoLi.parentNode.removeChild(todoLi);
    }
  };

  deleteButton.addEventListener('click', handleTodoItemDelete)

  todoLi.appendChild(checkArea);
  todoLi.appendChild(todoText);
  todoLi.appendChild(deleteButton);

  return todoLi;
};

// todoLi를 추가하는 함수
export const addTodo = (event) => {
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

// 렌더 함수(addTodo, filter에서 모두 사용)
export const renderList = (basicTodos = todos) => {
  // todoList(ul) 초기화
  $todoList.innerHTML = ""; 

  if (basicTodos === 'unCheckedTodos') {
    basicTodos = todos.filter((ele) => !ele.isChecked);
  } else if (basicTodos === 'checkedTodos') {
    basicTodos = todos.filter((ele) => ele.isChecked);
  } else if (basicTodos === 'checkedAll') {
    todos.forEach((ele)=>{
      ele.isChecked = true
    })
    basicTodos = todos.filter((ele) => ele.isChecked);
  }

  basicTodos.forEach((ele) => {
    const li = formatLi(ele.text, ele.isChecked);
    $todoList.appendChild(li);
  });

  // todoInput(input) 초기화
  $todoInput.value = ''; 
};

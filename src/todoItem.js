import { uncheckedIcon, checkedIcon, deleteIcon } from "../assets/icons/svgImg.js";

// svg 경로를 받아 icon으로 변환하는 함수
const createIcon = (icon) => {
  // img 태그 생성
  const buttonIcon = document.createElement('img');
  buttonIcon.src = `data:image/svg+xml,${encodeURIComponent(icon)}`;
  return buttonIcon;
}

// isCompleted, todoTextSpan, unCheckedButtonImg의 프로퍼티를 가진 객체를 받는 함수
const toggleIcon = ({ isCompleted, todoTextSpan, unCheckedButton }) => {
  // isCompleted 상태이면 checkedIcon을 사용하고 그렇지 않다면 uncheckedIcon을 노출
  const newSrc = isCompleted ? checkedIcon : uncheckedIcon;
  // isCompleted 상태이면 todoTextSpan(input에서 받은 text)의 textDecoration의 값을 line-through 처리하고 그렇지 않으면 빈값 할당
  todoTextSpan.style.textDecoration = isCompleted ? 'line-through' : '';
  // isCompleted의 상태가 한번 더 누르면 boolean값을 변환
  isCompleted = !isCompleted;
  // 체크 상태를 변환
  unCheckedButton.src = `data:image/svg+xml,${encodeURIComponent(newSrc)}`;
  // 다음에 toggle할 수 있는 값을 뱉어줌
  return isCompleted;
}

//todoItemLi, todoTextSpan, unCheckedButtonImg, deleteButtonImg값을 파라미터로 넘겨받은 함수(!!!!! 여기도 객체로 넘기면 좋지 않을까?)
const changeIconState = (todoItemLi, todoTextSpan, unCheckedButton, deleteButton) => {
  // 
  const todoObject = {
    isCompleted: true,
    todoTextSpan: todoTextSpan,
    unCheckedButton: unCheckedButton
  }

  // todoItem을 삭제하는 함수
  const handleTodoItemDelete = () => {
    // todoItemLi가 있으면서 부모노드가 있으면 부모노드에서 todoItemLi를 제거
    if (todoItemLi && todoItemLi.parentNode) {
      todoItemLi.parentNode.removeChild(todoItemLi);
    }
  };

  // deleteButton클릭시, handleTodoItemDelete이벤트 리스너 적용
  deleteButton.addEventListener('click', handleTodoItemDelete);
  // deleteBtn 근처에 갈 경우에 포인터 활성화
  deleteButton.classList.add('deleteBtn');
  // check시 toggle하여 icon 변경되도록하기
  unCheckedButton.addEventListener('click', () => {
    // todoObject.isCompleted는 toggleIcon에서 todoObject를 적용한 isCompleted 값이 리턴됨
    todoObject.isCompleted = toggleIcon(todoObject);
  });

  // check영역의 버튼이 포인터 활성화
  unCheckedButton.classList.add('btnPointer');
}

// todoText가 추가되었을때, 문구만 관리하는 함수
const addTodoText = (text, todoTextSpan) => {
  todoTextSpan.textContent = text;
  todoTextSpan.classList.add('add');
}

// addTodoText와 changeIconState를 실행하는 함수
export const addTodoItemElement = (text, $todoList) => {
  const todoItemLi = document.createElement('li');
  const todoTextSpan = document.createElement('span');
  const unCheckedButton = createIcon(uncheckedIcon);
  const deleteButton = createIcon(deleteIcon);

  addTodoText(text, todoTextSpan)

  changeIconState(todoItemLi, todoTextSpan, unCheckedButton, deleteButton);

  // 변화된 값을 todoItemLi에 추가
  todoItemLi.appendChild(unCheckedButton);
  todoItemLi.appendChild(todoTextSpan);
  todoItemLi.appendChild(deleteButton);

  return todoItemLi;
}

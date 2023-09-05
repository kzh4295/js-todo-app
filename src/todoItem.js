import { uncheckedSvgImage, checkedSvgImage, deleteSvgImage } from "../assets/icons/svgImg.js";

function createImageElement(svgImage) {
  const buttonImg = document.createElement('img');
  buttonImg.src = `data:image/svg+xml,${encodeURIComponent(svgImage)}`;
  return buttonImg;
}

function handleToggleCompletion(isCompleted, todoTextSpan, unCheckedButtonImg) {
  isCompleted = !isCompleted;
  const newSrc = isCompleted ? checkedSvgImage : uncheckedSvgImage;
  todoTextSpan.style.textDecoration = isCompleted ? 'line-through' : '';
  unCheckedButtonImg.src = `data:image/svg+xml,${encodeURIComponent(newSrc)}`;
  return isCompleted; // 변경된 완료 상태 반환
}

export function createTodoItemElement(text, $todoList) {
  const todoItemLi = document.createElement('li');
  const todoTextSpan = document.createElement('span');
  const unCheckedButtonImg = createImageElement(uncheckedSvgImage);
  const deleteButtonImg = createImageElement(deleteSvgImage);
  let isCompleted = false; // 초기 완료 상태는 false로 설정

  const handleDelete = () => {
    $todoList.removeChild(todoItemLi);
  };

  todoTextSpan.textContent = text;
  todoTextSpan.classList.add('add');

  deleteButtonImg.addEventListener('click', handleDelete);
  deleteButtonImg.classList.add('deleteBtn');

  unCheckedButtonImg.addEventListener('click', () => {
    isCompleted = handleToggleCompletion(isCompleted, todoTextSpan, unCheckedButtonImg);
  });
  unCheckedButtonImg.classList.add('unCheckedBtn');

  todoItemLi.appendChild(unCheckedButtonImg);
  todoItemLi.appendChild(todoTextSpan);
  todoItemLi.appendChild(deleteButtonImg);

  // 초기 상태에 따라 스타일 설정
  // handleToggleCompletion(isCompleted, todoTextSpan, unCheckedButtonImg);

  return todoItemLi;
}

import { uncheckedSvgImage, checkedSvgImage, deleteSvgImage } from "../assets/icons/svgImg.js";
import { $ } from './utils/dom.js';

function createImageElement(svgImage) {
  const buttonImg = document.createElement('img');
  buttonImg.src = `data:image/svg+xml,${encodeURIComponent(svgImage)}`;
  return buttonImg;
}

// 
function handleToggleCompletion({isCompleted, todoTextSpan, unCheckedButtonImg}) {
  isCompleted = !isCompleted;
  const newSrc = isCompleted ? checkedSvgImage : uncheckedSvgImage;
  todoTextSpan.style.textDecoration = isCompleted ? 'line-through' : '';
  unCheckedButtonImg.src = `data:image/svg+xml,${encodeURIComponent(newSrc)}`;
  return isCompleted; 
}

export function createTodoItemElement(text, $todoList) {
  const todoItemLi = document.createElement('li');
  const todoTextSpan = document.createElement('span');
  const unCheckedButtonImg = createImageElement(uncheckedSvgImage);
  const deleteButtonImg = createImageElement(deleteSvgImage);

  const todoObject = {
    isCompleted:false,
    todoTextSpan:todoTextSpan,
    unCheckedButtonImg : unCheckedButtonImg
  }

  const handleDelete = () => {
    $todoList.element.removeChild(todoItemLi);
  };

  todoTextSpan.textContent = text;
  todoTextSpan.classList.add('add');

  deleteButtonImg.addEventListener('click', handleDelete);
  deleteButtonImg.classList.add('deleteBtn');

  unCheckedButtonImg.addEventListener('click', () => {
    todoObject.isCompleted = handleToggleCompletion(todoObject);
  });
  unCheckedButtonImg.classList.add('unCheckedBtn');

  todoItemLi.appendChild(unCheckedButtonImg);
  todoItemLi.appendChild(todoTextSpan);
  todoItemLi.appendChild(deleteButtonImg);

  // const ulElement = $('#todoList');
  // const newDivElement = document.createElement('div');
  // newDivElement.textContent = '새로운 div 요소입니다.';
  // newDivElement.setAttribute('class', 'myDiv');
  // ulElement.element.insertAdjacentElement('afterend', newDivElement);







 


  return todoItemLi;
}

const uncheckedSvgImage =
  '<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#bddad5" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>';

const checkedSvgImage =
  '<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#bddad5" stroke-width="1"></circle> <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#1C274C" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>';

const deleteSvgImage =
  '<svg fill="#af5b5e" width="40px" height="40px" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path></g></svg>';


function createButtonElement(svgImage) {
  const buttonImg = document.createElement('img');
  buttonImg.src = 'data:image/svg+xml,' + encodeURIComponent(svgImage);
  return buttonImg;
}
  
export function createTaskItemElement(text, $taskList) {
  const taskItemLi = document.createElement('li');
  const taskTextSpan = document.createElement('span');
  const unCheckedButtonImg = createButtonElement(uncheckedSvgImage);
  const deleteButtonImg = createButtonElement(deleteSvgImage);
  const handleDeleteTask = () => {
    $taskList.removeChild(taskItemLi);
  };
  let isCompleted = true;

  const handleToggleCompletion = () => {
    isCompleted = !isCompleted;
    const newSrc = !isCompleted ? uncheckedSvgImage : checkedSvgImage;
    document.querySelector('.add').style.textDecoration = isCompleted
      ? 'line-through'
      : '';
    unCheckedButtonImg.src = `data:image/svg+xml,${encodeURIComponent(newSrc)}`;
  };

  taskTextSpan.textContent = text;

  deleteButtonImg.addEventListener('click', handleDeleteTask);

  unCheckedButtonImg.addEventListener('click', handleToggleCompletion);

  unCheckedButtonImg.classList.add('unCheckedBtn');

  taskTextSpan.classList.add('add');

  deleteButtonImg.classList.add('deleteBtn');

  taskItemLi.appendChild(unCheckedButtonImg);

  taskItemLi.appendChild(taskTextSpan);

  taskItemLi.appendChild(deleteButtonImg);


  return taskItemLi;
  
}

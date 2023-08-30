const $taskInput = document.getElementById('taskInput');
const $taskList = document.getElementById('taskList');

const handleKeydownTaskInput = (event) => {
  const taskText = $taskInput.value.trim();

  if (event.key !== 'Enter' || taskText === '') {
    return;
  }

  const taskItem = createTaskItemElement(taskText);
  $taskList.appendChild(taskItem);
  $taskInput.value = '';
};

$taskInput.addEventListener('keydown', handleKeydownTaskInput);

const createTaskItemElement = (text) => {
  const taskItemLi = document.createElement('li');
  const taskTextSpan = document.createElement('span');
  const deleteButtonImg = document.createElement('img');
  var svgImage =
    '<svg fill="#af5b5e" width="40px" height="40px" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path></g></svg>';

  taskTextSpan.textContent = text;
  deleteButtonImg.src = 'data:image/svg+xml,' + encodeURIComponent(svgImage);

  deleteButtonImg.addEventListener('click', () => {
    $taskList.removeChild(taskItemLi);
  });

  taskItemLi.appendChild(taskTextSpan).classList.add('add');
  taskItemLi.appendChild(deleteButtonImg).classList.add('delete-btn');

  return taskItemLi;
};

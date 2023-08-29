const taskInput = document.getElementById('myInput');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('keydown', function (event) {
  const taskText = taskInput.value.trim();
  if (event.key === 'Enter' && taskText !== '') {
    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
});

function createTaskItem(text) {
  console.log(text);
  const taskItem = document.createElement('li');
  const taskText = document.createElement('span');
  const deleteButton = document.createElement('img');

  taskText.textContent = text;
  deleteButton.src = 'delete.png';

  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(taskText).classList.add('add');
  taskItem.appendChild(deleteButton).classList.add('delete-btn');

  return taskItem;
}

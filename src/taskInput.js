export function initializeTaskInput(
  $taskInput,
  $taskList,
  createTaskItemElement
) {
  const handleKeydownTaskInput = (event) => {
    const taskText = $taskInput.value.trim();

    if (event.key !== 'Enter' || !taskText) {
      return;
    }

    const taskItem = createTaskItemElement(taskText, $taskList);
    $taskList.appendChild(taskItem);
    $taskInput.value = '';
  };

  $taskInput.addEventListener('keydown', handleKeydownTaskInput);
}

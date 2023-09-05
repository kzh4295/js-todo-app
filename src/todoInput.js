export function handleTodoInput(
  $todoInput,
  $todoList,
  createTodoItemElement
) {
  const handleKeydownTodoInput = (event) => {
    const todoText = $todoInput.element.value.trim();

    if (event.key !== 'Enter' || !todoText) {
      return;
    }

    const todoItem = createTodoItemElement(todoText, $todoList);
    $todoList.element.appendChild(todoItem);
    $todoInput.element.value = '';
  };

  $todoInput.addEventListener('keydown', (handleKeydownTodoInput));
}

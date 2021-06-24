import React, { useState } from 'react';
import TodoList from './TodoList';
import useArray from './useArray';

function TodoApp() {
  const [newInput, setNewInput] = useState('');
  const { addTodos, todos } = useArray();

  const handleInput = ({ target }) => {
    setNewInput(target.value);
  };

  const handleClick = () => {
    addTodos(newInput);
    setNewInput('');
  };

  return (
    <div>
      <label htmlFor="task-input">
        Add a task:
        <input
          id="task-input"
          placeholder="task"
          name="newItem"
          value={newInput}
          onChange={handleInput}
        />
      </label>
      <button type="button" onClick={() => handleClick()}>
        Add
      </button>
      <TodoList tasks={todos} />
    </div>
  );
}

export default TodoApp;

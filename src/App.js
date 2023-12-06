import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos)
  };

  return (
    <div className='max-w-md mx-auto mt-8'>
      <h1 className='text-2xl font-semibold mb-4'>ToDo List</h1>
      <div className='flex'>
        <input type='text' className='w-full px-4 py-2 mr-2 rounded-md border focus:outline-none' placeholder='Add a task' value={task} onChange={(e) => setTask(e.target.value)}/>
        <button className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none' onClick={addTodo}>Add</button>
      </div>
      <ul className='mt-4'>
        {todos.map((todo, index) => (
          <li key={index} className='flex items-center justify-between border-b py-2'>
            {todo}
            <button className='text-red-600 hover:text-red-800 focus:outline-none' onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
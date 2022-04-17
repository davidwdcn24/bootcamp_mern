import React, { useReducer } from 'react';
import './App.css';
import Form from './components/form/Form';
import Tasks from './components/tasks/Tasks';

const initialTasks = {
  tasks: []
};

const reducer = (state, action) => {
  return ({
    ...state,
    [action.name]: action.value
  });
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialTasks);

  // Agrega un nuevo elemento a la lista.
  const addTask = (value) => {
    // Verifica si ya existe el elemento
    const existsTask = state.tasks.some((item) => item.text === value);
    if (existsTask)
      alert(`La tarea ${value} ya está en la lista.`);
    else {
      // Genera la nueva tarea.
      const task = {
        id: `task-${state.tasks.length + 1}`,
        text: value,
        completed: false
      };

      // Agrega la nueva tarea.
      const newTasks = state.tasks;
      newTasks.push(task);
      dispatch({
        name: "tasks",
        value: newTasks
      });
    }
  }

  // Elimina una tarea.
  const deleteTask = (task) => {
    const newTasks = state.tasks.filter((item) => {
      return item.id !== task.id;
    })
    dispatch({
      name: "tasks",
      value: newTasks
    });
  }

  // Actualiza datos
  const updateTask = (task) => {
    const newTasks = state.tasks.map((item) => {
      if (item.id === task.id)
        item.completed = task.completed;
      
      return item;
    });

    dispatch({
      name: "tasks",
      value: newTasks
    });
  }

  return (
    <div className="App">
      <Form addTask={addTask}></Form>
      <Tasks tasks={state.tasks} deleteTask={deleteTask} updateTask={updateTask}></Tasks>
    </div>
  );
}

export default App;

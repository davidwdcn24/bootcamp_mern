import React from 'react';

const Tasks = (props) => {
    // Actualiza la lista principal.
    const deleteTask = (task) => {
        props.deleteTask(task);
    }

    // Completa tarea.
    const updateTask = (evt, task) => {
        // Actualiza la tarea
        task.completed = evt.target.checked;
        props.updateTask(task);
    }

    return (
        <div className='container-fluid mt-3'>
            {
                props.tasks.map((item, index) => {
                    return (
                        <div className='row mb-3' key={item.id} id={'container-task-' + item.id}>
                            <div className='d-flex align-items-center'>
                                <span className={`me-2 ${item.completed ? 'text-decoration-line-through' : ''}`}>
                                    {item.text}
                                </span>
                                <div className='form-check'>
                                    <input className='form-check-input'
                                        type='checkbox'
                                        value=''
                                        id={'check-' + item.id}
                                        checked={item.completed ? 'checked' : ''}
                                        onChange={(evt) => { updateTask(evt, item) }} />
                                    <label className='form-check-label' htmlFor={'check-' + item.id}>&nbsp;</label>
                                </div>
                                <button className='btn btn-dark' 
                                    onClick={() => { deleteTask(item) }}>Delete</button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Tasks;
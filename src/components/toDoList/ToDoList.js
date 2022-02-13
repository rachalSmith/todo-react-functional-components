import PropTypes from 'prop-types';

// ToDoList component is a container for ToDo component.
// ToDoList passes down props (of todo initial state and delete functionality) to each todo item from App.js.

import ToDo from '../toDo/ToDo'

const ToDoList = ({ toDoItems, onDelete }) => {
    return (
        <div>
            {toDoItems.map((toDo) => (
            <ToDo key={toDo.id}
                  toDo={toDo}
                  onDelete={onDelete}
                />
            ))}
        </div>
    )
}

export default ToDoList;

ToDoList.propTypes = {
    toDoItems : PropTypes.array.isRequired,
    onDelete : PropTypes.func.isRequired
}
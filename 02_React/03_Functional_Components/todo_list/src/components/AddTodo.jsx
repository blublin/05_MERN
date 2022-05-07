import React, { useState } from 'react'

const AddTodo = (props) => {
    // toDo is a list for objects
    const {todos, aTD: addToTodos} = props;

    const [todo, setTodo] = useState({
        task: "",
        isComplete: false
    })

    const submitHandler = (event) => {
        event.preventDefault();
        if (todo.task) {
            addToTodos([
                ...todos,
                todo
            ])
            setTodo({
                task: "",
                isComplete: false
            })
        }
    }
    const  inputHandler = (event) => {
        // console.log(event)
        const {name, value} = event.target
        setTodo({
            ...todo,
            [name]:value
        })
    }

  return (
    <fieldset>
        <legend>AddToDo</legend>
        <form onSubmit={ submitHandler }>
            <p>
                Task: 
                <input
                onChange={ inputHandler }
                name="task"
                type="text"
                value={ todo.task } />
            </p>
            <button>Add</button>
        </form>
    </fieldset>
  )
}

export default AddTodo
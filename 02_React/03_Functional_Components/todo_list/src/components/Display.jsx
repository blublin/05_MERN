import React from 'react'

const Display = (props) => {
    
    const {todos, aTD} = props;

    const checkboxHandler = (event) => {
        let {id, checked} = event.target;
        // id starts as a string
        id = parseInt(id);
        console.log(event);
        console.log(`id: ${id} || checked: ${checked}`)
        const newTodos = [...todos]; // full array copy
        const newTodoObj = newTodos[id]; // the object in the array modifying.
        // console.log("New Todo Obj:", newTodoObj);
        newTodoObj.isComplete = checked; // update boolean value
        newTodos.splice(id, 1, newTodoObj); // inplace replace with new object
        // const newTodos = todos.map( (tObj, ind) => id === ind ? tObj.isComplete = checked : null )
        aTD(newTodos); // replace todos with new Todos
    }

    // const removeTask = (ind) => {
    //     // Remove task object if delete button is pressed, based on index.
    //     const newTodos = todos.filter( (_, index) => ind !== ind )
    //     aTD(newTodos);
    // }

  return (
    <fieldset>
        <legend>Display</legend>
        <form onSubmit={ (e) => e.preventDefault() }>
            {
                todos.map( (tObj, ind) => {
                    const {task, isComplete} = tObj;
                    return (
                    <p key={ind}>
                        {task}
                        <input
                        onChange={ checkboxHandler }
                        type="checkbox"
                        id={ind}
                        checked={isComplete}/>
                        {
                            isComplete
                                ? <button onClick={ null }>Delete</button>
                                : null
                        }
                    </p>
                    )
                })
            }
        </form>
    </fieldset>
  )
}

export default Display
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
        newTodoObj.isComplete = checked; // update boolean value
        newTodos.splice(id, 1, newTodoObj); // inplace replace with new object
        // const newTodos = todos.map( (tObj, ind) => {
        //     if (id === ind) tObj.isComplete = checked
        //     return tObj
        // });
        aTD(newTodos); // replace todos with new Todos
    }

    const removeTask = (event, ind) => {
        // Remove task object if delete button is pressed, based on index.
        const newTodos = [...todos];
        newTodos.splice(ind, 1);
        aTD(newTodos);
    }

  return (
    <fieldset>
        <legend>Display</legend>
        <form onSubmit={ (e) => e.preventDefault() }>
            {
                todos.map( (tObj, ind) => {
                    const {task, isComplete} = tObj;
                    return (
                    <p key={ind}>
                        {/* Conditional render strikethroughed task */}
                        {
                            isComplete
                                ? <s>{task}</s>
                                : {task}
                        }
                        <input
                        onChange={ checkboxHandler }
                        type="checkbox"
                        id={ind}
                        checked={isComplete}/>
                        {
                            // Conditionally render delete button and pass event + index to callback function
                            isComplete &&
                                <button onClick={
                                    (e) => removeTask(e, ind) }
                                    style={{marginLeft:'15px', padding: '10px'}}>Delete</button>
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
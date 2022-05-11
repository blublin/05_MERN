import React, {useState} from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const Form = (props) => {
    const navigate = useNavigate();
    const [queryObj, setQueryObj] = useState({
        queryType: "people",
        id: 0
    })
    
    const changeHandler = (e) => {
        const {name, value} = e.target;
        setQueryObj({
            ...queryObj,
            [name]:value
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        queryObj.queryType && queryObj.id
            ? navigate(`${queryObj.queryType}/${queryObj.id}`)
            : alert("Incomplete search request. Please fill out all information!");
    }


  return (
    <fieldset>
        <legend>Form.jsx</legend>
        <form onSubmit={ submitHandler }>
            <div>
                <label>Query Type: </label>
                <select name="queryType" onChange={changeHandler}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
            </div>
            <div>
                <label>ID: </label>
                <input
                type="number"
                name="id"
                value={queryObj.id}
                onChange={changeHandler}/>
            </div>
            <button>Search</button>
        </form>
        <Outlet />
    </fieldset>
    // Outlet IN PARENT handles ALL children routes defined in App.jsx/index.jsx
    // Children rerenders DO NOT rerender the parent content.
  )
}

export default Form
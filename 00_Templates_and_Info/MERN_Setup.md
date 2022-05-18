# MERN Setup

## Mongoose | MongoDB
1. Copy/Paste MERN_Project_Template, rename to project title
2. `cd` to project
3. `npm init -y`; `npm i express mongoose cors`

## React
1. In project folder: `npx create-react-app client`
2. `cd client`
3. `npm i axios react-router-dom`
4. Make the directories views, components in src/


### Notes
- Routing
    - `<Router>` wraps `<Routes>`, `<Route>` (and `<Link>` when used inside the main routing page)
    - `<Link>` is nearly identical to `<a>` tag, but uses `to=''` instead of `href=`
      - If using variables in `Link`, make `to={``}`
- `const navigate = useNavigate()`
    - `navigate(`\`REDIRECT URL\``)` with backticks
- Navigate/Link local React (port 3000)
- axios to Express Server (port 8000)
- `const params = useParams()`
    - `const { urlVariablesFromRoutes } = params`
    - Variables defined in routes with `:variable`

## Setup | Code Blocks | Snippets

### Express

1. replace all in controller, model, routes, server files
    - `ctrl+f` "user", replace with "your_model"
    - preserve case
2. Rename controller, model, routes files to "your_model.type_of.js"

#### Config
- In config, set database to your database
```js
const database = "your_database_name";
```

#### Controllers
- add `.sort()` to any Mongoose find one, many, all as needed
- Validate unique field in Create
- Update requires 3rd aguement: `{ new: true, runValidators: true }`
- find by id first argument: `{ _id: req.params.id }`
- Grab variable route values with `req.params.variable_name`

#### Models
- Edit model(s): add/remove validation/options
- Only use 1 version of timestammps

#### Routes
- Align and order by route
- Variables prefaced with `:`.

#### Server
- Ensure route(s) are setup correctly and use app
- From project folder (NOT CLIENT)  server: `nodemon server.js`

### MongoDB
- If you need to check the database
  - cd to `C:\Program Files\MongoDB\Server\YOUR_VERSION_HERE\bin`
  - `./mongo`
  - `use NAME_OF_YOUR_DATABASE`
  - `show collections`
  - `db.YOUR_COLLECTION.find()` to show all current documents


### React
- `import {BrowserRouter as Router, Link, Routes, Route, useParams, useNavigate, useLocation } from "react-router-dom"` as needed
- You can only ever render/return 1 parent HTML tag. All other tags must be children or lower.

#### App.js
- rename to .jsx OR `Ctrl+K` then `M`, type "React" and hit Enter.
- Modify Dashboard, AddForm and any other views/components as needed
```jsx
import './App.css'; // Optional CSS (currently used by Fieldset)
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './views/NavBar'; // Optional Navbar
import Dashboard from './views/Dashboard'; // View 1
import AddForm from './views/AddForm'; // View 2

function App() {
  // State for useEffect to monitor
  const [toggleState, setToggleState] = useState(false);
  // Function to toggle State
  const theToggler = () => {
    console.log(`Toggle State Before: ${toggleState}`);
    setToggleState(!toggleState);
  }

  return (
    // Everything is nested inside Router
    <Router>
      {/* Optional Fieldset to visualize views and components */}
      <fieldset className='App'>
        <legend>App.jsx</legend>
        {/* Optional NavBar. Must be inside Router if you want it to have access to Link */}
        <NavBar />
        {/* Routes to hold all individual Route tags */}
        <Routes>
          {/* Dashboard Route */}
          <Route path="/" element={<Dashboard toggleState={toggleState} theToggler={theToggler} />} />
          <Route path="/new" element={<AddForm theToggler={theToggler} />} />
          <Route path="/edit/:document_id" element={<Form theToggler={theToggler} />} />
          <Route path="/some/parent" element={<ParentView />}>
            {/*
            Child route CHAINS from route. Ex: /some/parent/childroute
            Child route renders under/with parent
            */}
            <Route path="/childRoute" element={<ChildComponent />} />
          </Route>
        </Routes>
      </fieldset>
    </Router>
  );
}

export default App;
```

#### Views
- Build Views with components

```jsx
import React from 'react';
import AddOneDocument from '../components/AddOneDocument';
import AllDocumentsTable from '../components/AllDocumentsTable';
import Header from '../components/Header';

// Grab any props from parent
const Dashboard = (props) => {
  // Destructure from props
  const {toggleState, theToggler} = props;


  return (
    <fieldset>
        <legend>Dashboard View</legend>
        {/* Using components to neatly build the view */}
        <Header />
        <AddOneDocument />
        {/* 'cheat' method to spread all props passed into this file forward to child */}
        <AllDocumentsTable {...props}/>
    </fieldset>
  )
}

export default Dashboard
```

#### Components
- Components are like legos for Views

Examples:

```jsx
import React from 'react'

const Header = () => {
  return (
  <fieldset>
      <legend>Header Component</legend>
      <h1>Favorite authors</h1>
  </fieldset>
  )
}

export default Header
```

#### Other

- useEffect
```jsx
  // Set useEffect update variable
  useEffect(() => {
    axios
      .get(getAllURL)
      .then((twoChains) => {
        // Log the data to see what you have
        console.log(
          `Show me the magic data coming back for get all`,
          twoChains.data
        );
        // Add the data from the database to your general state variable
        setStateVariable(twoChains.data);
      })
      .catch((uhoh) => {
        console.log("Something went hella wrong", uhoh);
      });
      // Use toggleState to monitor when useEffect should run again
  }, [toggleState]);
```

- Delete Handler
```jsx
  const deleteHandler = doc_id => {
    axios
      // Change YOUR_DOCUMENT to the proper route
      .delete('http://localhost:8000/api/YOUR_DOCUMENT/'+doc_id)
      .catch(err => console.log("Well you really screwed this one up, didn't you?!", err))
    // Trigger toggler if called in same view as table so useEffect can update
    theToggler();
  }
```

- Map through array of objects
```jsx
{(arrayState &&
  arrayState.map((documentObj, idx) => {
    {/* For each object which is a document from the DB */}
    return (
      <tr key={idx}>
        {/* Show document name in 1 td */}
        <td><h5>{documentObj.name}</h5></td>
        <td>
          {/* Show link and delete buttons  */}
          <Link to={`/edit/${documentObj._id}`}><button>Edit</button></Link>
          &nbsp;&nbsp;
          <button onClick={(_)=> deleteHandler(documentObj._id)}>Delete</button>
        </td>
      </tr>
    );
}))}
```
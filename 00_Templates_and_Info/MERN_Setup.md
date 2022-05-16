# MERN Setup

## Mongoose | MongoDB
1. Copy MongooseTemplate, rename to project title
2. `cd` to project
3. `npm init -y`; `npm i express mongoose cors`
4. `ctrl+f` "user", replace "your_model" -> preserve case -> replace all in controller, model, route, server
5. Rename controller, model, route files
6. In controller, change database to your database
7. Edit model(s): add/remove validation/options
8. `nodemon server.js`

## React
1. In project folder: `npx create-react-app client`
2. `cd client`
3. `npm i axios react-router-dom`
4. Make the directories views, components in src/
5. `import {BrowserRouter as Router, Link, Routes, Route, useParams, useNavigate } from "react-router-dom"` as needed

### Notes
- Routing
    - `<Router>` wraps `<Routes>`, `<Route>` (and `<Link>` when used inside the main routing page)
    - `<Link>` is nearly identical to `<a>` tag, but uses `to={''}` instead of `href=`
- `const navigate = useNavigate()`
    - `navigate(`\`REDIRECT URL\``)` with backticks
- Navigate/Link local React (port 3000)
- axios to Express Server (port 8000)
- `const params = useParams()`
    - `const { urlVariablesFromRoutes } = params`
    - Variables defined in routes with `:variable`


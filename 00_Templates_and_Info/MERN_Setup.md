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
4. mkdir src/views, src/components
5. `import {BrowserRouter as Router, Link, Routes, Route } from "react-router-dom"` as needed
6. `import { useNavigate} from "react-router"` as  needed\
-- `const navigate = useNavigate()`\
-- `navigate(`\`REDIRECT URL\``)` with backticks
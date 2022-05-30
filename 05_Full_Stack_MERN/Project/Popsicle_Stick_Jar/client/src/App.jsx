import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginReg from "./views/LoginReg";
import LoginRegDivs from "./views/LoginRegDivs";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import ViewEvent from "./views/ViewEvent";
import User from "./views/User";
import Home from "./views/Home";
import HomeTable2 from "./components/HomeTable2";
import { useEffect, useState } from "react";
import axios from 'axios';
import HomeTable1 from "./components/HomeTable1";

const DEBUG = false;

function App() {

    const [cats, setCategories] = useState([])

    useEffect( () => {
        axios
            .get("http://localhost:8000/api/yelp/categories")
            .then(cats => {
                DEBUG && console.log("Category Data:", cats.data)
                setCategories(cats.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Router>
            <Routes>
                <Route path="" element={<LoginReg />}>
                    <Route element={<LoginRegDivs />}>
                        <Route path="register" element={<RegisterForm />} />
                        <Route index element={<LoginForm />} />
                    </Route>
                </Route>
                <Route path="dashboard" element={<Home />}>
                    <Route path=":relation/:r_type" element={<HomeTable2 cats={cats}/>} />
                    <Route index element={<HomeTable1 />} />
                </Route>
                <Route path="event/:e_id" element={<ViewEvent />} />
                {/* <Route path="event/:g_id" element={<ViewGroup />} /> */}
                <Route path="user/:u_id" element={<User />} />
            </Routes>
        </Router>
    );
}

export default App;

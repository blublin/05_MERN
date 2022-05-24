import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import LoginReg from "./views/LoginReg";
import LoginRegDivs from "./views/LoginRegDivs";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginReg />}>
                    <Route element={<LoginRegDivs />}>
                        <Route path="register" element={<RegisterForm />} />
                        <Route index element={<LoginForm />} />
                    </Route>
                </Route>
                <Route path="/Home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;

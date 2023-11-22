import { Navigate, Route, Routes } from "react-router-dom";
import { useRef } from "react";
import "./styles/index.scss";
import { Menu } from "./sections/menu";
import { About } from "./sections/about";
import { Food } from "./sections/food";

function App() {
    const menuRef = useRef(null);

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/menu" element={<Menu />}/>
                <Route path="/food" element={<Food/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </div>
    );
}

export default App;

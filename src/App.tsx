import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./styles/index.scss";
import { Welcome } from "./sections/welcome";
import { Menu } from "./sections/menu";
import { useEffect } from "react";

function App() {
    const {pathname} = useLocation();
    useEffect(() => {

        setTimeout(()=> {
            window.scrollTo(0,0);
        }, 0)
    }, [pathname]);

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="menu" element={<Menu/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </div>
    );
}

export default App;

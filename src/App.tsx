import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./styles/index.scss";
import { Welcome } from "pages/welcome";
import { Menu } from "pages/menu";
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

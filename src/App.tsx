import { useRef } from "react";
import "./styles/index.scss";
import { Menu } from "./sections/menu";
import { About } from "./sections/about";

function App() {
    const menuRef = useRef(null);

    return (
        <div className="app">
            <About menuRef={menuRef}/>
            <Menu menuRef={menuRef}/>
        </div>
    );
}

export default App;

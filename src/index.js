import { HashRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Game1 from "./pages/Game1";
import NoPage from "./pages/NoPage";

import "./index.css";

export default function App() {
    return (
        <HashRouter basename="https://dysaca22.github.io/404-error-games/">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game1" element={<Game1 />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </HashRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
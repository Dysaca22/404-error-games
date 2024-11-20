import { Routes, Route, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Game1 from "./pages/Game1";
import NoPage from "./pages/NoPage";

import "./index.css";

export default function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/game1" element={<Game1 />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

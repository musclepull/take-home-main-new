import * as React from "react"
import { Routes, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Recipe from "./Containers/Recipe";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="recipe/:id" element={<Recipe />} />
        </Routes>

    );
}

export default App;
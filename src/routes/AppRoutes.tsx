import { Route, Routes } from "react-router";
import Home from "##/src/routes/Home.tsx";
import About from "##/src/routes/About.tsx";

function AppRoutes() {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
    </Routes>
}

export default AppRoutes;
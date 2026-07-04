import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import PYQ from "./pages/PYQ";
import Forum from "./pages/Forum";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App(){

    return(

        <Routes>

            <Route path="/" element={<Home/>}/>

            <Route path="/login" element={<Login/>}/>

            <Route path="/register" element={<Register/>}/>

            <Route path="/dashboard" element={<Dashboard/>}/>

            <Route path="/notes" element={<Notes />} />

            <Route path="/pyq" element={<PYQ />} />

            <Route path="/forum" element={<Forum />} />

            <Route path="/projects" element={<Projects />} />

            <Route path="/profile" element={<Profile />} />
            
            <Route path="*" element={<NotFound />} />

        </Routes>

    );

}

export default App;
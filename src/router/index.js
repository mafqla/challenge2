import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Login from "@/pages/Login";
import App from "@/App";
import Register from "@/pages/Register";
import Error from "@/pages/Error";
import Home from "@/pages/Home";

/**
 * History模式 -- BrowserRouter
 *  Hash模式 -- HasRouter
 */

const BaseRouter = () => (
    <Router>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route path='/home' element={<Home/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </Router>
)

export default BaseRouter

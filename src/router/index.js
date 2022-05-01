import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Login from "@/pages/Login";
import App from "@/App";
import Register from "@/pages/Register";
import Error from "@/pages/Error";
import Eda from "@/pages/EDA";
import RcaF from "@/pages/RCA-Facts";
import Rca from "@/pages/RCA";
import Summary from "@/pages/SUMMARY";

/**
 * History模式 -- BrowserRouter
 *  Hash模式 -- HasRouter
 */

const BaseRouter = () => (
    <Router>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route path='/rcaf' element={<RcaF/>}/>
                <Route path='/rca' element={<Rca/>}/>
                <Route path='/eda' element={<Eda/>}/>
                <Route path='/summary' element={<Summary/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </Router>
)

export default BaseRouter

import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from './LoginPage.js'
import NotFound from './NotFoundPage.js'
import HomePage from './HomePage.js'
import FetchApi from './fetch-api.js'
import GetData from './formData.js'
const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = <GetData/>/>
                <Route path='/login' element=<Login/>/>
                <Route path='/home' element=<HomePage/>/>
                <Route path='*' element=<NotFound/>/>
            </Routes>
        </BrowserRouter>
    </div>

)

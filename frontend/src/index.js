import React, {Fragment} from 'react';
import './asset/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Regestration from "./pages/Regestration";
import UserDetails from "./pages/UserDetails";
import EmailSendPage from "./pages/EmailSendPage";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/login'} element={<LoginPage/>}/>
              <Route path={'/registration'} element={<Regestration/>}/>
              <Route path={'/userinfo'} element={<UserDetails/>}/>
              <Route path={'/sendmail'} element={<EmailSendPage/>}/>
          </Routes>
      </BrowserRouter>
  </Fragment>
);

reportWebVitals();

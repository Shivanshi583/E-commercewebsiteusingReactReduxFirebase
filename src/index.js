import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";
import {Provider} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';


import "remixicon/fonts/remixicon.css";
 import "bootstrap/dist/css/bootstrap.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
  <ToastContainer
   theme="dark"
      position="top-right"
      autoClose={3000}
      
      closeOnClick
      pauseOnHover={false}
   
     />


    <App />
    </Provider>
   
    </BrowserRouter>
   
  </React.StrictMode>
);



import {Provider} from "react-redux";
import React from 'react';
import App from "./App";
import ReactDOM from "react-dom/client";
import {applyMiddleware, createStore} from "redux";
import {BrowserRouter} from "react-router-dom";
import thunk from "redux-thunk";
import reducers from "./reducers";


const root = ReactDOM.createRoot(document.getElementById('root'))
const reduxStore = createStore(reducers, applyMiddleware(thunk))

root.render(
    <React.StrictMode>
    <Provider store={reduxStore}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    </React.StrictMode>
)
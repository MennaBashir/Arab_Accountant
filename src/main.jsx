import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App';
import { CommentContext } from "./../src/components/commentSection/components/CommentContext";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <CommentContext>
                <App />
            </CommentContext>
        </BrowserRouter>
    </React.StrictMode>
);

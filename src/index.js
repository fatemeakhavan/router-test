import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import './index.css';
import App from './App';
import About from "./component/About";
import Books from "./component/Books";
import Book from "./component/Book";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>

              <Route path="/" element={<App/>}>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/books" element={<Books/>}>
                      <Route path="/books/:bookId" element={<Book/>}/>
                  </Route>


              </Route>

          </Routes>
      </BrowserRouter>

  </React.StrictMode>
);


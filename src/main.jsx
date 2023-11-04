import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Courses from './Courses.jsx';
import CourseDetails from './CourseDetails.jsx';
import NotFound from './components/NotFound.jsx';
import store from './Store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/course" element={<CourseDetails/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
    </Provider>
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CoursesPage from './CoursesPage';
import reportWebVitals from './reportWebVitals';
import SignupForm from './signup';
import LoginForm from './login';
import MathCoursePage from './Maths';
import EnrollForm from './enroll';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SpecialCoursesPage from './specialsubject';
import CodingCoursePage from './coding';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "CoursesPage",
    element: <CoursesPage></CoursesPage>
  },
  {
    path: "App",
    element: <App></App>
  },
  {
    path: "SignUp",
    element: <SignupForm></SignupForm>
  },
  {
    path: "Login",
    element: <LoginForm></LoginForm>
  },
  {
    path: "specialsubject",
    element: <SpecialCoursesPage></SpecialCoursesPage>
  },
  {
    path: "Maths",
    element: <MathCoursePage></MathCoursePage>
  },
  {
    path: "Coding",
    element: <CodingCoursePage></CodingCoursePage>
  },
  {
    path:"enroll",
    element: <EnrollForm></EnrollForm>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

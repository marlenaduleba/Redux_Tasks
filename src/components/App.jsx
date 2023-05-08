import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout.js";
import { Home } from "pages/Home.js";
import { Tasks } from "pages/Tasks.js";
import { Login } from "pages/Login.js";
import { Register } from "pages/Register.js";

export const App = () => {
  return (
   <Routes>
    <Route path="/"  element={<Layout/>} >
      <Route index element={<Home/>}  />
      <Route path="/tasks" element={<Tasks/>}  />
      <Route path="/login" element={<Login/>}  />
      <Route path="/register" element={<Register/>}  />
    </Route>
   </Routes>
  );
};

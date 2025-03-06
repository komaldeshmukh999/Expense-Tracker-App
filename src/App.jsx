import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/Auth/Signup"
import Login from "./Pages/Auth/Login"
import Layout from "./Components/Layout/Layout"
import Home from "./Pages/Home/Home"
import Profile from "./Pages/Profile/Profile"
import ForgotPassword from "./Pages/Auth/ForgotPassword"
import { useSelector } from "react-redux";
import "./App.css"

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sing-up" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<h1>Page not found 404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
  
     

    </>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";

import About from "./pages/About";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Levels from "./pages/Levels";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import UserList from "./components/UserList";
import Work from "./pages/Work";


export default function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/work" element={<Work />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/userList" element={<UserList />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

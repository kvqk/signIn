import React, { useState } from "react";
import SignInForm from "./components/Sign-in/SignIn";

import { SignUpForm } from "./components/Sign-up/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import ContactUs from "./pages/ContactUsPage/ContactUs";

import { Header } from "./components/Header";
import BlogsPage from "./pages/BlogsPage/Blogs";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";

function App() {
  const [user, setUser] = useState();
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          {/* <Route path="products" element={<ProductsPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="Users" element={<UsersPage />} />
          <Route path="Posts" element={<PostsPage />} /> */}
          <Route path="SignUp" element={<SignUpForm />} />
        </Routes>

        {/* <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

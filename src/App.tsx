/* eslint-disable @typescript-eslint/space-before-function-paren */
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
import MyPosts from "./pages/myPosts/MyPosts";
import PostsPage from "./pages/PostsPage/PostsPage";

function App() {
  const [user, setUser] = useState();
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="my-posts" element={<MyPosts />} />
          <Route path="Posts" element={<PostsPage />} />
          <Route path="sign-up" element={<SignUpForm />} />
          <Route path="sign-in" element={<SignInForm />} />
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

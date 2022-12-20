import React from "react";
import { useNavigate } from "react-router-dom";
import BlackLogo from "./Icons/BlackLogo";
import "./Header.css";

interface IHeader {
  name?: string,
  ref?: any,
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const Header:  React.FC<IHeader> = () => {
  const navigate = useNavigate();
  const handleProductsClick = () => {
    navigate("/products");
  };
  const handleContactUsClick = () => {
    navigate("/contact-us");
  };
  const handleBlogClick = () => {
    navigate("/blogs");
  };
  const handleLogoClick = () => {
    navigate("/");
  };
  const handleUsersClick = () => {
    navigate("/Users");
  };
  const handlePostsClick = () => {
    navigate("/Posts");
  };
  return (
    <div id="navBarBorder">
      <div id="logoClick" onClick={handleLogoClick}>
        <BlackLogo />
      </div>
      <div id="navBarAlign">
        <p id="text" onClick={handlePostsClick}>
          Posts
        </p>
        <p id="text" onClick={handleUsersClick}>
          Users
        </p>
        <p id="text" onClick={handleBlogClick}>
          Blog
        </p>
        <p id="text" onClick={handleContactUsClick}>
          Contact
        </p>
        <p id="text">Log In</p>
        <p className="getAccess">Get Access</p>
      </div>
    </div>
  );
};
export default Header;

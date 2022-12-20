import React from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { blogsData } from "../../data.js";
import "./Blogs.css";

const BlogsPage = () => {
  const navigate = useNavigate();
  const handleBlogClick = (id) => {
    navigate(`/blog/${id}`);
  };
  return (
    <>
      <div id="color">
        <Header />
        <div id="page">
          <div style={{ paddingLeft: "146px" }}>
            <p id="title">Blog posts</p>
            <p id="latestUpdateText">
              Our latest updates and blogs about managing your team
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {blogsData.map((blog) => {
              return (
                <div id="boxes" onClick={() => handleBlogClick(blog.id)} key={blog.id}>
                  <img id="img" src={blog.imgUrl} alt="chairs" />
                  <p id="tollText">{blog.title}</p>
                  <p id="boxOneText">{blog.text}</p>
                  <div id="pfpDiv">
                    <img id="pfp" src={blog.profileImgUrl} alt="wade" />
                    <p id="wade">{blog.name}</p>
                    <div id="seporator"></div>
                    <div id="wade">{blog.date}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogsPage;

import { Header } from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import React from "react";
import "./BlogPage.css";
import { useParams } from "react-router-dom";
import { blogsData } from "../../data";

const BlogPage = () => {
  const { id } = useParams();

  const selectedBlog = blogsData.find((blog) => {
    return blog.id === id;
  });

  return (
    <>
      <Header />
      <div id="page">
        <div id="mainDiv">
          <p id="secretText">{selectedBlog?.title}</p>
          <div id="pictureDiv">
            <img
              id="personPicture"
              src="https://media.discordapp.net/attachments/1028768432398815305/1032434456499339295/unknown.png"
              alt="personPicture"
            />
            <div id="shedrackDiv">
              <p id="shedrackText">Shedrack eze</p>
              <div id="tinyBar"></div>
              <p id="shedrackText">2nd January,2022</p>
            </div>
          </div>
          <div>
            <img
              id="clapping"
              src="https://media.discordapp.net/attachments/1028768432398815305/1032441735248359464/unknown.png"
              alt="clapping"
            />
          </div>
          <div>
            <p id="hugeBodyText">
              If you’re thinking of starting a blog of your own, but just don’t
              have a clue on what to blog about, then fear not! <br /> <br />{" "}
              <br /> In this article, I have included a whole load of blog
              examples from a wide variety of different niches, all run on
              different blogging platforms like WordPress, Joomla! and Drupal.{" "}
              <br /> <br /> Since the beginning of the internet, millions and
              millions and millions of blogs have been created. Many have died
              due to lost interest or their owners giving up on the idea, while
              others have thrived and continue to grow, making money and earning
              their owners a steady income. It’s a constant evolution of content
              that keeps people coming back for more, especially if these blogs
              contact highly resourceful material that people find useful and
              interesting. <br /> <br />
              Each example listed in this blog post are all different in some
              way and all bring something unique to their readers & subscribers.
              I want to show you what is possible and how you can take
              inspiration from them and create an awesome blog of your own.
              <br /> <br /> Some of these blogs make over $100k a month, others
              are just a hobby for their owners, but all have the same purpose
              at their core… the love of writing and sharing information. <br />{" "}
              <br /> Some of these blogs make over $100k a month, others are
              just a hobby for their owners, but all have the same purpose at
              their core… the love of writing and Some of these blogs make over
              $100k a month, others are just a hobby for their owners, but all
              have the same purpose at their core… the love of writing and
              sharing information. <br /> <br /> Some of these blogs make over
              $100k a month, others are just a hobby for their owners, but all
              have the same purpose at their core… the love of writing and
              sharing information.
            </p>
            <div id="writtenByDiv">
              <img
                id="personPicture"
                src="https://media.discordapp.net/attachments/1028768432398815305/1032434456499339295/unknown.png"
                alt="personPicture"
              />
              <p id="shedrackText">Written by</p>
              <p id="shedrackTextTwo">Shedrack Eze</p>
              <p id="ceoText">CEO Team App</p>
              <div id="longGreyLine"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;

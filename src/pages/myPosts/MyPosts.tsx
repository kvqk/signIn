/* eslint-disable @typescript-eslint/indent */
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { Header } from "../../components/Header";
import axios, { Axios } from "axios";
import "./myPosts.css";

interface MyPostBoxProps {
  image: string;
  content: string;
  title: string;
}
const UserBox = (props: MyPostBoxProps) => {
  const { title, content, image } = props;

  return (
    <div className="myPostsBox">
      <div id="myPostsCentering">
        <h1>{title}</h1>
        <p className="myPostsContent">{content}</p>
        <img id="myPostsImg" src={image} alt="image" />
      </div>
    </div>
  );
};

// declare UsersPage
// and also declare an array with data and setdata and it takes useState
// then declare another variable with an array with loading and setLoading and it takes useState(false)

const MyPosts = () => {
  const [data, setData] = useState<
    Array<{
      image: string;
      id: string;
      content: string;
      title: string;
    }>
  >();
  const [loading, setLoading] = useState(false);
  console.log(data);
  useEffect(() => {
    axios
      .get("http://localhost:1011/posts", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setLoading(true);
        setTimeout(() => {
          setData(response.data.data);
          setLoading(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="usersPage">
      <div>
        <Header />
      </div>
      <div>
        {loading && <p>Loading ...</p>}
        {data?.map((object) => {
          // const paragraph = document.getElementById("edit");
          // const editButton = document.getElementById("edit-button");
          // const endButton = document.getElementById("end-editing");

          // editButton?.addEventListener("click", function () {
          //   paragraph.contentEditable = true;
          // });
          // endButton?.addEventListener("click", function () {
          //   paragraph.contentEditable = false;
          // });
          return (
            <div key={object.id}>
              <UserBox
                title={object.title}
                content={object.content}
                image={object.image}
              />
              <button type="submit" id="editButton">
                Edit
              </button>
              <button type="submit" id="endButton">
                Done
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default MyPosts;

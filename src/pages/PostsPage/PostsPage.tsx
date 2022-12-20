import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import LikeButton from "../../components/Icons/LikeButton";
import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import "./PostsPage.css";
import PostComponent from "../../components/PostCompent/PostComponent";

const PostsPage = (props) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  console.log(data);
  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/post?limit=10", {
        headers: {
          "app-id": "636827fc640da523e8e5d862",
        },
      })
      .then((response) => {
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
    <div id="backgroundColor">
      <div id="postsPage">
        <Header />
      </div>
      <div>{loading && <p>Loading ...</p>}</div>
      {data?.map((object) => {
        console.log(object);
        return (
          <div>
            <PostComponent
              id={object.id}
              image={object.image}
              likes={object.likes}
              tags={object.tags}
              text={object.text}
              title={object.title}
              publishDate={object.publishDate}
              picture={object.owner.picture}
              firstName={object.owner.firstName}
              lastName={object.owner.lastName}
            />
          </div>
        );
      })}

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PostsPage;

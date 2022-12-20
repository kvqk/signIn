import React from "react";
import LikeButton from "../Icons/LikeButton";
interface IPostComponent {
  name: string;
  ref: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: any;
  image: any;
  likes: any;
  tags: any;
  text: any;
  title: any;
  publishDate: any;
  picture: any;
  firstName: any;
  lastName: any;
}

const PostComponent: React.FC<IPostComponent> = (props) => {
  return (
    <div id="postsList">
      <div className="postBoxes">
        <div id="profileDiv">
          <img className="postsProfile" src={props.picture} alt="glasses" />
          <div id="postsText">
            <p className="postsText">
              {props.title}
              {props.firstName}
              {props.lastName}
            </p>
            <p className="date">{props.publishDate}</p>
          </div>
        </div>
        <div id="post">
          <img className="postImg" src={props.image} alt="dog" />
          <div
            style={{
              display: "flex",
              width: "100%",
              marginLeft: "20px",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <p className="date">{props.publishDate}</p>
            <p className="date">{props.text}</p>
            <div style={{ marginTop: "20px" }}>
              <span
                style={{
                  marginRight: "20px",
                  padding: "5px",
                  color: "white",
                  backgroundColor: "pink",
                  borderRadius: "2px",
                  border: "2px solid black",
                }}
              >
                hello
              </span>
              <span
                style={{
                  marginRight: "20px",
                  padding: "5px",
                  color: "white",
                  backgroundColor: "pink",
                  borderRadius: "2px",
                  border: "2px solid black",
                }}
              >
                hellohello
              </span>
            </div>
            <div style={{ marginTop: "20px" }}>
              <LikeButton />
              <span style={{ marginLeft: "16px" }}>{props.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostComponent;

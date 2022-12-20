import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import axios, { Axios } from "axios";
import "./UsersPage.css";

const UserBox = (props) => {
  const { imgUrl, id, title, firstName, lastName } = props;

  return (
    <div className="userBox">
      <img className="userProfile" src={imgUrl} alt="pfp" />
      <div className="textDiv">
        <p className="userID">{id}</p>
        <div>
          <p className="usersName">{title}</p>
          <p className="usersName">{firstName}</p>
          <p className="usersName">{lastName}</p>
        </div>
      </div>
    </div>
  );
};

// declare UsersPage
// and also declare an array with data and setdata and it takes useState
// then declare another variable with an array with loading and setLoading and it takes useState(false)

const UsersPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(data);
  //setData sets the new value of the data
  // data is a variable with no value

  //setLoading sets the new value of loading
  // loading has a initial value of false for example useState(false)

  //useEffect allows you to run tasks when react loads
  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/user", {
        headers: {
          "app-id": "636827fc640da523e8e5d862",
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

  // axios.get stars the api call

  //.get "https://dummyapi.io/data/v1/user"

  //headers is where you put your app id,, "app-id": "636827fc640da523e8e5d862"

  //.then takes response
  //then you use the setLoading, and it takes true
  // setTimeout => then use setData, and it takes responce.data.data
  //then set loading to false
  //.then is succesful you get a responce, from the responce

  //.catch takes error then you console logg error

  return (
    <div id="usersPage">
      <div>
        <Header />
      </div>
      <div>
        {loading && <p>Loading ...</p>}
        {data?.map((object) => {
          return (
            <div key={object.id}>
              <UserBox
                id={object.id}
                imgUrl={object.picture}
                title={object.title}
                firstName={object.firstName}
                lastName={object.lastName}
              />
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
export default UsersPage;

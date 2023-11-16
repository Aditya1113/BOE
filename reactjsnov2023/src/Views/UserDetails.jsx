import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";

const UserDetails = () => {
  const [userInfo, setUserInfo] = useState();

  //obtaining route parameter
  // const { id } = useParams();
  const location = useLocation()
  // console.log(location.state.data)

  useEffect(() => {
    setUserInfo(location.state.data)
  }, []);
  return (
    <div className="container">
      {userInfo ? (
        <ul className="collection">
          <li class="collection-item avatar">
            <img src="" alt="" />
            <span class="title">{userInfo.name}</span>
            <p>
              {userInfo.email} <br />
              {userInfo.username}
            </p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">grade</i>
            </a>
          </li>
        </ul>
      ) : (
        <h4>Loading.....</h4>
      )}
    </div>

  );
};

export default UserDetails;

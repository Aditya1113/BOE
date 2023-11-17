import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, useLocation, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const [userInfo, setUserInfo] = useState({});

  //obtaining route parameter
  const { id } = useParams();
  // const location = useLocation();

  const navigate = useNavigate();

  // const personal = {
  //   id:userInfo?.id,
  //   phone: userInfo?.phone,
  //   website: userInfo?.website,
  // };

  // const company = {
  //   name:userInfo?.name,
  //  catchPhrase: userInfo?.catchPhrase,
  //   bs: userInfo?.bs,
  // };

  // console.log(location.state?.data)

  useEffect(() => {
     
    axios.get(`http://localhost:3001/users/${id}`)
    .then(res=>setUserInfo(res.data))
  }, []);

  return (
    <div className="container">
      {userInfo ? (
        <ul className="collection">
          <li className="collection-item avatar">
            <img
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553__340.png"
              alt=""
              className="circle"
            />
            <span className="title">{userInfo.name}</span>
            <p>
              {userInfo.email} <br />
              {userInfo.username}
            </p>
            <a href="#!" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </li>
        </ul>
      ) : (
        <h4>Loading.....</h4>
      )}

      <div className="row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3">
              <Link to={`/users/${userInfo.id}/personal`}>
                Personal
              </Link>
            </li>
            <li className="tab col s3">
              <Link
                className="active"
                to={`/users/${userInfo.id}/address`}
              >
                Address
              </Link>
            </li>

            <li className="tab col s3">
              <Link
                className="active"
                to={`/users/${userInfo.id}/company`}
              >
                Company
              </Link>
            </li>
          </ul>
        </div>
       
      </div>
      <Outlet/>
    </div>
  );
};

export default UserDetails;

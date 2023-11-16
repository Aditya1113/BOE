import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData, useLocation, useParams } from "react-router-dom";

const UserDetails = () => {
  const [userInfo, setUserInfo] = useState();

  //obtaining route parameter
  // const { id } = useParams();
  const location = useLocation();
  // console.log(location.state.data)

  useEffect(() => {
    setUserInfo(location.state.data);
  }, []);

  const personal={
    phone:userInfo?.phone,
    website:userInfo?.website
  }
  return (
    <div className="container">
      {userInfo ? (
        <ul className="collection">
          <li class="collection-item avatar">
            <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553__340.png" alt="" className="circle"/>
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

      <div className="row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3">
              <Link to='/userdetails/personal' state={{personal:personal}}>Personal</Link>
            </li>
            <li className="tab col s3">
              <Link className="active" to='/userdetails/address' state={{address:userInfo?.address}} >
                Address
              </Link>
            </li>

            <li className="tab col s3">
            <Link className="active" to='/userdetails/company' state={{company:userInfo?.company}} >
                Company
              </Link>
            </li>
          </ul>
        </div>
        <Outlet/>
      </div>
    </div>
  );
};

export default UserDetails;

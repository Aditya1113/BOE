import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const DetailsInfo = (props) => {
  const [userData, setUserData] = useState();

  // const [userid, setUserId] = useState();

  const { id } = useParams();

  useEffect(() => {
    // setUserId(id);

    axios
      .get(`http://localhost:3001/users/${id}`)
      .then((res) => setUserData(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      {userData ? (
        <ul className="collection">
          <li className="collection-item avatar">
            <span className="title">
              {props.type === "personal"
                ? `Id=${userData?.id}`
                : props.type === "address"
                ? `Street=${userData?.address?.street}`
                : `Name=${userData?.name}`}
            </span>

            <p>
              {props.type === "personal" ? (
                <>
                  Phone = {userData?.phone}
                  <br />
                  website = {userData?.website}
                </>
              ) : props.type === "address" ? (
                <>
                  City = {userData?.address?.city}
                  <br />
                  Zipcode = {userData?.address?.zipcode}
                </>
              ) : (
                <>
                  Description = {userData?.company?.catchPhrase}
                  <br />
                  Work = {userData?.company?.bs}
                </>
              )}
            </p>
          </li>
        </ul>
      ) : (
        <h4>Loading......</h4>
      )}
    </div>
  );
};
export default DetailsInfo;

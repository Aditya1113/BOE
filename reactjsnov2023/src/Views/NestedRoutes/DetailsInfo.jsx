import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DetailsInfo = (props) => {
  const [userInfo, setUserInfo] = useState();
  const location = useLocation();

  useEffect(() => {
    setUserInfo(location.state?.data);
  }, [location.state]);
  return (
    <div className="container">
      {userInfo ? (
        <ul className="collection">
          <li class="collection-item avatar">
            <span class="title">
              {props.type === "personal"
                ? `Id=${userInfo.id}`
                : props.type === "address"
                ? `Street=${userInfo.street}`
                : `Name=${userInfo.name}`}
            </span>

            <p>
              {props.type === "personal" ? (
                <>
                  Phone = {userInfo.phone}
                  <br />
                  website = {userInfo.website}
                </>
              ) : props.type === "address" ? (
                <>
                  City = {userInfo.city}
                  <br />
                  Zipcode = {userInfo.zipcode}
                </>
              ) : (
                <>
                  Description = {userInfo.catchPhrase}
                  <br />
                  Work = {userInfo.bs}
                </>
              )}
            </p>
          </li>
        </ul>
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
};
export default DetailsInfo;

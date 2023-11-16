import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUserDetails(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {userDetails ? (
            userDetails.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>
                <div className="preloader-wrapper active">
                  <div className="spinner-layer spinner-red-only">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

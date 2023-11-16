import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [userDetails, setUserDetails] = useState();

const fetchData = async()=>{
    try{
        const resposne = await  axios.get("http://localhost:3001/users")
        // console.log(resposne.data)
        setUserDetails(resposne.data)
    }

    catch(error){
        console.log("Error fetching data",error)
    }
}

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => setUserDetails(res.data))
    //   .catch((error) => console.log(error));

    fetchData()
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
                {/* <td><Link to={`/users/${user.id}`}>{user.id}</Link></td> */}
                <td>
                <td><Link to='/userdetails' state={{data:user}}>{user.id}</Link></td>
                </td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <Link to='user/edit/' state={user} className="btn btn-small orange waves-effect waves-light">Edit</Link>
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

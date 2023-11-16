// import "./App.css";
// import React from "react";
// import Header from "./Components/Header";
// import Person from "./Components/Person";
// import Student from "./Components/Student";
// import MovieComp from "./Components/MovieComp";
// import People from "./Components/People";
// import Form from "./Components/Form";
// import TodoList from "./Components/TodoList";
// import UseEffectDemo from "./Components/UseEffectDemo";
// import UseContextDemo from "./Components/UseContext/UseContextDemo";
// import UseRefDemo2 from "./Components/UseRef/UseRefDemo2";
// import QuizApp from "./QuizApp/QuizApp";
// import UseMemoDemo from "./Components/UseMemoDemo";
// import UseTransitionHook from "./Components/UseTransitionHook";
// import UseCallBackDemo from "./Components/UseCallBack/UseCallBackDemo";
// import Counter from "./Components/Counter";
// import Layout from "./Components/Layout";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import Home from "./Views/Home";
// import Menu from "./Components/Menu";
// import About from "./Views/About";
// import ViewNotFound from "./Views/ViewNotFound";

// const App = () => {
//   const personInfo = {
//     email: "peter@gmail.com",
//     fullname: "Peter Parker",
//   };

//   const StudentDetails = [
//     {id:1001,name:'Rose',gender:'Female'},
//     {id:1002,name:'Peter',gender:'Male'},
//     {id:1003,name:'John',gender:'Male'},
//     {id:1004,name:'Kerry',gender:'Female'},
//   ]

//   return (
//     <div className="App">
//       {/* <Header name="Peter Parker" age={24} isAdmin={false} />
//       <Header name="Rose Dawson" />
//       <Header name="Kerry Smith" age={37} />

//       <Person personDetails={personInfo} />

//       <Student students={StudentDetails}/>
//       <MovieComp/> */}
//       {/* <People/> */}
//       {/* <Form/> */}
//       {/* <TodoList/> */}
//       {/* <UseEffectDemo/> */}
//       {/* <UseContextDemo/> */}
//       {/* <QuizApp/> */}
//       {/* <UseRefDemo/> */}
//       {/* <UseRefDemo2/> */}
//       {/* <UseMemoDemo/> */}
//       {/* <UseCallBackDemo/> */}
//       {/* <UseTransitionHook/> */}
//       {/* <Counter/> */}

//       {/* <Layout/> */}

//       <BrowserRouter>
//       <Menu/>
//           <Routes>
//             <Route path="/" element={<Navigate to="/home"/>}/>
//             <Route path='home' element={<Home/>}/>
//             <Route path='about' element={<About/>}/>
//             <Route path="*" element = {<ViewNotFound/>}/>
//           </Routes>

//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;

// import "./App.css";
import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import Menu from "./Components/Menu";
import About from "./Views/About";
import Login from "./Views/Login";
import ViewNotFound from "./Views/ViewNotFound";
import Profile from "./Views/Profile";
import Protected from "./Views/Protected";
import Users from "./Views/Users";
import UserDetails from "./Views/UserDetails";
import Personal from "./Views/NestedRoutes/Personal";
import Address from "./Views/NestedRoutes/Address";
import Company from "./Views/NestedRoutes/Company";
import DetailsInfo from "./Views/NestedRoutes/DetailsInfo";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<Protected Component={Home} />} />
          <Route path="about" element={<Protected Component={About} />} />
          <Route path="login" element={<Login />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetails />} />
          <Route path="userdetails" element={<UserDetails />}>
            <Route path="personal" element={<DetailsInfo type='personal' />} />
            <Route path="address" element={<DetailsInfo type='address'/>} />
            <Route path="company" element={<DetailsInfo type='company'/>} />
          </Route>
          <Route path="profile" element={<Protected Component={Profile} />} />
          <Route path="*" element={<ViewNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

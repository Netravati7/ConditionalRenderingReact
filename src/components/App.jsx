import React from "react";
import Login from "./Login";
import Input from "./Input";
import Form from "./Form";

var userIsRegistered = false;

// const currentTime = new Date().getHours();
// console.log(currentTime);

function App() {
  return (
    <div className="container">
      {
        //isLoggedIn ? <h1>Hello</h1> : <Login />
        //using ternary opeartor
        //currentTime > 12 ? <h1>Why are you Still Working?</h1> : null
        //using && opeartor
        //currentTime > 12 && <h1>Why are you Still Working?</h1>
        <Form isRegistered={userIsRegistered} />
      }
    </div>
  );
}

export default App;

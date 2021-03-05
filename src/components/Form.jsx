import React from "react";
import Input from "./Input";

function form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="UserName" />
      <Input type="text" placeholder="Password" />
      {!props.isRegistered && (
        <Input type="text" placeholder="Confirmparrword" />
      )}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default form;

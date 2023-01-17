import React, { useState } from "react";
import axios from "axios";

export default function CreateUser() {
  const [user, setUser] = useState({ username: "" });

  const onChange = (e) => {
    const newUser = { ...user };
    newUser["username"] = e.currentTarget.value;
    setUser(newUser);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user.username);
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));
    setUser({ username: "" });
  };
  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type={"text"}
            required
            className="form-control"
            value={user.username}
            onChange={onChange}
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type={"submit"}
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

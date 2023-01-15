import React, { useState } from "react";

export default function CreateUser() {
  const [username, setUser] = useState("");

  const onChange = (e) => {
    setUser(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    setUser("");
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
            value={username}
            onChange={onChange}
          />
        </div>
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

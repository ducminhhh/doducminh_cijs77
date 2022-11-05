import React from "react";
import { useState } from "react";
export default function From() {
  const [user, setUser] = useState({
    email: " ",
    passwork: " ",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user", user);
  };
  const handleOnChangeEmail = (e) => {
    setUser({
      ...user,
      email: e.target.value,
    });
  };
  const handleOnChangePasswork = (e) => {
    setUser({
      ...user,
      passwork: e.target.value,
    });
  };
  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1" value={user.email}>
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleOnChangeEmail}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" value={user.passwork}>
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={handleOnChangePasswork}
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        <button>Login</button>
        <button>Register</button>
      </form>
    </div>
  );
}

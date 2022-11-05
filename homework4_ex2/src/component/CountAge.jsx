import React from "react";
import { useState } from "react";
export default function CountAge() {
  const [user, setUser] = useState({ name: "minh", age: 18 });
  const upDateAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };
  return (
    <div>
      <h3>
        i'm {user.name}. i'm {user.age} years old
      </h3>
      <button onClick={() => upDateAge()}>update your age</button>
    </div>
  );
}

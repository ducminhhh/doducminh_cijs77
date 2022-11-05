import { useState } from "react";
const From = () => {
  const [user, setUser] = useState({ name: " ", passwork: " " });

  const handleSubmitFrom = (e) => {
    e.preventDefault();
    console.log("user : ", user);
  };
  const handleNameOnChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };
  const handlePassWorkOnChange = (e) => {
    setUser({ ...user, passwork: e.target.value });
  };

  return (
    <form onSubmit={handleSubmitFrom}>
      <label>
        name:
        <input type="text" onChange={handleNameOnChange} />
      </label>
      <label>
        passwork:
        <input type="passwork" onChange={handlePassWorkOnChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default From;

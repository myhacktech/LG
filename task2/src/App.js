import { useState } from "react";
import "./styles.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?");
    const jsonresponse = await response.json();
    setUsers(jsonresponse.data);
  };

  return (
    <>
      <h1 className="hs">
        <div className="he">
          {" "}
          Welcome to the Employee Section
          <br />
          At Lets Grow More
        </div>
        <button onClick={loadUsers} onLoad=" myloader()">
          Get Users
        </button>
      </h1>
      <marquee className="st">
        <b>
          {" "}
          <br /> Our Employees User Card
        </b>
      </marquee>
      <div className=""> </div>
      <div className="cr">
        {users.map((t, id) => {
          return (
            <div className="user" key={id}>
              <img src={t.avatar} />
              <div className="name">
                {t.first_name}
                {t.last_name}
              </div>

              <div> {t.email} </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;

import React, { useState } from "react";
import PropTypes from "prop-types";

async function loginAdmin(credentials) {
  return fetch("https://small-talk-helper.woncyberschool.com/api/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = ({ setToken }) => {
  const [adminName, setAdminName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginAdmin({
      admin_name: adminName,
      password,
    });
    setToken(token);
  };

  return (
    <div>
      <h3>login</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <p>admin name</p>
            <input type="text" onChange={(e) => setAdminName(e.target.value)} />
          </label>
          <label>
            <p>password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;

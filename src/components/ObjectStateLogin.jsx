import { useState } from "react";

export default function Login() {
  const [userDetails, setUserDetails] = useState({
    enteredEmail: "",
    enteredPassword: "",
  });

  const handleInputChange = (identifier, value) => {
    setUserDetails((prev) => ({ ...prev, [identifier]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userDetails.enteredEmail, userDetails.enteredPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            value={userDetails.enteredEmail}
            onChange={(event) => handleInputChange("enteredEmail" ,event.target.value)}
            id="email"
            type="email"
            name="email"
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="pjassword">Password</label>
          <input
            value={userDetails.enteredPassword}
            onChange={(event) => handleInputChange("enteredPassword" ,event.target.value)}
            id="password"
            type="password"
            name="password"
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

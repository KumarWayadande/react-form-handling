import { useState } from "react";
export default function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !userDetails.email.includes("@");
  const passwordIsInvalid =
    didEdit.password && !(userDetails.password.length >= 8);

  const handleBlur = (identifier) => {
    setDidEdit((prev) => ({
      ...prev,
      [identifier]: true,
    }));
  };

  const handleInputChange = (identifier, value) => {
    setUserDetails((prev) => ({ ...prev, [identifier]: value }));
    setDidEdit((prev) => ({ ...prev, [identifier]: false }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            value={userDetails.email}
            onChange={(event) => handleInputChange("email", event.target.value)}
            onBlur={(e) => handleBlur("email")}
            id="email"
            type="email"
            name="email"
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email...</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            value={userDetails.password}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            onBlur={(e) => handleBlur("password")}
            id="password"
            type="password"
            name="password"
          />
          <div className="control-error">
            {passwordIsInvalid && (
              <p>Password must contain at least 8 characters...</p>
            )}
          </div>
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}

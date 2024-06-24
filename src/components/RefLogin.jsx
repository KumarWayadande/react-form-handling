import { useRef } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            ref={email}
            onChange={handleEmailChange}
            id="email"
            type="email"
            name="email"
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="pjassword">Password</label>
          <input
            ref={password}
            onChange={handlePasswordChange}
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

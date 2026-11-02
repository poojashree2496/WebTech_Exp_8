import { useState } from "react";

function Login() {
  const [user, setUser] = useState({ gamerTag: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg(user.gamerTag && user.password ? "Welcome back, " + user.gamerTag + "!" : "Please fill both fields.");
  };

  return (
    <div className="login">
      <div className="login-art">
        <h2>Ready Player?</h2>
        <p>Log in to join the tournaments of the day.</p>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>Gamer Tag</label>
        <input value={user.gamerTag} placeholder="Enter gamer tag"
          onChange={(e) => setUser({ ...user, gamerTag: e.target.value })} />
        <label>Password</label>
        <input type="password" value={user.password} placeholder="Enter password"
          onChange={(e) => setUser({ ...user, password: e.target.value })} />
        <button type="submit">Login</button>
        {msg && <p className="success">{msg}</p>}
      </form>
    </div>
  );
}

export default Login;

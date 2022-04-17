import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Clayful from "clayful/client-js";

function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEamil(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var Customer = Clayful.Customer;

    var payload = {
      email,
      password,
    };
    console.log("payload", payload);

    Customer.createMe(payload, function (err, result) {
      if (err) {
        // Error case
        console.log(err.code);
        return;
      }
      navigate("/login");
    });
  };

  return (
    <div className="auth-wrapper">
      <h1>회원가입</h1>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleEmailChange}
          placeholder="Apple ID"
          type="email"
          name="email"
          value={email}
        />
        <br />
        <input
          onChange={handlePasswordChange}
          placeholder="비밀번호"
          type="password"
          name="password"
          value={password}
        />
        <br />
        <button type="submit">회원가입</button>
        <br />
        <Link to="/login" style={{ color: "gray", textDecoration: "none" }}>
          이미 Apple ID가 있다면? 지금 로그인.
        </Link>
      </form>
    </div>
  );
}

export default RegisterPage;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Clayful from "clayful/client-js"


function loginPage() {
  // const [email, setEamil] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <div className="auth-wrapper">
      <h1>로그인</h1>

      {/* <form onSubmit={handleSubmit}> */}
        <input
          // onChange={handleEmailChange}
          placeholder="Apple ID"
          type="email"
          name="email"
          // value={email}
        />

        <input
          // onChange={handlePasswordChange}
          placeholder="비밀번호"
          type="password"
          name="password"
          // value={password}
        />
        <p>
          Apple ID는 iTunes, App Store, iCloud에 로그인할 때 사용하는 이메일 주소입니다.
        </p>
        <button type="submit">로그인</button>
        <Link to="/register" style={{ color: "gray", textDecoration: "none" }}>
          {""}
          이미 Apple ID가 없으신가요? 지금 생성.
        </Link>
      {/* </form> */}
    </div>
  );
}

export default loginPage;

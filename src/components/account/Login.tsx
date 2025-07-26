import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const nav = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleClick = async () => {
    try {
      const f = new FormData();
      f.append("username", data.username);
      f.append("password", data.password);
      const res = await axios.post(`${import.meta.env.VITE_IP}/login`, f);
      //   console.log(res.headers.get('Authorization'));

      localStorage.setItem("harsper-token", res.headers.get("Authorization"));
      
      nav('/')
    } catch (err) {
      alert(err.response.data.message)
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
          placeholder="아이디"
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="비밀번호"
        />
        <button onClick={handleClick}>Sumit</button>
      </div>
    </div>
  );
};

export default Login;

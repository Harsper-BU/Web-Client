import axios, { type AxiosResponse } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./Login.module.css";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const nav = useNavigate();
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
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
      const res: AxiosResponse = await axios.post(`${import.meta.env.VITE_IP}/login`, f);
      localStorage.setItem("harsper-token", res.headers.get("Authorization"));
      nav('/main')
    } catch (err: unknown) {
      if(axios.isAxiosError(err)){
        console.log(err);
        
        alert(err.response?.data.message);
      } else {
        alert("알 수 없는 오류발생!");
      }
    }
  };
  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.code!=="Enter") return;
    handleClick();
  }
  return (
    <div className={s.container}>
      <h1>로그인</h1>
      <div className={s.inputGroup}>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
          placeholder="아이디"
        />
      </div>
      <div className={s.inputGroup}>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="비밀번호"
          onKeyDown={handleKeyDown}
        />
      </div>
      <button onClick={handleClick} className={s.button}>로그인</button>
    </div>
  );
};

export default Login;

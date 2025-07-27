import axios from "axios";
import { useState } from "react";
import s from "./Join.module.css";

const Join = () => {
  const [data, setData] = useState({ name: "", userId: "", password: "" });

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
      f.append("name", data.name);
      f.append("userId", data.userId);
      f.append("password", data.password);
      const res = await axios.post(
        `${import.meta.env.VITE_IP}/api/user/signup`,
        f
      );
      console.log(res);
    } catch (err) {
      // console.error(err);
    }
  };
  return (
    <div className={s.container}>
      <h1>회원가입</h1>

      <div className={s.inputGroup}>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="이름"
        />
      </div>
      <div className={s.inputGroup}>
        <input
          type="text"
          name="userId"
          value={data.userId}
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
        />
      </div>
      <button onClick={handleClick} className={s.button}>회원가입</button>
    </div>
  );
};

export default Join;

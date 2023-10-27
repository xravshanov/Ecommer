
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context";
import './SingUp.css'

export default function SignUp() {
  const { setUser } = useGlobalContext();
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return;
    setUser({ name: name });
    navigate("/dashboard");
  };
  return (
    <div className="signup">
      <div className="container">
      <form className="form" onSubmit={handleSubmit} action="">
        <h3 className="register">Регистрация</h3>
        <input
        // className="input1"
          type="text"
          name="username..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="username..."
        />
        <br />
        <button className="btn-register">Регистрация</button>
      </form>
      </div>
    </div>
  );
}

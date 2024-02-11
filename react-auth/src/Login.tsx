// LoginForm.js
import React, { useState } from "react";
import { useAuth } from "./hooks/useAuth";
import './Login.css';

// Define initial form state
const initialFormState = {
  username: "",
  password: "",
};

// Check if form is valid
function formValid(state: typeof initialFormState) {
  return state.username && state.password;
}

// LoginForm component
const LoginForm: React.FC = () => {
  // State for form input values
  const [credentials, setCredentials] = useState(initialFormState);

  // Access authentication context
  const auth = useAuth();

  // Handle form submission
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValid(credentials)) {
      await auth.loginAction(credentials);
    }
  };

  // Handle input changes
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={credentials.username}
        onChange={handleInput}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={credentials.password}
        onChange={handleInput}
      />
      <button className="button" type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;

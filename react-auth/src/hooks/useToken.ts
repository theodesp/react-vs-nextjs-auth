import { useState } from "react";

const ACCESS_TOKEN_KEY = "access_token";

// Custom hook for managing authentication token
export default function useToken() {
  // Function to retrieve token from local storage
  const getToken = () => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    return token;
  };

  // State to store authentication token
  const [token, setToken] = useState(getToken());

  // Function to save token to local storage and update state
  const saveToken = (data: string | null) => {
    if (!data) {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
    } else {
      localStorage.setItem(ACCESS_TOKEN_KEY, data);
      setToken(data);
    }
  };

  // Return functions to set and retrieve token
  return {
    setToken: saveToken,
    token,
  };
}

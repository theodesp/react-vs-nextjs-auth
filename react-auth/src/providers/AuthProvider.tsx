import React, { PropsWithChildren, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";
import appConfig from "../app.config";

interface UserData {
  name: string;
}

export interface Credentials {
  username: string;
  password: string;
}

interface LoginData {
  token: string;
  user: UserData;
}

// Define context type
interface AuthContextType {
  token: string | null;
  user: UserData | null;
  loginAction: (data: Credentials) => void;
  logOutAction: () => void;
}

// Create context with initial empty object
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define AuthProvider component
const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const { token, setToken } = useToken();
  const navigate = useNavigate();

  const loginAction = async (credentials: Credentials) => {
    try {
      const response = await fetch(`${appConfig.AUTH_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      // Handle login success
      console.log("Login success: Redirect to profile page");
      const res: LoginData = await response.json();
      if (res.token) {
        setUser(res.user);
        setToken(res.token);
        navigate("/profile");
        return;
      }
      throw new Error("Invalid response");
    } catch (err) {
      console.error(err);
    }
  };

  const logOutAction = () => {
    setUser(null);
    setToken(null);
    navigate("/login");
  };

  // Provide context value to consumers
  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOutAction }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

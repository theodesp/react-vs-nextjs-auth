import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import AuthProvider from "./providers/AuthProvider";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<Protected />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

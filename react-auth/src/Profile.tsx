import { useAuth } from "./hooks/useAuth";

const UserProfilePage = () => {
  // Access user data and logout function from authentication context
  const { user, logOutAction } = useAuth();

  // Handle logout
  const handleLogout = () => {
    logOutAction();
  };

  return (
    <div>
      <h1>Welcome, {user?.name}!</h1>
      <p>This is your user profile page.</p>
      {/* Add additional profile information here */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfilePage;
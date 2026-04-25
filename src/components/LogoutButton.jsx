import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <button onClick={handleLogout} className="text-red-600 font-medium hover:underline">
      Logout
    </button>
  );
};

export default LogoutButton;

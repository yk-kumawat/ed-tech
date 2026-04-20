import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-[#1A5C68] text-white">
      <h1 className="text-xl font-bold cursor-pointer" onClick={()=>navigate("/dashboard")}>
        EdTech
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-sm">{user?.name}</span>

        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="bg-red-500 px-3 py-1 rounded text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
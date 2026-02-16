import { Link } from "react-router-dom";
import Container from "./Container";
import { useAuth } from "../context/AuthContext.jsx";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="bg-white shadow-md">
      <Container>
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold text-primary">
            Coconut Direct
          </Link>

          <div className="flex gap-6 items-center">
            <Link to="/products" className="hover:text-primary">
              Browse
            </Link>

            {user ? (
              <>
                <Link
                  to={user.role === "farmer" ? "/farmer" : "/buyer"}
                  className="hover:text-primary"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-primary">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-primary text-white px-4 py-2 rounded-lg"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

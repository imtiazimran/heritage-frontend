import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Container from "@/utils/Container";
import logo from "../../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "@/redux/features/authentication/authSlice";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Swal from "sweetalert2";
import { logout } from "@/redux/features/authentication/authSlice";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        Swal.fire("Logged out!", "You have been logged out.", "success");
      }
    });
  };

  return (
    <div className="shadow-md">
      <Container className="flex justify-between items-center py-3 font-normal text-lg relative">
        <Link to={"/"}>
          <img className="w-8" src={logo} alt="Logo" />
        </Link>
        <ul
          id="navbar-menu"
          className={`lg:flex gap-8 items-center  lg:static left-0 top-0 w-full lg:w-auto bg-white lg:bg-transparent transition-transform duration-300 ease-in-out transform ${
            menuOpen ? "hidden " : "hidden "
          }`}
        >
          {["buy", "sell", "service", "manage-rental"].map((path) => (
            <li key={path}>
              <NavLink
                to={`/${path}`}
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-700"
                }
              >
                {path.charAt(0).toUpperCase() + path.slice(1).replace("-", " ")}
              </NavLink>
            </li>
          ))}
          <li>
            {user ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src={user.avatarUrl || ""}
                        alt={user.firstName}
                      />
                      <AvatarFallback>{user.firstName[0]}</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent className="mt-2">
                    <div className="flex flex-col items-center">
                      <p className="mb-2">{user.username}</p>
                      <button
                        className="px-4 py-2 bg-red-500 text-white rounded"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLogout();
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-700"
                }
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>

        <button
          className="lg:hidden text-gray-700 text-2xl focus:outline-none"
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </Container>
      <Container className="block md:hidden">
        <ul
          id="navbar-menu"
          className={`lg:flex gap-8 items-center  lg:static left-0 top-0 w-full lg:w-auto bg-white lg:bg-transparent transition-transform duration-300 ease-in-out transform ${
            menuOpen ? " block" : "hidden "
          }`}
        >
          {["buy", "sell", "service", "manage-rental"].map((path) => (
            <li key={path}>
              <NavLink
                to={`/${path}`}
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-700"
                }
              >
                {path.charAt(0).toUpperCase() + path.slice(1).replace("-", " ")}
              </NavLink>
            </li>
          ))}
          <li>
            {user ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src={user.avatarUrl || ""}
                        alt={user.firstName}
                      />
                      <AvatarFallback>{user.firstName[0]}</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent className="mt-2">
                    <div className="flex flex-col items-center">
                      <p className="mb-2">{user.username}</p>
                      <button
                        className="px-4 py-2 bg-red-500 text-white rounded"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLogout();
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-700"
                }
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Navbar;

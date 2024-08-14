
import { Link, NavLink } from "react-router-dom";
import Container from "@/utils/Container";
import logo from "../../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "@/redux/features/authentication/authSlice";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Swal from "sweetalert2";
import { logout } from "@/redux/features/authentication/authSlice";

const Navbar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out of your account!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        Swal.fire(
          'Logged out!',
          'You have been logged out.',
          'success'
        );
      }
    });
  };

  return (
    <div className="shadow-md">
      <Container className="flex lg:justify-between items-center py-3 font-normal text-lg">
        <ul className="flex gap-8 cursor-pointer">
          <li>
            <NavLink to="/buy" className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }>
              Buy
            </NavLink>
          </li>
          <li>
            <NavLink to="/sell" className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }>
              Sell
            </NavLink>
          </li>
          <li>
            <NavLink to="/service" className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }>
              Service
            </NavLink>
          </li>
        </ul>

        <div>
          <Link to={"/"}>
            <img className="w-8" src={logo} alt="Logo" />
          </Link>
        </div>

        <ul className="flex gap-8 cursor-pointer">
          <li>
            <NavLink to="/manage-rental" className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }>
              Manage Rental
            </NavLink>
          </li>
          <li>
            {user ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src={user.avatarUrl || ""} alt={user.firstName} />
                      <AvatarFallback>{user.firstName[0]}</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
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
              <NavLink to="/login" className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-gray-700"
              }>
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

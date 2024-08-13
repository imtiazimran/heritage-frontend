import Container from '@/utils/Container';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="shadow-md">
            <Container className="flex lg:justify-between items-center py-3 font-normal text-lg">
                <ul className="flex gap-8 cursor-pointer">
                    <li>
                        <NavLink to="/buy" className={({ isActive }) =>
                            isActive ? 'text-blue-500 font-bold' : 'text-gray-700'
                        }>
                            Buy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sell" className={({ isActive }) =>
                            isActive ? 'text-blue-500 font-bold' : 'text-gray-700'
                        }>
                            Sell
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/service" className={({ isActive }) =>
                            isActive ? 'text-blue-500 font-bold' : 'text-gray-700'
                        }>
                            Service
                        </NavLink>
                    </li>
                </ul>
                <div>
                  <Link to={"/"}>
                    <img className="w-14" src={logo} alt="" />
                  </Link>
                </div>
                <ul className="flex gap-8 cursor-pointer">
                    <li>
                        <NavLink to="/manage-rental" className={({ isActive }) =>
                            isActive ? 'text-blue-500 font-bold' : 'text-gray-700'
                        }>
                            Manage Rental
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className={({ isActive }) =>
                            isActive ? 'text-blue-500 font-bold' : 'text-gray-700'
                        }>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </Container>
        </div>
    );
};

export default Navbar;

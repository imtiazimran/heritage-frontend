import Container from "@/utils/Container";
import logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <Container className="shadow-md">
          <div className="flex lg:justify-between items-center py-3 font-normal text-lg">
            <ul className="flex gap-8 cursor-pointer">
                <li>Buy</li>
                <li>Sell</li>
                <li>Service</li>
            </ul>
            <div>
              <img className="w-14" src={logo} alt="" />
            </div>
            <ul className="flex gap-8 cursor-pointer">
                <li>Manage Rental</li>
                <li> Login</li>
            </ul>
          </div>
        </Container>
    );
};

export default Navbar;

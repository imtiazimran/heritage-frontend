import Container from "@/utils/Container";

const Navbar = () => {
    return (
        <Container className="shadow-md">
          <div className="flex lg:justify-between items-center py-3">
            <ul className="flex gap-8 cursor-pointer">
                <li>Buy</li>
                <li>Sell</li>
                <li>Service</li>
            </ul>
            <h1>Navbar</h1>
            <ul className="flex gap-8 cursor-pointer">
                <li>Manage Rental</li>
                <li> Login</li>
            </ul>
          </div>
        </Container>
    );
};

export default Navbar;

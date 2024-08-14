import headImg from "../../assets/aboutHeader.png";
const Header = () => {
    return (
        <div className="relative w-full bg-no-repeat bg-cover bg-center h-[320px]" style={{ backgroundImage: `url(${headImg})`}}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/90"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            </div>
        </div>
    );
};

export default Header;

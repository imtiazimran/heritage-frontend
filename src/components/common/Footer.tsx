import { cn } from "@/lib/utils";
import Container from "@/utils/Container";
import logo from "../../assets/logo.png";
import { FaFacebook, FaFingerprint, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={cn("bg-accent text-gray-700 py-16")}>
      <Container className="grid grid-cols-8 gap-8 justify-items-center my-5">
        <div className={cn(" col-span-3")}>
          <div>
            <img className="w-14" src={logo} alt="" />
          </div>
          <p className={cn("text-[16px] font-medium text-muted ")}>
            Design amazing digital experiences <br /> that create more happy in the
            world.
          </p>
        </div>

        {/* Column 1: Product */}
        <div className="">
          <h3 className={cn("text-[14px] font-semibold mb-4 text-[#667085]")}>
            Product
          </h3>
          <ul className="text-muted text-[16px] font-semibold">
            <li>
              <a href="/overview">Overview</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/features">Solution</a>
            </li>
            <li>
              <a href="/features">Tutorials</a>
            </li>
            <li>
              <a href="/features">Pricing</a>
            </li>
            <li>
              <a href="/features">Releases</a>
            </li>
            {/* ... */}
          </ul>
        </div>

        {/* Column 2: Company */}
        <div>
          <h3 className={cn("text-[14px] font-semibold mb-4 text-[#667085]")}>
            Company
          </h3>
          <ul className="text-muted text-[16px] font-semibold">
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/careers">Press</a>
            </li>
            <li>
              <a href="/careers">News</a>
            </li>
            <li>
              <a href="/careers">Media Kit</a>
            </li>
            <li>
              <a href="/careers">Contact</a>
            </li>
            {/* ... */}
          </ul>
        </div>
        {/* Column 3: Resources */}
        <div>
          <h3 className={cn("text-[14px] font-semibold mb-4 text-[#667085]")}>
            Resources
          </h3>
          <ul className="text-muted text-[16px] font-semibold">
            <li>
              <a href="/about-us">Blog</a>
            </li>
            <li>
              <a href="/careers">Newsletter</a>
            </li>
            <li>
              <a href="/careers">Events</a>
            </li>
            <li>
              <a href="/careers">Help Center</a>
            </li>
            <li>
              <a href="/careers">Tutorials</a>
            </li>
            <li>
              <a href="/careers">Support</a>
            </li>
            {/* ... */}
          </ul>
        </div>
        {/* Column 4: social */}
        <div>
          <h3 className={cn("text-[14px] font-semibold mb-4 text-[#667085]")}>
            Social
          </h3>
          <ul className="text-muted text-[16px] font-semibold">
            <li>
              <a href="/about-us">Twitter</a>
            </li>
            <li>
              <a href="/careers">LinkedIn</a>
            </li>
            <li>
              <a href="/careers">Facebook</a>
            </li>
            <li>
              <a href="/careers">GitHub</a>
            </li>
            <li>
              <a href="/careers">AngelList</a>
            </li>
            <li>
              <a href="/careers">Dribble</a>
            </li>
            {/* ... */}
          </ul>
        </div>

        {/* Column 5: legal */}
        <div>
          <h3 className={cn("text-[14px] font-semibold mb-4 text-[#667085]")}>
            Legal
          </h3>
          <ul className="text-muted text-[16px] font-semibold">
            <li>
              <Link to="/about">Term</Link>
            </li>
            <li>
              <a href="/careers">Privacy</a>
            </li>
            <li>
              <a href="/careers">Cookies</a>
            </li>
            <li>
              <a href="/careers">Licenses</a>
            </li>
            <li>
              <a href="/careers">Setting</a>
            </li>
            <li>
              <a href="/careers">Contact</a>
            </li>
          </ul>
        </div>
      </Container>
      <span className="w-11/12 mx-auto border h-[1px] border-[#C5E2FF] block font-semibold" ></span>
      <Container className={cn("text-center px-20 md:text-left pt-10 flex justify-between items-end")}>
        <p className="text-[#667085]">© 2024 Heritage Nest. All rights reserved.</p>
        <ul className={cn("flex gap-4 mt-2")}>
          <li>
            <a href="#">
              <FaTwitter className="text-primary"/>
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin className="text-primary"/>
            </a>
          </li>
          <li>
            <a href="#">
              <FaFacebook className="text-primary"/>
            </a>
          </li>
          <li>
            <a href="#">
              <FaFingerprint className="text-primary"/>
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}

export default Footer;

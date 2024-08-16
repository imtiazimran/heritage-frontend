import { cn } from "@/lib/utils";
import Container from "@/utils/Container";
import logo from "../../assets/logo.png";
import { FaFacebook, FaFingerprint, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={cn("bg-accent text-gray-700 py-8 md:py-16")}>
      <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 justify-items-center my-5">
        <div className={cn("col-span-1 lg:col-span-3 text-center lg:text-left")}>
          <div>
            <img className="w-14 mx-auto lg:mx-0" src={logo} alt="Heritage Nest Logo" />
          </div>
          <p className={cn("text-[14px] sm:text-[16px] font-medium text-muted mt-4 lg:mt-2")}>
            Design amazing digital experiences <br /> that create more happy in the world.
          </p>
        </div>

        {/* Column 1: Product */}
        <div>
          <h3 className={cn("text-[14px] font-semibold mb-4 text-[#667085]")}>
            Product
          </h3>
          <ul className="text-muted text-[14px] sm:text-[16px] font-semibold">
            <li>
              <a href="/overview">Overview</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/solution">Solution</a>
            </li>
            <li>
              <a href="/tutorials">Tutorials</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/releases">Releases</a>
            </li>
          </ul>
        </div>

        {/* Column 2: Company */}
        <div>
          <h3 className={cn("text-[14px] font-semibold mb-4 text-[#667085]")}>
            Company
          </h3>
          <ul className="text-muted text-[14px] sm:text-[16px] font-semibold">
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/press">Press</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/media-kit">Media Kit</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className={cn("text-[14px] font-semibold mb-4 text-[#667085]")}>
            Resources
          </h3>
          <ul className="text-muted text-[14px] sm:text-[16px] font-semibold">
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/newsletter">Newsletter</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/help-center">Help Center</a>
            </li>
            <li>
              <a href="/tutorials">Tutorials</a>
            </li>
            <li>
              <a href="/support">Support</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Social */}
        <div>
          <h3 className={cn("text-[14px] font-semibold mb-4 text-[#667085]")}>
            Social
          </h3>
          <ul className="text-muted text-[14px] sm:text-[16px] font-semibold">
            <li>
              <a href="https://twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://linkedin.com">LinkedIn</a>
            </li>
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://github.com">GitHub</a>
            </li>
            <li>
              <a href="https://angel.co">AngelList</a>
            </li>
            <li>
              <a href="https://dribbble.com">Dribble</a>
            </li>
          </ul>
        </div>

        {/* Column 5: Legal */}
        <div>
          <h3 className={cn("text-[14px] font-semibold mb-4 text-[#667085]")}>
            Legal
          </h3>
          <ul className="text-muted text-[14px] sm:text-[16px] font-semibold">
            <li>
              <Link to="/terms">Terms</Link>
            </li>
            <li>
              <a href="/privacy">Privacy</a>
            </li>
            <li>
              <a href="/cookies">Cookies</a>
            </li>
            <li>
              <a href="/licenses">Licenses</a>
            </li>
            <li>
              <a href="/settings">Settings</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </Container>

      <span className="w-11/12 mx-auto border h-[1px] border-[#C5E2FF] block font-semibold"></span>

      <Container className={cn("text-center px-4 md:px-20 pt-10 flex flex-col md:flex-row justify-between items-center md:items-end")}>
        <p className="text-[#667085] text-[14px] sm:text-[16px]">
          © 2024 Heritage Nest. All rights reserved.
        </p>
        <ul className={cn("flex gap-4 mt-4 md:mt-0")}>
          <li>
            <a href="https://twitter.com">
              <FaTwitter className="text-primary" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com">
              <FaLinkedin className="text-primary" />
            </a>
          </li>
          <li>
            <a href="https://facebook.com">
              <FaFacebook className="text-primary" />
            </a>
          </li>
          <li>
            <a href="https://github.com">
              <FaFingerprint className="text-primary" />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}

export default Footer
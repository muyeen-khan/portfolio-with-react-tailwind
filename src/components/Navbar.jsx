import logo from "../assets/kevinRushLogo.png"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaFacebook} from "react-icons/fa";


function Navbar(props) {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex items-center flex-shrink-0">
                <img className="mx-2 w-10" src={logo} alt="logo" />
            </div>
            <div className="flex items-center justify-center m-8 gap-4 text-2xl">
                <FaLinkedin />
                <FaGithub />
                <FaSquareXTwitter />
                <FaFacebook />
            </div>


        </nav>
    );
}

export default Navbar;
import Image from "next/image";
import img from '../../Images/insta.jpg'


const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>

                <Image
                    className=' h-16 w-16 mt-2'
                    src={img}
                    alt=""
                >

                </Image>
                <p>Instagram Drive to Dream<br />Providing social media service since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;

// Local image assets imports
import fbIcon from "../../assets/logo/fb.png";
import twitterIcon from "../../assets/logo/twitter.png";
import githubIcon from "../../assets/logo/github.png";
import mailIcon from "../../assets/logo/mail.png";

const Footer = () => {
  return (
    <footer className="w-full mt-10 shadow-xl rounded-2xl overflow-hidden">
      <div className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 gap-8">
        
        <nav className="flex flex-col gap-1">
          <h6 className="footer-title text-white tracking-wider opacity-90 text-sm font-bold">Contact Info</h6>
          <span className="text-sm opacity-70 mt-1">Email: support@skillswap.com</span>
          <span className="text-sm opacity-70">Phone: +880 12345-56789</span>
          <span className="text-sm opacity-70">Address: 221/B Tech Square Street, Dhaka, BD</span>
        </nav>

        <nav className="flex flex-col gap-1">
          <h6 className="footer-title text-white tracking-wider opacity-90 text-sm font-bold">Privacy & Terms</h6>
          <a href="#" onClick={(e) => e.preventDefault()} className="link link-hover text-sm opacity-70 mt-1">Privacy Policy</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="link link-hover text-sm opacity-70">Terms of Service</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="link link-hover text-sm opacity-70">Cookie Policy</a>
        </nav>

        <nav className="flex flex-col gap-1">
          <h6 className="footer-title text-white tracking-wider opacity-90 text-sm font-bold">Social Links</h6>
          <div className="grid grid-flow-col gap-4 mt-2 items-center">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:scale-110 transition-transform duration-200"
            >
              <img src={fbIcon} alt="Facebook" className="w-6 h-6 object-contain" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:scale-110 transition-transform duration-200"
            >
              <img src={twitterIcon} alt="Twitter" className="w-6 h-6 object-contain" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:scale-110 transition-transform duration-200"
            >
              <img src={githubIcon} alt="GitHub" className="w-6 h-6 object-contain" />
            </a>
            <a 
              href="mailto:support@skillswap.com" 
              className="hover:scale-110 transition-transform duration-200"
            >
              <img src={mailIcon} alt="Mail Contact" className="w-6 h-6 object-contain" />
            </a>
          </div>
        </nav>

      </div>

      {/* Underbar Copyright Bar */}
      <div className="footer footer-center p-4 bg-[#C4C4C4]  font-semibold border-t border-neutral-800">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved by SkillSwap Industries Ltd.</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
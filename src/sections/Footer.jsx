import FooterLink from "../components/FooterLink";
import SocialMedia from "../components/SocialMedia";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container font-montserrat text-white">
      <div className="flex flex-col gap-16 lg:flex-row">
        <div className="flex w-full flex-col gap-2 lg:max-w-sm">
          <a href="#home" className="text-4xl font-bold">
            Nisique
          </a>
          <p>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="mt-8 flex w-full gap-5">
            {socialMedia.map((social) => (
              <SocialMedia key={social.alt} {...social} />
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-wrap justify-between gap-10">
          {footerLinks.map((link) => (
            <FooterLink key={link.title} {...link} />
          ))}
        </div>
      </div>
      <div className="mt-24 flex w-full flex-col items-center justify-between font-light md:flex-row">
        <p>&copy; Copyright. All rights reserved.</p>
        <p>Term & Conditions</p>
      </div>
    </footer>
  );
};
export default Footer;

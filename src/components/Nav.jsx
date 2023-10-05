import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-5">
      <nav className="max-container flex items-center justify-between">
        {/* <img src={headerLogo} alt="Logo" width={130} /> */}
        <a href="#home" className="text-3xl font-bold text-coral-red">
          Nisique
        </a>
        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-montserrat text-lg leading-normal text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <img src={hamburger} alt="hamburger" width={30} />
        </div>
      </nav>
    </header>
  );
};
export default Nav;

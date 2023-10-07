import { useState, useEffect, useRef } from "react";
import { navLinks } from "../constants";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const headerRef = useRef(null);

  const handleClick = () => setIsActive(!isActive);

  useEffect(() => {
    const navigationHeight = headerRef.current.offsetHeight;
    document.documentElement.style.setProperty(
      "scroll-padding",
      `${navigationHeight}px`,
    );

    const handleScroll = () => {
      if (document.documentElement.scrollTop > 10) {
        headerRef.current.classList.add("bg-white");
      } else {
        headerRef.current.classList.remove("bg-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="padding-x fixed z-20 w-full py-4 font-montserrat duration-300"
      ref={headerRef}
    >
      <nav className="max-container flex items-center justify-between">
        <a href="#home" className="text-3xl font-bold text-coral-red">
          Nisique
        </a>
        <div
          className={`invisible absolute left-0 right-0 top-[82px] w-full rounded-b-2xl opacity-0 duration-300 max-lg:min-h-screen  max-lg:bg-white lg:visible lg:static lg:opacity-100 ${
            isActive && "slide"
          }`}
        >
          <ul className="padding-x flex flex-1 items-start justify-center gap-8 py-5 max-lg:flex-col lg:gap-16">
            {navLinks.map((link) => (
              <li key={link.label} onClick={handleClick}>
                <a
                  href={link.href}
                  className="text-montserrat links text-lg leading-normal text-slate-gray"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="relative flex h-8 w-[35px] items-center justify-center lg:hidden"
          onClick={handleClick}
        >
          <button
            id="hamburger"
            className={`absolute flex w-full flex-col items-end gap-2 ${
              isActive && "hamburger"
            }`}
          >
            <span className="block h-[3px] w-full origin-top-right rounded bg-coral-red transition duration-300 ease-in-out"></span>
            <span className="block h-[3px] w-full rounded bg-coral-red transition duration-300 ease-in-out"></span>
            <span className="block h-[3px] w-full origin-bottom-right rounded bg-coral-red transition duration-300 ease-in-out"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Nav;

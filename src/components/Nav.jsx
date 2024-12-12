import { useState } from "react";
import { hamburger, arrowRight } from "../assets/icons"; 
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col items-center absolute top-16 left-0 w-full bg-white z-20 lg:static lg:flex 
          lg:flex-row lg:justify-center lg:items-center lg:gap-16 lg:bg-transparent`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal hover:border-b-2 hover:border-b-red-600 hover:text-red-500 text-lg font-semibold text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        
        </ul>
        <div className="lg:hidden">
          <img
            src={menuOpen ? arrowRight : hamburger}
            alt="menu icon"
            width={25}
            height={25}
            onClick={handleMenuToggle}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

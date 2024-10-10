import { IconHexagonLetterA } from "@tabler/icons-react";
import SideBar from "./SideBar";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";
import { useEffect, useState } from "react";

const links = ["Home", "About", "Projects", "Skills",  "Contact"];
// add Experience later
const navLinks = (col: Boolean, clicked: any) => {
  const handleClick = (link: string) => {
    if (clicked) clicked();

    if (link === "Home") {
      // Scroll to the top of the page for "Home" link
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // For other links, scroll to the corresponding section
      const section = document.querySelector(`#${link}`);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return links.map((link) => {
    return (
      <a
        onClick={() => handleClick(link)}
        className={`${col ? "flex flex-col items-center" : ""} text-textColor text-lg font-mono hover:text-primaryColor`}
        href={link === "Home" ? "#" : `#${link}`} // Home navigates to "#"
      >
        <span className="text-primaryColor"> </span>
        {link}
      </a>
    );
  });
};

const Header = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shadow, setShadow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 70) setShow(false);
    else setShow(true);
    if (window.scrollY > 70) setShadow(true);
    else setShadow(false);
    setLastScrollY(window.scrollY);
  };

//   useEffect(() => {
//     window.addEventListener("scroll", controlNavbar);
//     return () => window.removeEventListener("scroll", controlNavbar);
//   });

  return (
    <nav
      className={`flex ${show ? "translate-y-0" : "-translate-y-28"} 
      ${shadow ? "shadow-[0px_10px_30px_-10px_#020c1b]" : ""} 
      transition-transform duration-500 ease-in-out 
      fixed w-full z-10 bg-bgColor h-28 px-10 top-0 justify-between items-center xs-mx:px-4 xs-mx:h-20`}
    >
      <IconHexagonLetterA className="z-10" size={isMobile ? 45 : 60} color="#64FFDA" stroke={1.25} />
      <div className="bs:flex gap-8 hidden">{navLinks(false, null)}</div>
      <SideBar />
    </nav>
  );
};

export default Header;
export { navLinks };

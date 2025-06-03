// src/components/layout/NavItem.jsx
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const NavItem = ({ item, index, setActiveIndex }) => {
  const handleMouseEnter = (e) => {
    setActiveIndex(index);
    gsap.to(e.currentTarget, { scale: 1.1, y: -5, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" });
  };

  return (
    <li className="nav-item relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to={`/${item.name.toLowerCase()}`} className="flex items-center gap-1 px-6 py-3 rounded-xl text-white font-semibold tracking-wide relative overflow-hidden transition-all duration-300 hover:text-[#00F5FF]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        <span className="text-[#00F5FF] group-hover:rotate-180 transition-transform duration-500 text-sm">
          {item.icon}
        </span>
        <span className="relative">
          {item.name}
          <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-gradient-to-r from-[#00F5FF] via-[#A400FF] to-[#FF00C8] group-hover:w-full transition-all duration-500 ease-out shadow-[0_0_10px_currentColor] rounded-full" />
          <span className="absolute -right-4 top-1/2 w-1 h-1 bg-[#00F5FF] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
        </span>
      </Link>
    </li>
  );
};

export default NavItem;

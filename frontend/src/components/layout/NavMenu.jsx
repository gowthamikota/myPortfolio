// src/components/layout/NavMenu.jsx
import NavItem from "./NavItem";

const navItems = [
  { name: "About", icon: "◆" },
  { name: "Education", icon: "◉" },
  { name: "Experience", icon: "✦" },
  { name: "Projects", icon: "⬢" },
  { name: "Highlights", icon: "★" },
  { name: "Contact", icon: "▲" }
];

const NavMenu = ({ activeIndex, setActiveIndex }) => (
  <div className="relative">
    <div className="absolute top-0 h-full bg-gradient-to-r from-[#00F5FF]/20 via-[#A400FF]/20 to-[#FF00C8]/20 rounded-2xl transition-all duration-500 blur-sm"
         style={{ left: `${activeIndex * 140}px`, width: '120px' }} />
    <ul className="flex text-lg relative z-10">
      {navItems.map((item, index) => (
        <NavItem key={index} index={index} item={item} setActiveIndex={setActiveIndex} />
      ))}
    </ul>
  </div>
);

export default NavMenu;

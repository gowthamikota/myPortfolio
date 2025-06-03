// src/components/layout/Header.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

import ResumeButton from "./ResumeButton";



const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(".nav-item", { y: -30, opacity: 0, scale: 0.8, rotationX: -90 },
      { y: 0, opacity: 1, scale: 1, rotationX: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" });

    gsap.fromTo(".logo", { scale: 0, rotation: -180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.3)" });
  }, [location.pathname]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-24 bg-gradient-to-b from-[#00F5FF]/5 via-[#A400FF]/3 to-transparent pointer-events-none z-40" />
<header className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
  isScrolled
    ? 'px-6 py-2 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/20 shadow-[0_20px_50px_rgba(0,245,255,0.1)]'
    : 'px-8 py-4 bg-gradient-to-r from-[#0a0a0a]/60 via-[#1a0a1a]/70 to-[#0a1a1a]/60 backdrop-blur-2xl border-b border-white/5'
}`}>

  <nav className="max-w-8xl mx-auto flex justify-between items-center relative">
    <Logo />
    <NavMenu activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    <ResumeButton />
  </nav>

  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00F5FF]/50 to-transparent">
    <div className="h-full bg-gradient-to-r from-[#00F5FF] via-[#A400FF] to-[#FF00C8] animate-pulse" />
  </div>
</header>
    </>
  );
};

export default Header;

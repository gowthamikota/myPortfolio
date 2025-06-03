// src/components/layout/Logo.jsx
import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/" className="relative group logo">
    <div className="absolute inset-0 bg-gradient-to-r from-[#00F5FF] via-[#A400FF] to-[#FF00C8] rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
    <div className="relative text-5xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] via-[#A400FF] to-[#FF00C8] filter drop-shadow-[0_0_20px_rgba(0,245,255,0.5)] group-hover:scale-110 transition-transform duration-500">
      GK
      <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#00F5FF] rounded-full animate-ping opacity-75" />
      <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-[#FF00C8] rounded-full animate-pulse" />
    </div>
  </Link>
);

export default Logo;

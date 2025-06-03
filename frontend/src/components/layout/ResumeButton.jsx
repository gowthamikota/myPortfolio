import { FiDownload } from "react-icons/fi";

const ResumeButton = () => (
  <a
    href="/resume.pdf" // Replace with actual path or drive link
    target="_blank"
    rel="noopener noreferrer"
    className="nav-item group relative inline-flex items-center gap-2 px-6 py-3 text-white font-semibold bg-gradient-to-r from-[#00F5FF]/10 via-[#A400FF]/10 to-[#FF00C8]/10 border border-white/20 rounded-xl overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-[#00F5FF]/50 hover:border-[#00F5FF]/50"
  >
    <span
      className="
        absolute inset-0 bg-gradient-to-r from-[#00F5FF]/20 via-[#A400FF]/20 to-[#FF00C8]/20 
        -translate-x-full group-hover:translate-x-0
        transition-transform duration-1000 ease-in-out
      "
    />
    <FiDownload
      className="
        relative z-10 text-[#00F5FF] 
        group-hover:animate-bounce
        group-hover:delay-150
        transition-transform duration-500 ease-in-out
      "
      style={{ animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)' }}
    />
    <span className="relative z-10">Resume</span>
  </a>
);

export default ResumeButton;

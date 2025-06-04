import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useAnimation, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import {
  Shield,
  Code,
  Brain,
  Search,
  GitBranch,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Zap,
  Star
} from "lucide-react";

const experiences = [
  {
    icon: Shield,
    title: "Cybersecurity Intern",
    company: "Symbiosis Technologies",
    location: "Vizag",
    period: "2024 - Present",
    status: "Active",
    color: "cyan",
    primaryColor: "#06b6d4",
    secondaryColor: "#0891b2",
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    bgGradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    points: [
      "Advanced training in cybersecurity frameworks and threat analysis",
      "Hands-on experience with penetration testing and vulnerability assessments",
      "Implementation of security protocols and incident response procedures"
    ],
    skills: ["Network Security", "Ethical Hacking", "Risk Assessment"],

  },
  {
    icon: Code,
    title: "Full Stack AIML Intern",
    company: "Sweet Design Hub",
    location: "Remote",
    period: "2024 - Present",
    status: "Active",
    color: "indigo",
    primaryColor: "#6366f1",
    secondaryColor: "#4f46e5",
    gradient: "from-indigo-400 via-purple-500 to-pink-600",
    bgGradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
    points: [
      "Architecting scalable time series forecasting applications",
      "Advanced ML model optimization and hyperparameter tuning",
      "Full-stack development with modern React and Node.js ecosystems"
    ],
    skills: ["React", "Node.js", "TensorFlow", "Time Series"],
    
  },
  {
    icon: Brain,
    title: "Team Lead – Brainmage.ai",
    company: "AI Linguistic Project",
    location: "Hybrid",
    period: "2024",
    status: "Completed",
    color: "pink",
    primaryColor: "#ec4899",
    secondaryColor: "#db2777",
    gradient: "from-pink-400 via-rose-500 to-red-600",
    bgGradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    points: [
      "Led cross-functional team in AI text analysis and classification",
      "Developed advanced NLP models for human vs AI-generated content detection",
      "Managed end-to-end ML pipeline from data collection to deployment"
    ],
    skills: ["Team Leadership", "NLP", "Python", "ML Pipeline"],
  
  },
  {
    icon: Search,
    title: "Google AI/ML Virtual Intern",
    company: "AICTE Certified",
    location: "Virtual",
    period: "2023",
    status: "Certified",
    color: "amber",
    primaryColor: "#f59e0b",
    secondaryColor: "#d97706",
    gradient: "from-amber-400 via-orange-500 to-red-600",
    bgGradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    points: [
      "Mastered computer vision with advanced CNN architectures",
      "Built production-ready object detection and image classification systems",
      "Optimized deep learning models for mobile and edge deployment"
    ],
    skills: ["TensorFlow", "Keras", "Computer Vision", "CNN"],
   
  },
  {
    icon: GitBranch,
    title: "Full Stack Web Intern",
    company: "EduSkills Foundation",
    location: "Remote",
    period: "2023",
    status: "Completed",
    color: "emerald",
    primaryColor: "#10b981",
    secondaryColor: "#059669",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    bgGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    points: [
      "Architected robust full-stack applications with microservices",
      "Implemented advanced authentication and authorization systems",
      "Delivered responsive, accessible web applications with modern frameworks"
    ],
    skills: ["MongoDB", "Express", "React", "JWT"],
   
  }
];

const AnimatedParticles = ({ color, isActive }) => {
  const particles = Array.from({ length: 15 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle}
            className="absolute w-1 h-1 rounded-full"
            style={{ backgroundColor: color }}
            initial={{
              x: Math.random() * 320,
              y: Math.random() * 420,
              opacity: 0,
              scale: 0
            }}
            animate={isActive ? {
              x: [
                Math.random() * 320,
                Math.random() * 320,
                Math.random() * 320,
                Math.random() * 320
              ],
              y: [
                Math.random() * 420,
                Math.random() * 420,
                Math.random() * 420,
                Math.random() * 420
              ],
              opacity: [0, 0.8, 0.6, 0],
              scale: [0, 1.2, 0.8, 0],
            } : {
              opacity: 0,
              scale: 0
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: isActive ? Infinity : 0,
              delay: Math.random() * 3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const ExperienceCard = ({ experience, position, isActive, onClick, index, totalCards }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  // Enhanced positioning calculations
  const scale = isActive ? 1 : Math.max(0.7, 1 - Math.abs(position) * 0.15);
  const xOffset = position * 180;
  const yOffset = Math.abs(position) * 20;
  const zIndex = isActive ? 100 : 50 - Math.abs(position);
  const opacity = Math.max(0.3, 1 - Math.abs(position) * 0.4);
  const rotateY = position * 8;
  const blur = Math.abs(position) * 1.5;

  const IconComponent = experience.icon;

  return (
    <motion.div
      ref={cardRef}
      className="absolute cursor-pointer select-none"
      style={{
        width: "360px",
        height: "480px",
        zIndex,
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      initial={{ scale: 0.5, opacity: 0, rotateY: 45 }}
      animate={{
        scale: isHovered && isActive ? scale * 1.08 : scale,
        x: xOffset,
        y: isHovered && isActive ? -yOffset - 10 : -yOffset,
        opacity,
        rotateY,
        filter: `blur(${blur}px)`,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8
      }}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileTap={{ scale: scale * 0.98 }}
    >
      {/* Card Container */}
      <div className="relative w-full h-full group">
        {/* Enhanced Glassmorphism Background */}
        <motion.div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            background: isActive 
              ? `linear-gradient(145deg, rgba(15,15,15,0.95) 0%, rgba(25,25,25,0.9) 100%)`
              : `linear-gradient(145deg, rgba(15,15,15,0.8) 0%, rgba(20,20,20,0.7) 100%)`,
            backdropFilter: "blur(20px)",
            border: `1px solid ${isActive ? experience.primaryColor + '40' : 'rgba(255,255,255,0.1)'}`
          }}
          animate={{
            boxShadow: isActive ? [
              `0 0 0 1px ${experience.primaryColor}20`,
              `0 0 40px 8px ${experience.primaryColor}30`,
              `0 0 0 1px ${experience.primaryColor}20`
            ] : "0 8px 32px rgba(0,0,0,0.3)",
            borderColor: isActive ? [
              `${experience.primaryColor}40`,
              `${experience.primaryColor}80`,
              `${experience.primaryColor}40`
            ] : "rgba(255,255,255,0.1)"
          }}
          transition={{
            duration: 4,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut"
          }}
        />

        {/* Animated Background Gradient */}
        <motion.div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${experience.bgGradient} opacity-30`}
          animate={{
            opacity: isActive ? [0.2, 0.4, 0.2] : 0.1,
            scale: isActive ? [1, 1.02, 1] : 1
          }}
          transition={{
            duration: 5,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut"
          }}
        />

        {/* Floating Particles */}
        <AnimatedParticles color={experience.primaryColor} isActive={isActive} />

        {/* Content */}
        <div className="relative z-20 p-8 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className="relative flex-shrink-0"
              animate={{
                rotate: isHovered ? [0, 360] : 0,
                scale: isHovered ? 1.1 : 1
              }}
              transition={{
                rotate: { duration: 0.6, ease: "easeInOut" },
                scale: { type: "spring", stiffness: 400, damping: 25 }
              }}
            >
              {/* Icon Glow */}
              <motion.div
                className="absolute inset-0 rounded-xl blur-lg opacity-50"
                style={{ backgroundColor: experience.primaryColor }}
                animate={{
                  scale: isActive ? [1, 1.4, 1] : 1,
                  opacity: isActive ? [0.3, 0.6, 0.3] : 0.2
                }}
                transition={{
                  duration: 3,
                  repeat: isActive ? Infinity : 0,
                  ease: "easeInOut"
                }}
              />
              <div 
                className="relative p-3 rounded-xl backdrop-blur-sm border"
                style={{
                  backgroundColor: `${experience.primaryColor}20`,
                  borderColor: `${experience.primaryColor}40`
                }}
              >
                <IconComponent 
                  size={28} 
                  style={{ color: experience.primaryColor }}
                />
              </div>
            </motion.div>

            <div className="flex-1 min-w-0">
              <motion.h3 
                className="text-white font-bold text-xl mb-1 leading-tight"
                animate={{
                  color: isActive ? "#ffffff" : "#ffffff80"
                }}
              >
                {experience.title}
              </motion.h3>
              <motion.p 
                className="font-medium text-sm mb-1"
                style={{ color: experience.primaryColor }}
                animate={{
                  opacity: isActive ? 1 : 0.7
                }}
              >
                {experience.company}
              </motion.p>
              <div className="flex items-center gap-2 text-xs text-white/50">
                <span>{experience.location}</span>
                <div 
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: experience.primaryColor }}
                />
                <span>{experience.period}</span>
              </div>
            </div>

            {/* Status Badge */}
            <motion.div
              className="px-2 py-1 rounded-full text-xs font-medium border"
              style={{
                backgroundColor: `${experience.primaryColor}20`,
                borderColor: `${experience.primaryColor}40`,
                color: experience.primaryColor
              }}
              animate={{
                scale: isActive ? [1, 1.05, 1] : 1
              }}
              transition={{
                duration: 2,
                repeat: isActive ? Infinity : 0
              }}
            >
              {experience.status}
            </motion.div>
          </div>

          

          {/* Experience Points */}
          <div className="flex-1 mb-6">
            <ul className="space-y-3">
              {experience.points.map((point, i) => (
                <motion.li 
                  key={i}
                  className="flex items-start gap-3 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isActive ? 1 : 0.7,
                    x: 0,
                    y: isActive ? [0, -1, 0] : 0
                  }}
                  transition={{
                    opacity: { duration: 0.3 },
                    x: { duration: 0.5, delay: i * 0.1 },
                    y: {
                      duration: 4,
                      repeat: isActive ? Infinity : 0,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <motion.div
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 relative"
                    style={{ backgroundColor: experience.primaryColor }}
                    animate={{
                      scale: isActive ? [1, 1.3, 1] : 1,
                      boxShadow: isActive ? [
                        `0 0 0 0px ${experience.primaryColor}40`,
                        `0 0 0 4px ${experience.primaryColor}20`,
                        `0 0 0 0px ${experience.primaryColor}40`
                      ] : "none"
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: isActive ? Infinity : 0,
                      delay: i * 0.2
                    }}
                  />
                  <span className="text-white/90 leading-relaxed font-medium">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Skills Tags */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm"
                  style={{
                    backgroundColor: `${experience.primaryColor}15`,
                    borderColor: `${experience.primaryColor}30`,
                    color: experience.primaryColor
                  }}
                  animate={{
                    scale: isActive ? [1, 1.05, 1] : 1,
                    opacity: isActive ? [0.8, 1, 0.8] : 0.6
                  }}
                  transition={{
                    duration: 3,
                    repeat: isActive ? Infinity : 0,
                    delay: i * 0.3
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Animated Progress Bar */}
          <motion.div
            className="relative h-1 rounded-full overflow-hidden"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${experience.primaryColor}, ${experience.secondaryColor})`,
                boxShadow: `0 0 10px ${experience.primaryColor}50`
              }}
              animate={{
                width: isActive ? ["0%", "100%"] : "0%",
                opacity: isActive ? [0.6, 1, 0.6] : 0.3
              }}
              transition={{
                width: {
                  duration: 4,
                  repeat: isActive ? Infinity : 0,
                  ease: "easeInOut"
                },
                opacity: {
                  duration: 2,
                  repeat: isActive ? Infinity : 0
                }
              }}
            />
          </motion.div>
        </div>

        {/* Hover External Link */}
        <AnimatePresence>
          {isHovered && isActive && (
            <motion.div
              className="absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm border border-white/20"
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <ExternalLink size={16} className="text-white/70" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef(null);
  const controls = useAnimation();

  // Enhanced navigation with smooth transitions
  const navigateToIndex = useCallback((newIndex) => {
    setActiveIndex(newIndex);
    controls.start({
      rotateX: [0, 2, 0],
      scale: [1, 1.02, 1],
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    });
  }, [controls]);

  const handlePrev = useCallback(() => {
    navigateToIndex(activeIndex === 0 ? experiences.length - 1 : activeIndex - 1);
  }, [activeIndex, navigateToIndex]);

  const handleNext = useCallback(() => {
    navigateToIndex(activeIndex === experiences.length - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, navigateToIndex]);

  // Auto-rotation with pause on hover
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % experiences.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === " ") {
        e.preventDefault();
        setIsAutoPlaying(prev => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background: `radial-gradient(circle, ${experiences[activeIndex].primaryColor}40 0%, transparent 70%)`,
            top: "10%",
            left: "10%"
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{
            background: `radial-gradient(circle, ${experiences[activeIndex].secondaryColor}30 0%, transparent 70%)`,
            bottom: "10%",
            right: "10%"
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Header */}
        {/* Header */}
        <motion.div
  className="text-center mb-16 md:mb-24 relative z-20"
  initial={{ opacity: 0, y: -100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, type: "spring" }}
  viewport={{ once: true }}
>
  <motion.h1
    className="text-3xl md:text-3xl lg:text-6xl font-bold mb-8 relative inline-block"
    style={{ fontFamily: "'Playfair Display', serif" }}
  >
    {/* Gradient Title with Glow */}
    <motion.span
      className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        textShadow: [
          `0 0 20px ${experiences[activeIndex].primaryColor}40`,
          `0 0 40px ${experiences[activeIndex].primaryColor}60`,
          `0 0 20px ${experiences[activeIndex].primaryColor}40`
        ]
      }}
      transition={{ duration: 4, repeat: Infinity }}
      style={{ backgroundSize: '200% 200%' }}
    >
      Experience Journey
    </motion.span>

    {/* Soft Glow Text Behind */}
    <motion.div
      className="absolute inset-0 text-6xl md:text-7xl font-bold tracking-tight opacity-30 blur-sm"
      style={{ color: experiences[activeIndex].primaryColor }}
      animate={{
        opacity: [0.2, 0.4, 0.2],
        scale: [1, 1.02, 1]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      Experience Journey
    </motion.div>
  </motion.h1>

  <motion.p 
    className="text-white/60 text-lg max-w-2xl mx-auto"
    animate={{ opacity: [0.6, 1, 0.6] }}
    transition={{ duration: 4, repeat: Infinity }}
  >
    Discover my professional evolution 
  </motion.p>
</motion.div>

        {/* Carousel Container */}
        <motion.div
          ref={containerRef}
          className="relative h-[550px] flex items-center justify-center"
          animate={controls}
          style={{ perspective: "2000px" }}
          onHoverStart={() => setIsAutoPlaying(false)}
          onHoverEnd={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-4 z-50 p-4 rounded-2xl backdrop-blur-xl border border-white/20 group"
            style={{
              background: "linear-gradient(135deg, rgba(15,15,15,0.9), rgba(25,25,25,0.8))",
            }}
            whileHover={{ 
              scale: 1.1, 
              x: -8,
              boxShadow: `0 0 30px ${experiences[activeIndex].primaryColor}40`
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft 
              size={24} 
              className="text-white group-hover:text-cyan-400 transition-colors duration-300" 
            />
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="absolute right-4 z-50 p-4 rounded-2xl backdrop-blur-xl border border-white/20 group"
            style={{
              background: "linear-gradient(135deg, rgba(15,15,15,0.9), rgba(25,25,25,0.8))",
            }}
            whileHover={{ 
              scale: 1.1, 
              x: 8,
              boxShadow: `0 0 30px ${experiences[activeIndex].primaryColor}40`
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight 
              size={24} 
              className="text-white group-hover:text-cyan-400 transition-colors duration-300" 
            />
          </motion.button>

          {/* Experience Cards */}
          <div className="relative w-full h-full flex items-center justify-center">
            {experiences.map((experience, index) => {
              const position = index - activeIndex;
              return (
                <ExperienceCard
                  key={index}
                  experience={experience}
                  position={position}
                  isActive={position === 0}
                  onClick={() => navigateToIndex(index)}
                  index={index}
                  totalCards={experiences.length}
                />
              );
            })}
          </div>
        </motion.div>

        {/* Enhanced Pagination */}
        <div className="flex justify-center items-center gap-4 mt-12">
          {experiences.map((exp, index) => (
            <motion.button
              key={index}
              onClick={() => navigateToIndex(index)}
              className="relative p-3 group"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="w-3 h-3 rounded-full relative overflow-hidden"
                style={{
                  backgroundColor: activeIndex === index ? exp.primaryColor : "rgba(255,255,255,0.3)",
                  border: `2px solid ${activeIndex === index ? exp.primaryColor : "rgba(255,255,255,0.2)"}`
                }}
                animate={{
                  scale: activeIndex === index ? [1, 1.3, 1] : 1,
                  boxShadow: activeIndex === index ? [
                    `0 0 0 0px ${exp.primaryColor}40`,
                    `0 0 0 8px ${exp.primaryColor}20`,
                    `0 0 0 0px ${exp.primaryColor}40`
                  ] : "none"
                }}
                transition={{
                  duration: 3,
                  repeat: activeIndex === index ? Infinity : 0,
                }}
              />
              {activeIndex === index && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: exp.primaryColor }}
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Auto-play indicator */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-8"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20"
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          >
            <motion.div
              animate={{ rotate: isAutoPlaying ? 360 : 0 }}
              transition={{
                duration: 1,
                repeat: isAutoPlaying ? Infinity : 0,
                ease: "linear"
              }}
            >
              <Zap size={16} style={{ color: experiences[activeIndex].primaryColor }} />
            </motion.div>
            <span className="text-white/60 text-sm">
              {isAutoPlaying ? "Auto-playing" : "Paused"}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
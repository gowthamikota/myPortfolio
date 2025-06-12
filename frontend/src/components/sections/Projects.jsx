import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink, Brain, Code, Database, Gamepad2, Sparkles, Zap, Star } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "MindScope",
    description:
      "Advanced ML-powered depression prediction system with real-time insights and interactive visual dashboards for mental health analysis.",
    tech: ["Logistic Regression", "SVM", "Random Forest", "Python"],
    link: "https://github.com/gowthamikota/mindscope",
    color: "#00F5FF",
    gradient: "from-cyan-400 via-blue-500 to-purple-600",
  },
  {
    icon: Code,
    title: "Veritas.AI",
    description:
      "NLP application for real-time human vs AI-generated text classification using advanced TF-IDF vectorization.",
    tech: ["Flask", "TF-IDF", "NLP", "Text Classification"],
    link: "https://github.com/gowthamikota/Veritas.AI",
    color: "#A400FF",
    gradient: "from-purple-500 via-pink-500 to-red-500",
  },
  {
    icon: Database,
    title: "FoodFinder",
    description:
      "AI-based restaurant recommendation engine using CNN-powered image classification and a scalable Supabase backend.",
    tech: ["Supabase", "React", "CNN", "Computer Vision"],
    link: "https://github.com/gowthamikota/FoodFinder",
    color: "#FF00C8",
    gradient: "from-pink-500 via-rose-500 to-orange-500",
  },
  {
    icon: Gamepad2,
    title: "CosmicDash",
    description:
      "Endless-runner web game with dynamic obstacle generation, combo scoring system, and responsive controls.",
    tech: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Physics"],
    link: "https://cosmicdash2.netlify.app/",
    color: "#FF6B35",
    gradient: "from-orange-500 via-yellow-500 to-green-500",
  },
];

const FloatingParticle = ({ color, delay = 0 }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: Math.random() * 4 + 2,
      height: Math.random() * 4 + 2,
      background: `radial-gradient(circle, ${color}88, ${color}22)`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }}
    animate={{
      y: [0, -100, 0],
      x: [0, Math.random() * 50 - 25, 0],
      opacity: [0, 0.8, 0],
      scale: [0, 1.5, 0],
    }}
    transition={{
      duration: 4 + Math.random() * 2,
      repeat: Infinity,
      delay: delay + Math.random() * 2,
      ease: "easeInOut",
    }}
  />
);

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;
    
    mouseX.set(x);
    mouseY.set(y);
    setMousePos({ x, y });
  };

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 100, rotateX: -30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 1.2, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d"
      }}
    >
      <motion.div
        className="relative h-[420px] cursor-pointer"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          mouseX.set(0);
          mouseY.set(0);
        }}
        whileHover={{ 
          scale: 1.05,
          z: 50
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Floating Particles */}
        {isHovered && [...Array(12)].map((_, i) => (
          <FloatingParticle 
            key={i} 
            color={project.color} 
            delay={i * 0.1}
          />
        ))}

        {/* Main Card */}
        <motion.div
          className="relative h-full rounded-3xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, 
              rgba(0,0,0,0.95) 0%, 
              ${project.color}10 20%, 
              rgba(0,0,0,0.9) 40%,
              ${project.color}15 60%,
              rgba(0,0,0,0.85) 80%,
              ${project.color}20 100%
            )`,
            backdropFilter: "blur(20px)",
            border: `1px solid ${project.color}30`,
            boxShadow: `
              0 0 40px ${project.color}20,
              inset 0 1px 0 rgba(255,255,255,0.1),
              inset 0 -1px 0 rgba(0,0,0,0.2)
            `
          }}
          animate={{
            boxShadow: isHovered 
              ? [
                  `0 0 60px ${project.color}30, 0 0 100px ${project.color}15`,
                  `0 0 80px ${project.color}40, 0 0 120px ${project.color}20`,
                  `0 0 60px ${project.color}30, 0 0 100px ${project.color}15`
                ]
              : `0 0 40px ${project.color}20`
          }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        >
          {/* Animated Border */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: `conic-gradient(from 0deg, 
                transparent 0%, 
                ${project.color}60 10%, 
                transparent 20%, 
                ${project.color}80 30%, 
                transparent 40%,
                ${project.color}60 50%,
                transparent 60%,
                ${project.color}80 70%,
                transparent 80%,
                ${project.color}60 90%,
                transparent 100%
              )`,
              padding: '2px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
            animate={{
              rotate: [0, 360],
              opacity: isHovered ? [0.4, 0.8, 0.4] : [0.2, 0.4, 0.2],
            }}
            transition={{
              rotate: { duration: 6, repeat: Infinity, ease: "linear" },
              opacity: { duration: 3, repeat: Infinity },
            }}
          />

          {/* Holographic Overlay */}
          <motion.div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: `linear-gradient(45deg, 
                transparent 30%, 
                ${project.color}40 50%, 
                transparent 70%
              )`,
            }}
            animate={{
              x: isHovered ? [-100, 400] : [0, 0],
              opacity: isHovered ? [0, 0.3, 0] : 0,
            }}
            transition={{
              duration: 1.5,
              repeat: isHovered ? Infinity : 0,
              repeatDelay: 2,
            }}
          />

          {/* Content Container */}
          <div className="relative h-full p-6 flex flex-col z-10">
            {/* Header with Icon */}
            <motion.div 
              className="flex items-center gap-4 mb-6"
              animate={{
                y: isHovered ? -5 : 0,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="relative p-3 rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
                  border: `1px solid ${project.color}50`,
                }}
                animate={{
                  rotate: isHovered ? [0, 10, -10, 0] : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.6 }}
              >
                <project.icon 
                  size={28} 
                  style={{ color: project.color }}
                />
                
                {/* Icon Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle, ${project.color}30, transparent 70%)`,
                  }}
                  animate={{
                    scale: isHovered ? [1, 1.5, 1] : 1,
                    opacity: isHovered ? [0.5, 0.8, 0.5] : 0.3,
                  }}
                  transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
                />
              </motion.div>

              <motion.h2
                className="text-2xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${project.color}, #ffffff)`,
                  fontFamily: "'Playfair Display', serif",
                }}
                animate={{
                  backgroundPosition: isHovered ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%',
                }}
                transition={{ duration: 3, repeat: isHovered ? Infinity : 0 }}
              >
                {project.title}
              </motion.h2>

              {/* Sparkle Effects */}
              {isHovered && (
                <motion.div
                  className="absolute -top-2 -right-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0, 1.2, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                >
                  <Sparkles size={16} style={{ color: project.color }} />
                </motion.div>
              )}
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-white/90 text-sm leading-relaxed mb-6 flex-grow"
              style={{ fontFamily: "'Playfair Display', serif" }}
              animate={{
                opacity: isHovered ? 1 : 0.8,
                y: isHovered ? -2 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {project.description}
            </motion.p>

            {/* Tech Stack */}
            <motion.div 
              className="flex flex-wrap gap-2 mb-6"
              animate={{
                y: isHovered ? -3 : 0,
              }}
              transition={{ duration: 0.3, staggerChildren: 0.05 }}
            >
              {project.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}15, ${project.color}25)`,
                    border: `1px solid ${project.color}40`,
                    color: project.color,
                    fontFamily: "'Playfair Display', serif",
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 0 15px ${project.color}40`
                  }}
                  animate={{
                    y: isHovered ? Math.sin(i * 0.5) * 2 : 0,
                  }}
                  transition={{ 
                    duration: 0.3,
                    delay: i * 0.05,
                    y: { duration: 2, repeat: isHovered ? Infinity : 0 }
                  }}
                >
                  {tech}
                  
                  {/* Tech Badge Shimmer */}
                  <motion.div
                    className="absolute inset-0 -skew-x-12"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${project.color}30, transparent)`,
                    }}
                    animate={{
                      x: isHovered ? [-100, 100] : [0, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: isHovered ? Infinity : 0,
                      repeatDelay: 2,
                      delay: i * 0.1,
                    }}
                  />
                </motion.span>
              ))}
            </motion.div>

            {/* Explore Button */}
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group/btn flex items-center justify-center py-3 rounded-xl text-sm font-semibold overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
                border: `1px solid ${project.color}60`,
                color: project.color,
                fontFamily: "'Playfair Display', serif",
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: `0 0 25px ${project.color}50`
              }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: isHovered 
                  ? `0 0 20px ${project.color}40`
                  : `0 0 10px ${project.color}20`
              }}
            >
              <span className="relative z-10 flex items-center">
                Explore
                <motion.div
                  animate={{ x: isHovered ? 3 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ExternalLink size={16} className="ml-2" />
                </motion.div>
              </span>
              
              {/* Button Hover Effect */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${project.color}30, ${project.color}50)`,
                }}
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Button Particles */}
              {isHovered && [...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: 3,
                    height: 3,
                    background: project.color,
                    top: '50%',
                    left: '50%',
                  }}
                  animate={{
                    x: [0, (Math.random() - 0.5) * 60],
                    y: [0, (Math.random() - 0.5) * 60],
                    opacity: [1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [globalHover, setGlobalHover] = useState(false);

  return (
    <section className="relative w-full py-32 px-6 md:px-16 lg:px-24 z-10 overflow-hidden">
      {/* Enhanced Cosmic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                ['#00F5FF', '#A400FF', '#FF00C8', '#FF6B35'][Math.floor(Math.random() * 4)]
              }66, transparent)`,
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Enhanced Header */}
      <motion.div
        className="text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 relative inline-block"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <motion.span
            className="bg-gradient-to-r from-cyan-400 via-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{ backgroundSize: '300% 300%' }}
          >
            Projects
          </motion.span>
          
          {/* Title Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent blur-sm"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ 
              backgroundSize: '300% 300%',
              zIndex: -1
            }}
          >
            Projects
          </motion.div>
        </motion.h1>

        <motion.p
          className="text-xl text-white/90 italic font-medium mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Showcasing innovation, creativity & problem-solving.
        </motion.p>

        <motion.div
          className="w-40 md:w-64 h-1 mx-auto rounded-full relative"
          animate={{
            backgroundImage: [
              'linear-gradient(90deg, #00F5FF, transparent, #A400FF)',
              'linear-gradient(90deg, #A400FF, transparent, #FF00C8)',
              'linear-gradient(90deg, #FF00C8, transparent, #FF6B35)',
              'linear-gradient(90deg, #FF6B35, transparent, #00F5FF)',
            ],
            scaleX: [0.3, 1, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </motion.div>

      {/* Enhanced Cards Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 z-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
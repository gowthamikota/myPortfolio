import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [windowWidth, setWindowWidth] = useState(1200);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  
  const educationData = [
    {
      id: 1,
      degree: "B.Tech in CSE (AI & ML)",
      institution: "Gayatri Vidya Parishad (A)",
      year: "2022 - 2026",
      cgpa: "9.6/10",
      color: "#00F5FF",
      icon: "🎓",
      subjects: ["Artificial Intelligence", "Machine Learning", "Data Structures", "Algorithms", "Deep Learning", "Computer Vision"]
    },
    {
      id: 2,
      degree: "Intermediate (12th Grade)",
      institution: "Narayana Junior College",
      year: "2020 - 2022",
      cgpa: "97.9%",
      color: "#A400FF",
      subjects: ["Mathematics", "Physics", "Chemistry", "English"],
      icon: "📚"
    },
    {
      id: 3,
      degree: "Secondary Education (10th Grade)",
      institution: "Bhashyam School",
      year: "2019 - 2020",
      cgpa: "10/10",
      color: "#FF00C8",
      subjects: ["Mathematics", "Science", "Social Studies", "English", "Telugu"],
      icon: "🏫"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950/20 to-black py-20 px-4 md:px-8 overflow-hidden">
      {/* Cosmic Background Animation */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                ['#00F5FF', '#A400FF', '#FF00C8'][Math.floor(Math.random() * 3)]
              }66, transparent)`,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        
        {/* Spectacular Header */}
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
            {/* Main visible title */}
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Education
            </motion.span>
          </motion.h1>

          {/* Subtitle with better visibility */}
          <motion.p
            className="text-xl md:text-xl text-white mb-8 italic font-medium"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Journey of Knowledge & Innovation
          </motion.p>

          {/* Dynamic Underline */}
          <motion.div
            className="w-32 md:w-48 h-2 mx-auto rounded-full"
            animate={{
              backgroundImage: [
                'linear-gradient(90deg, #00F5FF, transparent, #A400FF)',
                'linear-gradient(90deg, #A400FF, transparent, #FF00C8)',
                'linear-gradient(90deg, #FF00C8, transparent, #00F5FF)',
              ],
              scaleX: [0.3, 1, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

        {/* Horizontal Timeline Container */}
        <div className="relative px-4 md:px-8">
          {/* Horizontal Timeline Spine */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full transform -translate-y-1/2 hidden md:block"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 0.8 }}
            transition={{ duration: 3, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left center" }}
          />

          {/* Energy Pulse Along Timeline */}
          <motion.div
            className="absolute top-1/2 left-0 w-8 md:w-12 h-2 md:h-3 bg-gradient-to-r from-white via-cyan-300 to-transparent rounded-full transform -translate-y-1/2 hidden md:block"
            animate={{ x: [0, Math.max(windowWidth - 100, 800)] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ filter: 'blur(2px)', opacity: 0.8 }}
          />

          {/* Education Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 relative z-10">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative group"
                initial={{ 
                  opacity: 0, 
                  y: 100,
                  rotateY: -45,
                  scale: 0.8
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  rotateY: 0,
                  scale: 1
                }}
                transition={{ 
                  duration: 1.5, 
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 80
                }}
                viewport={{ once: true }}
                style={{ perspective: 1200 }}
              >
                {/* Timeline Connection Node */}
                <motion.div
                  className="absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2 w-8 md:w-12 h-8 md:h-12 rounded-full border-2 md:border-4 border-white/30 z-30 flex items-center justify-center"
                  style={{ 
                    background: `conic-gradient(from 0deg, ${edu.color}88, ${edu.color}22, ${edu.color}88)`,
                    boxShadow: `0 0 20px ${edu.color}77`
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: hoveredCard === edu.id ? [1, 1.3, 1.1] : [1, 1.05, 1],
                    boxShadow: hoveredCard === edu.id 
                      ? [`0 0 20px ${edu.color}77`, `0 0 40px ${edu.color}aa`, `0 0 30px ${edu.color}88`]
                      : [`0 0 20px ${edu.color}77`, `0 0 25px ${edu.color}88`, `0 0 20px ${edu.color}77`],
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1, repeat: Infinity },
                    boxShadow: { duration: 1.5, repeat: Infinity }
                  }}
                >
                  <motion.span
                    className="text-lg md:text-2xl"
                    animate={{ 
                      scale: [1, 1.15, 1],
                      rotateY: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.3 
                    }}
                  >
                    {edu.icon}
                  </motion.span>
                </motion.div>

                {/* Main Education Card */}
                <motion.div
                  className="relative bg-gradient-to-br from-black/80 via-transparent to-black/80 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 h-80 md:h-96 cursor-pointer overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(0,0,0,0.9) 0%, 
                      ${edu.color}15 30%,
                      rgba(0,0,0,0.8) 70%,
                      ${edu.color}20 100%)`,
                  }}
                  onHoverStart={() => setHoveredCard(edu.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    z: 50,
                  }}
                  animate={{
                    boxShadow: hoveredCard === edu.id 
                      ? `0 15px 50px ${edu.color}44`
                      : `0 8px 25px ${edu.color}22`,
                  }}
                >
                  {/* Animated Background Mesh */}
                  <motion.div
                    className="absolute inset-0 opacity-10"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, ${edu.color}66, transparent 50%), 
                                  radial-gradient(circle at 70% 80%, ${edu.color}44, transparent 50%)`,
                    }}
                    animate={{
                      background: [
                        `radial-gradient(circle at 30% 20%, ${edu.color}66, transparent 50%), radial-gradient(circle at 70% 80%, ${edu.color}44, transparent 50%)`,
                        `radial-gradient(circle at 60% 40%, ${edu.color}66, transparent 50%), radial-gradient(circle at 40% 60%, ${edu.color}44, transparent 50%)`,
                        `radial-gradient(circle at 30% 20%, ${edu.color}66, transparent 50%), radial-gradient(circle at 70% 80%, ${edu.color}44, transparent 50%)`,
                      ]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />

                  {/* Floating Micro Particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full opacity-50"
                      style={{ 
                        background: edu.color,
                        top: `${15 + Math.random() * 70}%`,
                        left: `${10 + Math.random() * 80}%`,
                      }}
                      animate={{
                        y: [-6, 6, -6],
                        x: [-3, 3, -3],
                        opacity: [0.2, 0.7, 0.2],
                        scale: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}

                  {/* Card Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header */}
                    <div className="mb-4 md:mb-6">
                      <motion.h3
                        className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3 leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        animate={{
                          color: hoveredCard === edu.id ? edu.color : '#ffffff',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {edu.degree}
                      </motion.h3>
                      <p className="text-white/70 text-sm md:text-lg font-medium">
                        {edu.institution}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-white/60 text-xs md:text-sm">Duration</span>
                        <span className="text-white font-semibold text-sm md:text-base">{edu.year}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-white/60 text-xs md:text-sm">Achievement</span>
                        <motion.span 
                          className="font-bold text-lg md:text-2xl"
                          style={{ color: edu.color }}
                          animate={{
                            scale: hoveredCard === edu.id ? [1, 1.1, 1] : 1,
                            textShadow: hoveredCard === edu.id 
                              ? [`0 0 10px ${edu.color}`, `0 0 20px ${edu.color}`, `0 0 15px ${edu.color}`]
                              : `0 0 5px ${edu.color}`,
                          }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          {edu.cgpa}
                        </motion.span>
                      </div>
                    </div>

                    {/* Subject Tags */}
                    <div className="mt-auto">
                      <p className="text-white/50 text-xs mb-2 md:mb-3 uppercase tracking-wide">Key Subjects</p>
                      <div className="flex flex-wrap gap-1 md:gap-1.5">
                        {edu.subjects.slice(0, 4).map((subject, i) => (
                          <motion.span
                            key={i}
                            className="px-2 py-1 rounded-full text-xs border font-medium"
                            style={{
                              borderColor: `${edu.color}55`,
                              backgroundColor: `${edu.color}11`,
                              color: edu.color,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 + index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: `${edu.color}33`,
                              boxShadow: `0 0 8px ${edu.color}66`
                            }}
                          >
                            {subject}
                          </motion.span>
                        ))}
                        {edu.subjects.length > 4 && (
                          <span className="px-2 py-1 text-xs text-white/40">
                            +{edu.subjects.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Animated Border Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl md:rounded-3xl"
                    style={{
                      background: `conic-gradient(from 0deg, transparent 0%, ${edu.color}66 20%, transparent 40%, ${edu.color}66 60%, transparent 80%, ${edu.color}66 100%)`,
                      padding: '1px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                    animate={{
                      rotate: [0, 360],
                      opacity: hoveredCard === edu.id ? [0.3, 0.6, 0.4] : [0.2, 0.35, 0.2],
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      opacity: { duration: 2, repeat: Infinity }
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Constellation */}
        <motion.div
          className="mt-16 md:mt-24 flex justify-center items-center space-x-4 md:space-x-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          viewport={{ once: true }}
        >
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              className="relative flex items-center"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="w-3 md:w-4 h-3 md:h-4 rounded-full"
                style={{ backgroundColor: edu.color }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.6, 1, 0.6],
                  boxShadow: [
                    `0 0 8px ${edu.color}66`,
                    `0 0 20px ${edu.color}99`,
                    `0 0 8px ${edu.color}66`
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              />
              {i < educationData.length - 1 && (
                <div 
                  className="w-4 md:w-8 h-px bg-gradient-to-r from-current to-transparent ml-2"
                  style={{ color: edu.color }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
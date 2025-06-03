// src/components/sections/AboutMe.jsx
import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="relative w-full py-32 px-6 md:px-16 lg:px-24 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20 text-white">

        {/* Left Side: Animated Text Content */}
        <motion.div
          className="flex-1 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] via-[#A400FF] to-[#FF00C8]"
            style={{ fontFamily: "'Playfair Display', serif" }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-white/70 text-xl md:text-2xl italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.1 }}
          >
            Dreaming, Designing, and Developing the Future with AI & Code.
          </motion.p>

          <motion.p
            className="text-white/85 text-lg leading-relaxed"
            style={{ fontFamily: "'Playfair Display', serif" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.2 }}
          >
            I’m Gowthami Kota, a final-year B.Tech student specializing in Artificial Intelligence and Machine Learning.
            My mission is to craft smart, emotionally resonant experiences at the intersection of AI and design.
            I believe in combining logic with creativity to bring ideas to life.
          </motion.p>
        </motion.div>

        {/* Right Side: Animated Glowing Image */}
        {/* Right Side: Animated Glowing Image with Square Rotating Frame */}
<motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
        >
          <div className="relative flex items-center justify-center">

            {/* Outer Rotating Constellation Ring */}
            <motion.div
              className="absolute w-96 h-96 opacity-60"
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  style={{
                    top: `${50 + 45 * Math.sin((i * 30 * Math.PI) / 180)}%`,
                    left: `${50 + 45 * Math.cos((i * 30 * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>

            {/* Middle Pulsing Hexagon */}
            <motion.div
              className="absolute w-80 h-80 opacity-30"
              animate={{
                rotate: [0, 60, 120, 180, 240, 300, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full border-2 border-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-xl transform rotate-45"
                   style={{
                     background: 'conic-gradient(from 0deg, #00F5FF22, #A400FF22, #FF00C822, #00F5FF22)',
                     clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                   }}
              />
            </motion.div>

            {/* Inner Breathing Ring */}
            <motion.div
              className="absolute w-72 h-72 rounded-full"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background: 'conic-gradient(from 180deg, transparent, #A400FF44, transparent, #FF00C844, transparent)',
              }}
            />

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-cyan-300 to-pink-300 rounded-full"
                style={{
                  top: `${30 + Math.random() * 40}%`,
                  left: `${30 + Math.random() * 40}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Main Image Container with Subtle Glow */}
            <motion.div 
              className="relative z-10 w-64 h-64 md:w-72 md:h-72 rounded-full flex items-center justify-center"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(164, 0, 255, 0.3)',
                  '0 0 40px rgba(255, 0, 200, 0.4)',
                  '0 0 20px rgba(0, 245, 255, 0.3)',
                  '0 0 20px rgba(164, 0, 255, 0.3)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background: 'radial-gradient(circle, rgba(164, 0, 255, 0.1) 0%, rgba(255, 0, 200, 0.05) 50%, transparent 100%)',
              }}
            >
              {/* Profile Image */}
              <motion.img
                src="/me-profile.png"
                alt="Gowthami Kota"
                className="w-60 h-60 md:w-64 md:h-64 object-cover rounded-full border border-white/10"
                whileHover={{ 
                  scale: 1.05,
                  filter: 'brightness(1.1)',
                }}
                transition={{ duration: 0.3 }}
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(164, 0, 255, 0.2))',
                }}
              />

              {/* Inner Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  background: [
                    'radial-gradient(circle, transparent 60%, rgba(0, 245, 255, 0.1) 70%, transparent 80%)',
                    'radial-gradient(circle, transparent 60%, rgba(164, 0, 255, 0.1) 70%, transparent 80%)',
                    'radial-gradient(circle, transparent 60%, rgba(255, 0, 200, 0.1) 70%, transparent 80%)',
                    'radial-gradient(circle, transparent 60%, rgba(0, 245, 255, 0.1) 70%, transparent 80%)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Ambient Light Streaks */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-20 opacity-40"
                style={{
                  background: `linear-gradient(to bottom, transparent, ${
                    i % 2 === 0 ? '#00F5FF' : '#FF00C8'
                  }, transparent)`,
                  top: '20%',
                  left: '50%',
                  transformOrigin: 'bottom center',
                  transform: `rotate(${i * 45}deg)`,
                }}
                animate={{
                  scaleY: [0.5, 1, 0.5],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMe;

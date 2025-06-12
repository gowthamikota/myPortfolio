// src/components/sections/Highlights.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  BookOpenCheck,
  Brain,
  CheckCircle2,
  Code,
  Trophy
} from "lucide-react";

const highlights = [
  {
    icon: <Trophy size={28} />,
    title: "Academic Topper",
    description:
      "Secured 1st rank in B.Tech 1st year with a CGPA of 9.6/10 at GVP College of Engineering.",
    color: "#00F5FF"
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "Elite+Gold Certification",
    description: "IoT Certification awarded by NPTEL Swayam for excellence.",
    color: "#A400FF"
  },
  {
    icon: <Award size={28} />,
    title: "Elite+Silver Certification",
    description: "Certified in Ethical Hacking by NPTEL Swayam.",
    color: "#FF00C8"
  },
  {
    icon: <Brain size={28} />,
    title: "Google AI/ML Internship",
    description:
      "AICTE-certified internship focused on computer vision, CNNs, and deep learning.",
    color: "#f59e0b"
  },
  {
    icon: <Code size={28} />,
    title: "Web Full-Stack Intern",
    description:
      "Completed internship at EduSkills, building secure full-stack applications using MERN.",
    color: "#10b981"
  },
  {
    icon: <BookOpenCheck size={28} />,
    title: "Accenture Simulation",
    description: "Completed Data Analyst Virtual Internship Program on Forage.",
    color: "#6366f1"
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: "Tech Community Leader",
    description:
      "Led PR & Media for the AI Club and contributed as a technical content writer.",
    color: "#ec4899"
  }
];

const Highlights = () => {
  return (
    <section className="w-full py-24 px-6 md:px-16 lg:px-24 bg-transparent">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Highlights & Achievements
        </motion.h2>

        <p className="text-white/80 text-lg md:text-xl mt-6 mb-12 max-w-3xl mx-auto italic">
          Milestones of my academic and professional journey
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/5 shadow-xl text-white overflow-hidden"
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              whileHover={{
                scale: 1.05,
                rotateX: -5,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.9,
                type: "spring"
              }}
              viewport={{ once: true }}
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform"
              }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full shadow-md"
                style={{
                  backgroundColor: `${item.color}22`,
                  color: item.color,
                  boxShadow: `0 0 20px ${item.color}55`
                }}
              >
                {item.icon}
              </div>
              <h3
                className="text-xl font-semibold mb-2 text-center"
                style={{
                  color: item.color,
                  textShadow: `0 0 6px ${item.color}`
                }}
              >
                {item.title}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed text-center">
                {item.description}
              </p>

              {/* Glow border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
                animate={{
                  borderColor: [item.color + "33", item.color + "66", item.color + "33"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;

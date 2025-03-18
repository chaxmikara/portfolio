"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "other";
}

const skills: Skill[] = [
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 55, category: "frontend" },
  { name: "React", level: 60, category: "frontend" },
  { name: "Next.js", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 50, category: "frontend" },
  { name: "TypeScript", level: 60, category: "frontend" },
  { name: "Node.js", level: 60, category: "backend" },
  { name: "Express", level: 55, category: "backend" },
  { name: "SpringBoot", level: 85, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "MySQL", level: 85, category: "backend" },
  { name: "Git/GitHub", level: 85, category: "other" },
  { name: "UI/UX Design", level: 80, category: "other" },
];

export function SkillsSection() {
  const frontendSkills = skills.filter((skill) => skill.category === "frontend");
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const otherSkills = skills.filter((skill) => skill.category === "other");

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // State to track animated progress values
  const [progressValues, setProgressValues] = useState<Record<string, number>>({});

  // Initialize all progress values to 0
  useEffect(() => {
    const initialValues: Record<string, number> = {};
    skills.forEach(skill => {
      initialValues[skill.name] = 0;
    });
    setProgressValues(initialValues);
  }, []);

  // Animate progress bars when section is in view
  useEffect(() => {
    if (isInView) {
      // Small delay before starting animations
      const timeout = setTimeout(() => {
        skills.forEach((skill) => {
          setProgressValues((prev) => ({
            ...prev,
            [skill.name]: skill.level
          }));
        });
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const SkillBar = ({ skill }: { skill: Skill }) => {
    const currentValue = progressValues[skill.name] || 0;

    return (
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm font-medium">{skill.name}</span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm text-muted-foreground"
          >
            {Math.round(currentValue)}%
          </motion.span>
        </div>
        <Progress value={currentValue} className="h-2" />
      </div>
    );
  };

  return (
    <section id="skills" className="py-16 md:py-24 overflow-hidden" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-8 text-center"
        >
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              My Skills
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400"
            >
              Here&apos;s a breakdown of my technical expertise and proficiency levels
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
          >
            <motion.div variants={cardVariants}>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
                  <div className="space-y-4">
                    {frontendSkills.map((skill, index) => (
                      <SkillBar key={index} skill={skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Backend Development</h3>
                  <div className="space-y-4">
                    {backendSkills.map((skill, index) => (
                      <SkillBar key={index} skill={skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Other Skills</h3>
                  <div className="space-y-4">
                    {otherSkills.map((skill, index) => (
                      <SkillBar key={index} skill={skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
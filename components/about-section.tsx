"use client"

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, User } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);

  const educationData = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "Informatics Institute of Technology (IIT)",
      location: "Sri Lanka",
      period: "Sep 2023 - Present",
      courses: [
        "Software Development I, II - Python, Java",
        "Mathematics for Computing",
        "Trends in Computer Science",
        "Computer Systems Fundamentals",
        "Web Design and Development",
        "Object Oriented Programming",
        "Database Systems",
        "Machine Learning and Data Mining",
        "Algorithms: Theory, Design and Implementation"
      ],
      additionalCourses: [
        {
          name: "Advanced Certificate in English Language",
          institution: "NIBM Sri Lanka"
        },
        {
          name: "Web Design for Beginners",
          institution: "University of Moratuwa (UOM) Sri Lanka"
        },
        {
          name: "Python for Beginners",
          institution: "University of Moratuwa (UOM) Sri Lanka"
        }
      ]
    },
    {
      title: "High School Education",
      institution: "Richmond College",
      location: "Galle, Sri Lanka",
      period: "2009 - 2023",
      achievements: [
        "Distinction in Mathematics",
        "Advanced level physical science stream",
        "Participated in programming competitions",
        "School IT Society member(RITS)"
      ]
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get to Know Me</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a passionate developer with a strong background in backend development, mobile app devlopment and a keen eye for design.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                <User className="mr-1 h-4 w-4" />
                Personal Info
              </div>
              <h3 className="text-2xl font-bold">Who I Am</h3>
              <p className="text-muted-foreground">
                Computer Science student seeking an internship to apply technical skills and gain hands-on experience. Proficient in Python, Java, HTML, JavaScript, Spring Boot, MySQL, PostgreSQL, Git, Firebase, Next.js, React, and Angular. Skilled in UI/UX design using Figma, with a creative mindset for generating innovative ideas. Passionate about learning, problem-solving, and contributing to impactful projects in a collaborative environment.
              </p>
              <p className="text-muted-foreground mt-4">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying outdoor activities to maintain a healthy work-life balance.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="flex border-b">
                  {educationData.map((edu, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`flex-1 px-4 py-3 text-sm font-medium transition-colors 
                        ${activeTab === index
                          ? "bg-primary/10 text-primary border-b-2 border-primary"
                          : "text-muted-foreground hover:bg-muted/50"}`}
                    >
                      {index === 0 ? "University" : "School"}
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <motion.div
                      className="space-y-3 w-full"
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <h4 className="text-xl font-bold">{educationData[activeTab].title}</h4>
                        <p className="text-sm">
                          <span className="font-semibold text-primary">{educationData[activeTab].institution}</span>
                          <span className="text-muted-foreground"> • {educationData[activeTab].location}</span>
                        </p>
                        <Badge variant="outline" className="mt-2 bg-primary/5">
                          {educationData[activeTab].period}
                        </Badge>
                      </div>

                      {activeTab === 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h5 className="text-sm font-semibold mt-4 mb-2">Core Modules</h5>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                            {educationData[0].courses.map((course, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-start">
                                <span className="text-primary mr-1.5">•</span> {course}
                              </li>
                            ))}
                          </ul>

                          <h5 className="text-sm font-semibold mt-4 mb-2">Additional Certifications</h5>
                          <ul className="space-y-1">
                            {educationData[0].additionalCourses.map((course, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-start">
                                <span className="text-primary mr-1.5">•</span>
                                {course.name} - <span className="italic">{course.institution}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}

                      {activeTab === 1 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h5 className="text-sm font-semibold mt-4 mb-2">Key Achievements</h5>
                          <ul className="space-y-1">
                            {educationData[1].achievements.map((achievement, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-start">
                                <span className="text-primary mr-1.5">•</span> {achievement}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
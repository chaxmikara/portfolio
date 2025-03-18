import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, User } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get to Know Me</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a passionate developer with a strong background in web development and a keen eye for design.
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
                I'm a dedicated web developer with a passion for creating beautiful, functional, and user-friendly websites. 
                I believe in the power of technology to transform businesses and enhance user experiences.
              </p>
              <p className="text-muted-foreground mt-4">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or enjoying outdoor activities to maintain a healthy work-life balance.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold">Education</h4>
                    <p className="text-sm text-muted-foreground">Bachelor of Science in Computer Science</p>
                    <p className="text-sm text-muted-foreground">University Name, 2018-2022</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold">Experience</h4>
                    <p className="text-sm text-muted-foreground">Senior Web Developer</p>
                    <p className="text-sm text-muted-foreground">Company Name, 2022-Present</p>
                    <p className="text-sm text-muted-foreground mt-2">Web Developer</p>
                    <p className="text-sm text-muted-foreground">Previous Company, 2020-2022</p>
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
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/project-card";
import { projects, getProjectCategories } from "@/data/projects";
import { ChevronUp, ChevronDown } from "lucide-react";

export function ProjectsSection() {
  const categoryInfo = getProjectCategories();
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(6); // Initially show 6 projects
  const initialProjectCount = 6;

  // Group projects by category and subcategory
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = {};
    }

    const subcategory = project.subcategory || "General";

    if (!acc[project.category][subcategory]) {
      acc[project.category][subcategory] = [];
    }

    acc[project.category][subcategory].push(project);
    return acc;
  }, {} as Record<string, Record<string, typeof projects>>);

  // Filter projects based on active category
  const filteredCategories = activeCategory === "all"
    ? Object.keys(groupedProjects)
    : [activeCategory].filter(cat => Object.keys(groupedProjects).includes(cat));

  // Count total projects in current filter
  const totalProjects = filteredCategories.reduce((total, category) => {
    return total + Object.values(groupedProjects[category]).flat().length;
  }, 0);

  // Function to load more projects
  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 6, totalProjects));
  };

  // Function to show less projects
  const showLess = () => {
    setVisibleProjects(initialProjectCount);
    // Scroll back to the projects section
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Get all visible projects
  const visibleProjectsList = filteredCategories.flatMap(category =>
    Object.entries(groupedProjects[category]).flatMap(([subcategory, subcategoryProjects]) =>
      subcategoryProjects
    )
  ).slice(0, visibleProjects);

  // Check if expanded
  const isExpanded = visibleProjects > initialProjectCount;

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Portfolio</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent work and personal projects.
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mt-10 mb-12">
          <div className="inline-flex items-center rounded-md border bg-muted p-1 text-muted-foreground shadow-sm">
            {categoryInfo.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setVisibleProjects(initialProjectCount); // Reset visible count when changing category
                }}
                className={cn(
                  "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                  activeCategory === category.id
                    ? "bg-background text-foreground shadow-sm"
                    : "hover:bg-background/40"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {filteredCategories.length > 0 ? (
          <>
            {/* Projects Display */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {visibleProjectsList.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="text-center mt-12 space-y-4">
              {/* Show More Button */}
              {visibleProjects < totalProjects && (
                <button
                  onClick={loadMore}
                  className="px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center mx-auto"
                >
                  <span>Load More Projects</span>
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>
              )}

              {/* Show Less Button */}
              {isExpanded && visibleProjects > initialProjectCount && (
                <button
                  onClick={showLess}
                  className="px-6 py-2 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors flex items-center mx-auto"
                >
                  <span>Show Less</span>
                  <ChevronUp className="ml-2 h-4 w-4" />
                </button>
              )}
            </div>

            {/* Project Count Display */}
            <p className="text-center text-sm text-muted-foreground mt-4">
              Showing {visibleProjectsList.length} of {totalProjects} projects
            </p>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
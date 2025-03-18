"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="overflow-hidden flex flex-col h-full group border-0 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-background">
            <div className="relative aspect-video overflow-hidden rounded-t-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end">
                    <div className="w-full p-4 text-white">
                        <div className="flex flex-wrap gap-2 mb-2">
                            {project.tags.slice(0, 3).map((tag, tagIndex) => (
                                <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                                    {tag}
                                </span>
                            ))}
                            {project.tags.length > 3 && (
                                <span className="text-xs px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                                    +{project.tags.length - 3}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <CardHeader className="flex-grow px-5 pt-5 pb-2">
                <CardTitle className="line-clamp-2 text-xl group-hover:text-primary transition-colors">
                    {project.title}
                </CardTitle>
                <CardDescription className="mt-2 line-clamp-3 text-sm opacity-90">
                    {project.description}
                </CardDescription>
            </CardHeader>

            <CardContent className="px-5 pt-1 pb-2">
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs font-medium">
                            {tag}
                        </Badge>
                    ))}
                    {project.tags.length > 4 && (
                        <Badge variant="outline" className="text-xs">+{project.tags.length - 4}</Badge>
                    )}
                </div>
            </CardContent>

            <CardFooter className="flex justify-between pt-3 pb-5 px-5 border-t mt-auto">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full hover:bg-muted/80 transition-colors"
                    >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                    </Button>
                </Link>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                        size="sm"
                        className="rounded-full bg-primary hover:bg-primary/90 transition-colors shadow-sm"
                    >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {project.category === "UI/UX Design" ? "Design" : "Live Demo"}
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}

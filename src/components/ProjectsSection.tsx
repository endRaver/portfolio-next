import { ArrowRightIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Cakery19",
    description: "A bakery website for a local bakery",
    image: "/projects/cakery19.png",
    tags: ["Tailwind CSS", "React", "Node.js", "MongoDB"],
    demoUrl: "https://cakery19.ch/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "BDS Lamchi",
    description:
      "A professional real estate website for showcasing property listings and services.",
    image: "/projects/lamchibds.png",
    tags: ["Tailwind CSS", "React", "Node.js", "MongoDB"],
    demoUrl: "https://www.bdslamchi.com/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Dflower8",
    description:
      "A charming website for a flower shop to display its floral arrangements.",
    image: "/projects/dflower8.png",
    tags: ["Tailwind CSS", "React"],
    demoUrl: "https://flowers-project.onrender.com/",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Tiki Bookstore",
    description:
      "An online bookstore platform designed to browse, search, and purchase books with ease.",
    image: "/projects/tiki.png",
    tags: ["Tailwind CSS", "React", "Node.js", "MongoDB"],
    demoUrl: "https://tiki-webapp-frontend.onrender.com/",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Azuki",
    description:
      "A product showcase site for a clothing brand specializing in jackets with built-in fans.",
    image: "/projects/azuki.png",
    tags: ["Tailwind CSS", "React"],
    demoUrl: "https://azukijapan.com/",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Feature <span className="text-primary">Projects</span>
        </h2>

        <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center">
          Here are some of the projects I&apos;ve worked on. Explore my work and
          let&apos;s discuss how I can help you create a website that stands out
          and drives results.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card card-hover overflow-hidden rounded-lg shadow-xs"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sx bg-secondary text-secondary-foreground cursor-pointer rounded-full border px-2 py-1 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-1 text-center text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLinkIcon size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/endRaver"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button mx-auto flex w-fit items-center gap-2"
          >
            Check My Github <ArrowRightIcon size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

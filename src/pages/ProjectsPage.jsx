import {
  techblogItems,
  travelogueItems,
  wodItems,
  weatherItems,
  projectItems,
  noteItems,
} from "../lib/content/projectItems";
import ProjectCard from "../components/ProjectCard.jsx";

function ProjectsPage() {
  return (
    <>
      <h1 className="mb-4" id="projects">
        Projects
      </h1>
      <h3 className="divider text-4xl pt-8 text-accent">
        Collaborative Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        <ProjectCard
          title="Travelogue Application"
          subtitle="Interactive Full-Stack Application"
          items={travelogueItems}
        />
        <ProjectCard
          title="Wheels of Date Night Application"
          subtitle="Node.js Application"
          items={wodItems}
        />
        <ProjectCard
          title="Git-Fit Fitness Tracker"
          subtitle="MERN Stack Application"
          items={projectItems}
        />
      </div>
      <h3 className="divider text-4xl pt-8 text-accent">Personal Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        <ProjectCard
          title="Tech-Blog Application"
          subtitle="A CMS-style blog site"
          items={techblogItems}
        />

        <ProjectCard
          title="Weather Dashboard Application"
          subtitle="Server-Side API Application"
          items={weatherItems}
        />
        <ProjectCard
          title="Note Taker"
          subtitle="Express.js Application"
          items={noteItems}
        />
      </div>
    </>
  );
}

export default ProjectsPage;

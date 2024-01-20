import {
  skillIcons,
  frameworkIcons,
  toolsIcons,
} from "../lib/content/skillIcons.js";
import SkillsCard from "/src/components/SkillsCard.jsx";

export const AboutPage = () => {
  return (
    <>
      <h1>About Me</h1>
      <div className="about-card flex my-10 lg:card-side bg-base-100">
      <figure className="about-image">
          <img src="/images/meImage.jpeg" alt="Me Image" />
          </figure>
   
        <div className="about-card-body flex flex-col justify-center pr-50px">
          {/* <h2 className="card-title">New album is released!</h2> */}
          <p>
            {" "}
            Computers and art have always had significant influences on me.
            After completing my Bachelors in Visual Arts with an emphasis in art
            history and criticism, I decided to combine my interests by taking
            courses in graphic arts, and recently decided to take my computer
            skills to the next level by learning software development. I recently completed the University of Texas Full Stack Coding Bootcamp and expanded my knowledge and experience in computer coding. I am excited to continue to learn and grow as a developer.
          </p>
        </div>
      </div>
      <h1 className="my-10" id="skills">
        Skills
      </h1>
      <div className="container mx-auto">
        <div>
          <h4 className="skills-title">
            These are some major languages, platforms, and tools I have
            experience with:
          </h4>
        </div>
        {/* Languages */}
        <div>
          <h3>Languages</h3>
        </div>
        <div className="flex flex-col justify justify-center items-center p-2">
          <div className="icons-list pb-4">
            <SkillsCard items={skillIcons} />
          </div>
          {/* Frameworks */}
          <div>
            <h3>Frameworks & Libraries</h3>
          </div>
          <div className="icons-list pt-1 pb-4">
            <SkillsCard items={frameworkIcons} />
          </div>
          {/* Tools */}
          <div>
            <h3>Tools & Databases</h3>
          </div>
          <div className="icons-list">
            <SkillsCard items={toolsIcons} />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutPage;

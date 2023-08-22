import React from "react";
import SkillBox from "../components/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

import { FaReact, FaUbuntu } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = () => {
  return (
    <div id="skills">
      <div className="container m-auto mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content */}
      </div>
      <div className="container m-auto mt-16">
        {/* Frontend */}
        <div className="flex flex-col gap-10">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-blue-500">
              {" "}
              Front-End Skills
            </h3>
            <p className="text-blue-500 mt-5 italic">
              {" "}
              I am proficient in front-end technologies. I love creating
              user-friendly websites with interactive elements and stylish
              designs.{" "}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-3 gap-4">
            <SkillBox logo={<IoLogoHtml5 />} skill={"HTML"} />
            <SkillBox logo={<IoLogoCss3 />} skill={"CSS"} />
            <SkillBox logo={<SiJavascript />} skill={"JavaScript"} />
            <SkillBox logo={<FaReact />} skill={"React"} />
            <SkillBox logo={<SiTailwindcss />} skill={"Tailwindcss"} />
            <SkillBox logo={<SiTypescript />} skill={"TypeScript"} />
          </div>
        </div>
      </div>
      <div className="container m-auto mt-16">
        {/* Backend */}
        <div className="flex flex-col gap-10">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-blue-500">
              {" "}
              Back-End Skills
            </h3>
            <p className="text-blue-500 italic mb-2">
              {" "}
              I am also proficient in back-end technologies, allowing me to
              create full-stack web applications.{" "}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 grid-cols-3 gap-4">
            <SkillBox logo={<IoLogoNodejs />} skill={"Node Js"} />
            <SkillBox logo={<SiMongodb />} skill={"MongoDB"} />
            <SkillBox logo={<SiExpress />} skill={"Express Js"} />
          </div>
        </div>
      </div>
      <div className="container m-auto mt-16">
        {/* Others */}
        <div className="flex flex-col gap-10">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-blue-500">
              {" "}
              Others
            </h3>
            <p className="text-blue-500 italic">
              {" "}
              In addition to my technical skills, I am also skilled in using Git
              and GitHub for version control, as well as working with Ubuntu for
              development environments.{" "}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 grid-cols-3 gap-4">
            <SkillBox logo={<AiFillGithub />} skill={"Github"} />
            <SkillBox logo={<FaUbuntu />} skill={"Ubuntu"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

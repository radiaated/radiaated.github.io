import { Link } from "react-router-dom";

import { skills } from "../assets/data/portfolios";
import {
  FaPython,
  FaJs,
  FaReact,
  FaLinkedin,
  FaAngleDown,
} from "react-icons/fa6";
import {
  SiDjango,
  SiNextdotjs,
  SiRedux,
  SiMaterialdesignicons,
  SiFlask,
  SiPostgresql,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";

const NavBar = () => {
  const skillsTechMaps: {
    [key: string]: { html: React.ReactNode };
  } = {
    Python: {
      html: (
        <div className="btn hover:shadow-sm hover:shadow-[#FFE873]/50">
          <FaPython className="text-[#FFE873]" /> Python
        </div>
      ),
    },
    Javascript: {
      html: (
        <div className="btn hover:shadow-sm hover:shadow-[#f0db4f]/50">
          <FaJs className="text-[#f0db4f]" /> Javascript
        </div>
      ),
    },
    React: {
      html: (
        <div className="btn hover:shadow-sm hover:shadow-[#61DBFB]/50">
          <FaReact className="text-[#61DBFB]" /> React
        </div>
      ),
    },
    Django: {
      html: (
        <div className="btn hover:shadow-sm hover:shadow-[#0db172]/50">
          <SiDjango className="text-[#0db172]" />
          Django
        </div>
      ),
    },
    NextJS: {
      html: (
        <div className="btn hover:shadow-sm hover:shadow-stone-200/50">
          <SiNextdotjs className="text-stone-200" />
          Next
        </div>
      ),
    },
    Redux: {
      html: (
        <div className="btn hover:shadow-sm hover:shadow-[#764abc]/50">
          <SiRedux className="text-[#764abc]" />
          Redux
        </div>
      ),
    },
    MaterialUI: {
      html: (
        <div className="btn hover:shadow-sm hover:shadow-[#047bfc]/50">
          <SiMaterialdesignicons className="text-[#047bfc]" />
          Material UI
        </div>
      ),
    },
    Flask: {
      html: (
        <div className="btn hover:shadow-sm hover:shadow-[#44aec0]/50">
          <SiFlask className="text-[#44aec0]" />
          Flask
        </div>
      ),
    },
    MySQL: {
      html: (
        <div className="btn hover:shadow-sm hover:shadow-[#edb56c]/50">
          <DiMysql className="text-[#edb56c]" />
          MySql
        </div>
      ),
    },
    PostgreSQL: {
      html: (
        <div className="btn hover:shadow-sm hover:shadow-[#93d4ea]/50">
          <SiPostgresql className="text-[#93d4ea]" />
          PostgreSQL
        </div>
      ),
    },
    Git: {
      html: (
        <div className="btn hover:shadow-sm hover:shadow-[#F1502F]/50">
          <SiGit className="text-[#F1502F]" />
          Git
        </div>
      ),
    },
  };

  return (
    <div className="h-screen w-100 flex flex-col justify-center items-center static top-0 left-0 mx-auto lg:fixed">
      <div className="text-3xl font-extrabold">radia_ated</div>
      <div className="font-extralight mb-2">Software Engineer</div>
      <div className="flex gap-2 text-lg mb-4">
        <Link
          to="https://www.linkedin.com/in/suman-khatiwada/"
          target="_blank"
          className="bg-[#0077B5] rounded-xs p-1"
        >
          <FaLinkedin />
        </Link>
        <Link
          to="https://github.com/radiaated"
          target="_blank"
          className="bg-[#8250DF] rounded-xs p-1"
        >
          <SiGithub />
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-2 w-[75%] select-none text-xs">
        {skills.map((skill, index) => (
          <div key={index} className="border border-stone-600 rounded ">
            {skillsTechMaps[skill]?.html}
          </div>
        ))}
      </div>
      <div className="w-fit mx-auto animate-bounce mt-16 text-4xl md:hidden">
        <FaAngleDown />
      </div>
    </div>
  );
};

export default NavBar;

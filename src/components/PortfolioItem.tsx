export interface IPortfolio {
  title: string;
  description: string;
  img: string;
  github_link: string;
  demo_link?: string;
  tech_stack: ("Python" | "Javascript" | "Django" | "React")[];
}
import { Link } from "react-router-dom";
import {
  FaPython,
  FaJs,
  FaReact,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { SiDjango, SiGithub } from "react-icons/si";

const PortfolioItem = ({ data }: { data: IPortfolio }) => {
  const techStackMaps = {
    Python: {
      html: (
        <div className="btn text-xs">
          <FaPython className="text-[#FFE873]" /> Python
        </div>
      ),
    },
    Javascript: {
      html: (
        <div className="btn text-xs">
          <FaJs className="text-[#f0db4f]" /> Javascript
        </div>
      ),
    },
    React: {
      html: (
        <div className="btn text-xs">
          <FaReact className="text-[#61DBFB]" /> React
        </div>
      ),
    },
    Django: {
      html: (
        <div className="btn text-xs">
          <SiDjango className="text-[#0db172]" />
          Django
        </div>
      ),
    },
  };

  return (
    <div className="flex md:relative group gap-4 overflow-clip border border-stone-700 rounded p-1">
      <div className="h-full w-[25%] md:absolute md:w-full md:group-hover:w-[25%] md:transition-all md:duration-200 md:cursor-pointer md:hover:cursor-auto">
        <div className="md:relative h-full w-full flex justify-center items-center">
          <img
            src={data.img}
            alt={data.title}
            className="block md:absolute w-full h-[127px] rounded object-cover blur-none md:blur-xs md:group-hover:blur-none md:transition"
          />
          <div className="hidden p-16 md:block md:z-50 md:relative md:text-2xl md:visible md:group-hover:invisible md:transition md:drop-shadow-2xl">
            {data.title}
          </div>
        </div>
      </div>

      <div className="hidden md:block md:w-[25%]"></div>

      <div className="w-[75%] visible md:invisible md:group-hover:visible md:delay-100 md:transition">
        <div className="text-lg">{data.title}</div>
        <div className="font-extralight text-stone-300">{data.description}</div>
        <div className="flex gap-2 mb-2">
          {data.tech_stack.map((tech, index) => (
            <div key={index} className="border-b border-stone-600 rounded-sm">
              {techStackMaps[tech].html}
            </div>
          ))}
          <div></div>
        </div>
        <div className="flex gap-2">
          <Link
            target="_blank"
            to={data.github_link}
            className="btn bg-[#0d74e7] hover:bg-[#0d81e7] rounded-sm text-xs font-extralight"
          >
            Github
            <SiGithub />
          </Link>
          {data.demo_link && (
            <Link
              target="_blank"
              to={data.demo_link}
              className="btn border border-stone-300 bg-transparent hover:bg-stone-300 hover:text-stone-800 rounded-sm text-xs font-extralight"
            >
              Demo
              <FaArrowUpRightFromSquare />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;

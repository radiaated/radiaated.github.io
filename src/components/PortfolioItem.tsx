export interface IPortfolio {
  title: string;
  description: string;
  img: string;
  github_link: string;
  demo_link?: string;
  tech_stack: ("Python" | "Javascript" | "Django" | "React")[];
}
import { Link } from "react-router-dom";
import DjangoIcon from "../assets/img/django-svgrepo-com.svg";

const PortfolioItem = ({ data }: { data: IPortfolio }) => {
  const techStackMaps = {
    Python: {
      html: (
        <div className="btn text-xs">
          <i className="fa-brands fa-python text-[#FFE873] "></i> Python
        </div>
      ),
    },
    Javascript: {
      html: (
        <div className="btn text-xs">
          <i className="fa-brands fa-js text-[#f0db4f] "></i> Javascript
        </div>
      ),
    },
    React: {
      html: (
        <div className="btn text-xs">
          <i className="text-[#61DBFB] fa-brands fa-react"></i> React
        </div>
      ),
    },
    Django: {
      html: (
        <div className="btn text-xs">
          <img src={DjangoIcon} className="h-4" />
          Django
        </div>
      ),
    },
  };

  return (
    <div className="flex relative group gap-4 hover:h-[125%]">
      <div className="absolute w-full h-full group-hover:w-[25%] transition-all duration-200 cursor-pointer hover:cursor-auto">
        <div className="relative h-full w-full flex justify-center items-center">
          <img
            src={data.img}
            alt={data.title}
            className="absolute w-full h-full object-cover blur-xs group-hover:blur-none transition"
          />
          <div className="z-50 relative text-2xl group-hover:invisible transition drop-shadow-2xl">
            {data.title}
          </div>
        </div>
      </div>

      <div className="w-[25%]"></div>

      <div className="w-[75%] invisible group-hover:visible delay-100 transition">
        <div className="text-lg">{data.title}</div>
        <div className="font-extralight">{data.description}</div>
        <div className="flex gap-2 mb-2">
          {data.tech_stack.map((tech, index) => (
            <div key={index}>{techStackMaps[tech].html}</div>
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
            <i className="fa-brands fa-github"></i>
          </Link>
          {data.demo_link && (
            <Link
              target="_blank"
              to={data.demo_link}
              className="btn border border-stone-300 bg-transparent hover:bg-stone-300 hover:text-stone-800 rounded-sm text-xs font-extralight"
            >
              Demo
              <i className="fa-solid fa-arrow-up-right-from-square text"></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;

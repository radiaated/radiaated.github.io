import { Link } from "react-router-dom";

// import DjangoIcon from "../assets/img/django-svgrepo-com.svg";
// import { skills } from "../assets/data/portfolios";
const NavBar = () => {
  //   const skillsTechMaps = {
  //     Python: {
  //       html: (
  //         <div className="btn text-xs">
  //           <i className="fa-brands fa-python text-[#FFE873] "></i> Python
  //         </div>
  //       ),
  //     },
  //     Javascript: {
  //       html: (
  //         <div className="btn text-xs">
  //           <i className="fa-brands fa-js text-[#f0db4f] "></i> Javascript
  //         </div>
  //       ),
  //     },
  //     React: {
  //       html: (
  //         <div className="btn text-xs">
  //           <i className="text-[#61DBFB] fa-brands fa-react"></i> React
  //         </div>
  //       ),
  //     },
  //     Django: {
  //       html: (
  //         <div className="btn text-xs">
  //           <img src={DjangoIcon} className="h-4" />
  //           Django
  //         </div>
  //       ),
  //     },
  //   };

  return (
    <div className="h-screen w-100 flex flex-col justify-center items-center static top-0 left-0 mx-auto lg:fixed">
      <div className="text-3xl font-extrabold">radia_ated</div>
      <div className="font-extralight mb-2">Software Engineer</div>
      <div className="flex gap-2 text-lg">
        <Link
          to="https://www.linkedin.com/in/suman-khatiwada/"
          target="_blank"
          className="bg-[#0077B5] rounded-xs px-1"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </Link>
        <Link
          to="https://github.com/radiaated"
          target="_blank"
          className="bg-[#8250DF] rounded-xs px-1"
        >
          <i className="fa-brands fa-github"></i>
        </Link>
      </div>
      {/* <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div>{skillsTechMaps[skill].html}</div>
        ))}
      </div> */}
    </div>
  );
};

export default NavBar;

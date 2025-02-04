import { IPortfolio } from "../../components/PortfolioItem";

import ImgCoverAaluType from "../img/aalu-type.png";
import ImgCoverSimPyleJSONServerp from "../img/simpyl-json.jpg";
import ImgCoverMedicalInsurancePrediction from "../img/medical-insurance-price-prediction.webp";
import ImgCoverELearning from "../img/e-learning.png";

export const skills: string[] = [
  "Javascript",
  "Python",
  "React",
  "Django",
  "NextJS",
  "Redux",
  "MaterialUI",
  "Flask",
  "MySQL",
  "PostgreSQL",
  "Git",
];

export const portfolios: IPortfolio[] = [
  {
    title: "Conceptual E-learning by Government",
    description:
      "A conceptual government oriented E-learning model and platform where students can enroll for online video courses.",
    img: ImgCoverELearning,
    github_link: "http://github.com/radiaated/ELearningGov",
    demo_link: "http://e-learning-government.onrender.com/",
    tech_stack: ["React", "Django"],
  },
  {
    title: "Medical Insurance Price Prediction",
    description:
      "A Gradient Boosting Machine learning model from scratch that predicts the medical insurance price for an individual based on various factors.",
    img: ImgCoverMedicalInsurancePrediction,
    github_link: "http://github.com/radiaated/MedicalInsurancePricePrediction",
    tech_stack: ["Python", "Django"],
  },
  {
    title: "SimPyleJSONServer",
    description:
      "A python package to create a local server that serves HTTP requests and performs database-like CRUD operations on a JSON file.",
    img: ImgCoverSimPyleJSONServerp,
    github_link: "https://github.com/radiaated/SimPyleJSONServer",
    tech_stack: ["Python"],
  },
  {
    title: "Web Based Typing Game",
    description:
      "A web based game to test player’s typing speed along with player’s accuracy and personal best time.",
    img: ImgCoverAaluType,
    github_link: "https://github.com/radiaated/aaluType",
    demo_link: "https://aalutype.vercel.app/",
    tech_stack: ["React"],
  },
];

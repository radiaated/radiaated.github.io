import PortfolioItem, { IPortfolio } from "./PortfolioItem";
import { portfolios } from "../assets/data/portfolios";
const Portfolio = () => {
  return (
    <div>
      <h2>Porfolio</h2>
      <div className="space-y-4 mt-4">
        {portfolios.map((portfolio, index) => (
          <PortfolioItem data={portfolio} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

import { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState<number>(0);

  useEffect(() => {
    let i: number = setInterval(() => {
      setLoading((state) => (state + 1) % 4);
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div className="text-6xl">
      Suman Khatiwada
      <div>
        <span className="text-xl">
          Under construction{Array.from({ length: loading }).map(() => ".")}
        </span>
      </div>
    </div>
  );
};

export default Home;

import { useState, useEffect } from "react";
import getDeals from "../API/DataDeals";

import CardGame from "../components/CardGame";
import Navbar from "../components/Navbar";

function Home() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    async function getLoadDeal() {
      const dealsData = await getDeals();
      setDeals(dealsData);
    }
    getLoadDeal();
  }, []);

  return (
    <div className="App-header">
      <div className="header-home">
        <div className="navbar-home">
          <Navbar />
        </div>
        {deals.map((deal, i) => (
          <CardGame data={deal} key={[i]} />
        ))}
      </div>
    </div>
  );
}

export default Home;

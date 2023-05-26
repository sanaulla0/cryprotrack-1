import React, { useEffect, useState } from "react";
import Header from '../components/common/Header';
import TabsComponent from '../components/dashboard/tabs';
import { get100Coins } from "../functions/get100Coins";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
function Watchlist() {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (watchlist) {
      getData();
    }
  }, []);

  const getData = async () => {
    const allCoins = await get100Coins();
    if (allCoins) {
      setCoins(allCoins.filter((coin) => watchlist.includes(coin.id)));
    }
  };

  return (
    <div>
      <Header />
      {watchlist?.length > 0 ? (
        <TabsComponent coins={coins} />
        
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Sorry, No Items In The Watchlist.
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <Link to='/Dashboard' >
              <Button text="Dashboard" onClick={()=>console.log("watchlist")} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Watchlist;
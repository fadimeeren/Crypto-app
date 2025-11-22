import { useState, useEffect } from "react";
import RefreshButton from "../../components/home/refresh-button";
import Searchbar from "../../components/home/searchbar";
import InfoList from "../../components/home/info-list";
import coinApi from "../../services/coinApi";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [coins, setCoins] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);

  // api'dan coin verilierini çeken fonksiyon
  const fetchCoins = () => {
    setLoading(true);

    coinApi
      .getTopCoins()
      .then((data) => {
        setCoins(data);
        setLastUpdated(new Date());
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  // component ekrana gelince verileri çek
  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div className="space-y-6">
      {/* Başlık */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Kripto Para Piyasası
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            En popüler kripto para birimleri
          </p>
        </div>

        {/* Arama ve Yenileme */}
        <div className="flex items-center gap-5">
          <Searchbar />

          <RefreshButton />
        </div>
      </div>

      {/* Bilgiler*/}
      <div>
      <InfoList
        total={coins.length}
        lastUpdate={lastUpdated?.toLocaleTimeString()}
      />
      </div>
    </div>
  );
};

export default Home;

import Card from "./components/Card";
import { useEffect, useState } from "react";
import { Ad } from "./entities";
import mapAds from "./utils/mapAds";

function App() {
  const [ads, setAds] = useState<Ad[]>([]);
  const [sortBySpend, setSortBySpend] = useState<boolean>(false);
  const [isAscending, setIsAscending] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  // Initial Fetch
  useEffect(() => {
    fetchAds();
  }, []);

  // Listens for sorting by spend or ASC/DESC toggle
  useEffect(() => {
    if (sortBySpend) {
      setAds((prevAds) => sortAds([...prevAds]));
    }
  }, [sortBySpend, isAscending]);

  const fetchAds = async () => {
    try {
      const response = await fetch("http://localhost:3000/fakeDataSet");
      const data = await response.json();
      const mappedData = mapAds(data);

      setAds(mappedData);
      setSortBySpend(false);
      setIsAscending(true);
      setSearch("");
    } catch (error) {
      console.log("Failed to fetch ads", error);
    }
  };

  const sortAds = (adsToSort: Ad[]): Ad[] => {
    if (!sortBySpend) return adsToSort;
    return adsToSort.sort((a, b) => {
      if (isAscending) {
        return a.spend - b.spend;
      } else {
        return b.spend - a.spend;
      }
    });
  };

  const filteredAds =
    search.length > 0
      ? sortAds(
          ads.filter((ad) =>
            ad.campaign.toLowerCase().includes(search.toLowerCase())
          )
        )
      : ads;

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setSearch(input);
  };

  const handleSortBySpend = () => {
    setSortBySpend(true);
  };

  const handleSortDirectionToggle = () => {
    if (!sortBySpend) return;
    setIsAscending((prev) => !prev);
  };

  const handleReset = () => {
    fetchAds();
  };

  return (
    <div className="h-screen">
      {/* Container */}
      <div className="h-full mx-40 py-20">
        {/* Header */}
        <div className="w-full flex flex-col space-y-4 mb-4">
          {/* Title */}
          <h1 className="text-3xl font-bold">Blueprint Ads Analytics</h1>

          {/* Search + Filter/Sort */}
          <div className="w-full flex items-center space-x-3">
            <input
              value={search}
              onChange={handleSearchInputChange}
              placeholder="Enter campaign name here"
              className="p-3 border w-1/4 rounded-lg"
            />

            <button
              onClick={handleSortBySpend}
              className={`text-md font-semibold border px-4 p-3 rounded-md ${
                sortBySpend && "bg-black text-white"
              }`}
            >
              Sort by Spend
            </button>

            <div className="flex items-center">
              <button
                onClick={handleSortDirectionToggle}
                className={`text-md font-semibold border px-4 py-3 rounded-md rounded-r-none ${
                  sortBySpend && isAscending
                    ? "bg-black text-white"
                    : "text-black bg-white"
                }`}
              >
                Asc
              </button>
              <button
                onClick={handleSortDirectionToggle}
                className={`text-md font-semibold border px-4 py-3 rounded-md rounded-l-none ${
                  sortBySpend && !isAscending
                    ? "bg-black text-white"
                    : "text-black bg-white"
                }`}
              >
                Desc
              </button>
            </div>

            <button
              onClick={handleReset}
              className="text-md font-semibold border px-4 p-3 rounded-md"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div className="w-full grid grid-cols-3 gap-4">
          {filteredAds.map((ad, index) => {
            return (
              <Card
                key={index + ad.campaign + ad.adSet + ad.creative}
                ad={ad}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

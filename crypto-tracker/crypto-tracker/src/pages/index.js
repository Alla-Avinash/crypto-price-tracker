import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchCryptoPrices = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false"
  );
  if (!res.ok) throw new Error("Failed to fetch prices");
  return res.json();
};

export default function CryptoTracker() {
  const [search, setSearch] = useState("");
  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ["cryptoPrices"],
    queryFn: fetchCryptoPrices,
  });


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data.</p>;

  const filteredData = data.filter((crypto) =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Crypto Price Tracker</h1>
      <input
        type="text"
        placeholder="Search cryptocurrency"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={refetch}>Refresh</button>
      <ul>
        {filteredData.map((crypto) => (
          <li key={crypto.id}>
            {crypto.name} - ${crypto.current_price}
          </li>
        ))}
      </ul>
    </div>
  );
}

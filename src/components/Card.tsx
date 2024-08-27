function Card() {
  return (
    <div className="border h-full rounded-md p-6 flex flex-col space-y-6 bg-slate-100">
      {/* Heading */}
      <div className="h-1/4 flex flex-col items-start">
        <h2 className="text-2xl font-bold mb-1">CREATIVE</h2>
        <p className="text-md opacity-85">
          <span className="font-semibold">Campaign: </span>CAMPAIGN
        </p>
        <p className="text-md opacity-85">
          <span className="font-semibold">Adset: </span>ADSET
        </p>
      </div>

      {/* Metrics */}
      <div className="w-full h-3/4 grid grid-rows-2 grid-cols-2">
        {/* Spend */}
        <div className="flex flex-col justify-end items-start">
          <h3 className="text-md opacity-50">Spend</h3>
          <p className="text-2xl font-bold">${15000}</p>
        </div>

        {/* Impressions */}
        <div className="flex flex-col justify-end items-start">
          <h3 className="text-md opacity-50">Impressions</h3>
          <p className="text-2xl font-bold">{15000}</p>
        </div>

        {/* Clicks */}
        <div className="flex flex-col justify-end items-start">
          <h3 className="text-md opacity-50">Clicks</h3>
          <p className="text-2xl font-bold">{15000}</p>
        </div>

        {/* Results */}
        <div className="flex flex-col justify-end items-start">
          <h3 className="text-md opacity-50">Results</h3>
          <p className="text-2xl font-bold">{15000}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

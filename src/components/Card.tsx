import { Ad } from "../entities";

type CardProps = {
  ad: Ad;
};

function Card({ ad }: CardProps) {
  return (
    <div className="border h-full rounded-md p-6 flex flex-col space-y-6 bg-slate-100">
      {/* Heading */}
      <div className="h-1/4 flex flex-col items-start">
        <h2 className="text-2xl font-bold mb-1">{ad.creative}</h2>
        <p className="text-md opacity-85">
          <span className="font-semibold">Campaign: </span>
          {ad.campaign}
        </p>
        <p className="text-md opacity-85">
          <span className="font-semibold">Adset: </span>
          {ad.adSet}
        </p>
      </div>

      {/* Metrics */}
      <div className="w-full h-3/4 grid grid-rows-2 grid-cols-2">
        {/* Spend */}
        {ad.spend && (
          <div className="flex flex-col justify-end items-start">
            <h3 className="text-md opacity-50">Spend</h3>
            <p className="text-2xl font-bold">${ad.spend}</p>
          </div>
        )}

        {/* Impressions */}
        {ad.impressions && (
          <div className="flex flex-col justify-end items-start">
            <h3 className="text-md opacity-50">Impressions</h3>
            <p className="text-2xl font-bold">{ad.impressions}</p>
          </div>
        )}

        {/* Clicks */}
        {ad.clicks && (
          <div className="flex flex-col justify-end items-start">
            <h3 className="text-md opacity-50">Clicks</h3>
            <p className="text-2xl font-bold">{ad.clicks}</p>
          </div>
        )}

        {/* Results */}
        {ad.results && (
          <div className="flex flex-col justify-end items-start">
            <h3 className="text-md opacity-50">Results</h3>
            <p className="text-2xl font-bold">{ad.results}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;

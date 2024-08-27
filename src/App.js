function App() {
  return (
    <div className="h-screen">
      {/* Container */}
      <div className="h-full mx-40 py-20 border">
        {/* Header */}
        <div className="w-full flex flex-col space-y-4 mb-4">
          {/* Title */}
          <h1 className="text-3xl font-bold">Blueprint Ads Analytics</h1>

          {/* Search + Filter/Sort */}
          <div className="w-full flex items-center space-x-3">
            <input
              placeholder="Enter campaign name here"
              className="p-3 border w-1/4 rounded-lg"
            />

            <button className="text-md font-semibold border px-4 p-3 rounded-md">
              Sort by Spend
            </button>

            <div className="flex items-center">
              <button className="text-md font-semibold border px-4 py-3 rounded-md rounded-r-none">
                Asc
              </button>
              <button className="text-md font-semibold border px-4 p-3 rounded-md rounded-l-none">
                Desc
              </button>
            </div>

            <button className="text-md font-semibold border px-4 p-3 rounded-md">
              Reset
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div className="w-full grid grid-cols-4 gap-4">
          <div className="border h-72 rounded-md">hi</div>
          <div className="border h-72 rounded-md">hi</div>
          <div className="border h-72 rounded-md">hi</div>
          <div className="border h-72 rounded-md">hi</div>
          <div className="border h-72 rounded-md">hi</div>
          <div className="border h-72 rounded-md">hi</div>
        </div>
      </div>
    </div>
  );
}

export default App;

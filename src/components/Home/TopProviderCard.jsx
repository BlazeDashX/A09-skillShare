const TopProviderCard = ({ providers }) => {
  return (
    <>
      {providers.map((provider) => (
        <div
          key={provider.id}
          className="bg-base-200/75 rounded-2xl p-5 text-center border border-base-200 flex flex-col items-center space-y-3 hover:bg-base-200 transition-colors duration-200"
        >
          <div className="avatar online">
            <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={provider.avatar} alt={provider.name} />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-primary text-lg leading-tight">
              {provider.name}
            </h4>
            <p className="text-xs text-amber-950 font-semibold mt-0.5">
              {provider.expertise}
            </p>
          </div>

          <div className="flex justify-between w-full border-t border-base-300 pt-3 text-xs text-base-content/70 font-medium">
            <span className="flex items-center gap-0.5 bg-amber-500 text-white p-1.5 rounded-full font-bold">
              ★ {provider.rating}
            </span>
            <span>{provider.swaps} Completed Swaps</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopProviderCard;
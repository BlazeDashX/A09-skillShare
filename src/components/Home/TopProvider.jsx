import { useEffect,useState } from "react";
import TopProviderCard from "./TopProviderCard";

const TopProvider = () => {
    const [topProviders, setTopProviders] = useState([]);

useEffect(() => {
    fetch("/skillsProvider.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setTopProviders(data);
        })
        .catch((err) => console.error(err));
}, []);


    return (
        <div>
      <div className="bg-primary/75 border border-base-200 rounded-3xl p-8 md:p-12 shadow-sm">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-black text-slate-950">Top Rated Experts</h2>
            <p className="text-green-100 font-medium text-sm mt-1">Community builders maintaining pristine educational peer execution scores.</p>
          </div>
          <div className="badge badge-neutral px-4 py-3 font-bold text-xs uppercase tracking-wider">Honor Roll Network</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         <TopProviderCard providers={topProviders} /> 
        </div>
      </div>
        </div>
    );
};

export default TopProvider;
import { useEffect, useState, useMemo } from "react";
import PopularSkillCard from "../components/Home/PopularSkillCard";

const AllSkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/skills.json")
      .then((response) => response.json())
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Database compilation error:", err);
        setLoading(false);
      });
  }, []);

  // 🔥 Safely handle properties and map perfectly to your JSON data
  const filteredSkills = useMemo(() => {
    const query = (searchQuery || "").toLowerCase();

    return skills.filter((skill) => {
      // Mapped specifically to 'name' instead of 'skillName'
      const name = skill?.name || "";
      const category = skill?.category || "";
      
      // Included tags for a much smarter search experience
      const tagsString = skill?.tags ? skill.tags.join(" ").toLowerCase() : "";

      return (
        name.toLowerCase().includes(query) || 
        category.toLowerCase().includes(query) ||
        tagsString.includes(query)
      );
    });
  }, [searchQuery, skills]);

  return (
    <div className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-base-content tracking-tight">
            Explore All <span className="text-primary">Skills</span>
          </h2>
          <p className="text-base-content/60 font-medium text-sm md:text-base">
            Browse our complete directory of technical expertises and vocational synchronization sessions.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search by skill name, category, or tags..."
              className="input input-bordered w-full pl-12 shadow-sm focus:border-primary transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40">
              🔍
            </span>
          </div>
        </div>

        {/* Results Section */}
        {filteredSkills.length === 0 && !loading ? (
          <div className="text-center py-20 bg-base-200/50 rounded-3xl border-2 border-dashed border-base-300">
            <h3 className="text-xl font-bold text-base-content/50">No skills matching "{searchQuery}"</h3>
            <button 
              onClick={() => setSearchQuery("")} 
              className="btn btn-ghost btn-sm mt-4 text-primary"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <PopularSkillCard 
            skills={filteredSkills} 
            loading={loading} 
          />
        )}
      </div>
    </div>
  );
};

export default AllSkills;
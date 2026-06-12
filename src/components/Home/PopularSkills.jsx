import { useEffect,useState } from "react";
import PopularSkillCard from "./PopularSkillCard";

const PopularSkills = () => {
    const [popularSkills, setPopularSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/skills.json")
            .then((response) => response.json())
            .then((data) => {

                const sortedByRating = [...data].sort((a, b) => b.rating - a.rating);
                const topRatedSkills = sortedByRating.slice(0, 4);
                setPopularSkills(topRatedSkills);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Database compilation error:", err);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <div id="skills-section" className="scroll-mt-6">
                <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
                    <h2 className="text-3xl md:text-4xl font-black text-base-content">Trending Exchanges</h2>
                    <p className="text-base-content/60 font-medium text-sm md:text-base">Acquire technical competencies trending inside international industry operations right now.</p>
                </div>

                <PopularSkillCard
                    skills={popularSkills}
                    loading={loading}
                />
            </div>
        </div>
    );
};

export default PopularSkills;
import { Link } from "react-router-dom";
const PopularSkillCard = ({ skills, loading }) => {
    if (loading) {
        return <div className="text-center py-10"><span class="loading loading-spinner text-success"></span></div>;
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skill) => (
                    <div key={skill.id} className="card bg-base-100 shadow-xl border border-base-200 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <figure className="h-48 w-full overflow-hidden relative">
                                <img src={skill.image} alt={skill.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                                <div className="absolute top-3 right-3 bg-base-100/90 backdrop-blur-md font-extrabold text-sm px-3 py-1 rounded-full shadow text-primary">
                                    ${skill.price}/hr Value
                                </div>
                            </figure>

                            <div className="card-body p-5 space-y-2">
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                                        <span>★</span> {skill.rating}
                                    </div>
                                    <span className="badge badge-success badge-sm font-semibold text-base-content/60">Verified Dev</span>
                                </div>
                                <h3 className="text-xl font-bold text-base-content leading-snug line-clamp-1">{skill.name}</h3>
                                <p className="text-sm text-base-content/70 line-clamp-2 font-medium">{skill.description}</p>
                            </div>
                        </div>

                        <div className="px-5 pb-5 pt-0">
                            <Link to={`/skill/${skill.id}`} className="btn btn-primary btn-outline w-full hover:bg-primary hover:text-white transition-colors duration-200">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularSkillCard;
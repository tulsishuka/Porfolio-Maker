import { useNavigate } from "react-router-dom";
export default function ProfileCard({ profile }) {
  const navigate = useNavigate();
  const hero = profile.hero 
  const bg =  profile.template === "template2"
      ? "bg-gradient-to-br from-blue-50 to-rose-100"
      : "bg-gradient-to-br from-blue-500 to-blue-100";
  return (
    <div className={`${bg} w-80 md:w-96 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 flex flex-col items-center`}>
                  <img src={hero.image}alt="img"className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"/>  

      <h3 className="mt-4 text-2xl font-bold text-gray-800 text-center">
                      {hero.name}
      </h3>
                      <p className="text-sm text-gray-600 text-center">{hero.role}</p>
                <p className="text-sm text-gray-500 text-center">{hero.skills}</p>

 <p className="mt-4 text-gray-700 text-sm text-center leading-relaxed line-clamp-4"> {profile.about?.bio || "No bio provided yet."}</p>
                           {profile.skills && profile.skills.length > 0 && (

              <div className="mt-4 flex flex-wrap justify-center gap-2">{profile.skills.slice(0, 6).map((skill, i) => (

                       <span key={i}className="text-xs font-medium bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">{skill}</span>))}</div>)}

      <button onClick={() => navigate(`/portfolio/${profile._id}`)}className="mt-6 px-6 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 active:scale-95 transition-transform">View Portfolio</button>
    </div>
  );
}

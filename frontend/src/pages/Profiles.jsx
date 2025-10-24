import React, { useEffect, useState } from "react";
import { API } from "../api";
import ProfileCard from "../components/Profilecard.jsx";
export default function Profiles(){
  const [profiles, setProfiles] = useState([]);
  useEffect(()=> 
    { load(); }, []);


  async function load(){ const res = await API.get("/"); setProfiles(res.data); }

  return (
    <div>
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {profiles.map(p=> <ProfileCard key={p._id} profile={p} />)}
      </div>
    </div>
  );
}

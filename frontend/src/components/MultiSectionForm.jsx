                import React, { useState, useEffect } from "react";
export default function MultiStepForm({ template, onSubmit, initialData }) {

  const [hero, setHero] = useState({name:"",title:"",tagline:"",image: "" });

  const [about, setAbout] = useState({bio: "",email:"",phone:"",location: "",socials:[]});
  const [skills, setSkills] = useState([]);

   const [step, setStep] = useState(0);
  const [skillInput, setSkillInput] = useState("");

       const sections = ["Hero","About","Skills","Services","Projects","Testimonials","Blog","Contact", ];


               const [services, setServices]=useState([{title:"",description:"" }]);

  const [projects, setProjects] = useState([{title:"",image:"",description:""}]);

                 const [testimonials, setTestimonials] = useState([{client:"",quote:"" }]);
                const [blog, setBlog] = useState([{title:"", summary:"" }]);
  const [contact, setContact] = useState({ message:"", email:"", phone:"" });

  useEffect(() => {
    if (initialData) {
            setHero(initialData.hero );
      setAbout(initialData.about );
                setSkills(initialData.skills);
                   setServices(initialData.services );
                         setProjects(initialData.projects  );
                    setTestimonials(initialData.testimonials );
       setBlog(initialData.blog );
              setContact(initialData.contact );
    }
  }, [initialData]);

  const addSkill = () => {
         if (!skillInput.trim()) return;

   setSkills(prev => [...prev, skillInput.trim()]);


    setSkillInput("");
  };
       const removeSkill = i => setSkills(prev => prev.filter((_, idx) => idx !== i));

           const handleArrayChange = (setter, i, key, val) =>

             setter(prev => { const copy = [...prev]; copy[i][key] = val; return copy; });


                      const addArrayItem = (setter, item) => setter(prev => [...prev, item]);
       const nextStep = () => setStep(prev => Math.min(prev + 1, sections.length - 1));
                   const prevStep = () => setStep(prev => Math.max(prev - 1, 0));
  const submitForm = e => {
         if (e) e.preventDefault();
onSubmit({ template, hero, about, skills, services, projects, testimonials, blog, contact });
  };
  const renderStep = () => {
    switch (sections[step]) {
      case "Hero":
        return (
          <div className="grid gap-3">

            <input placeholder="name" value={hero.name} onChange={e => setHero({ ...hero, name: e.target.value })} className="p-2 border rounded" />   


        <input placeholder="title" value={hero.title}       onChange={e => setHero({ ...hero, title: e.target.value })} className="p-2 border rounded" />
    <input placeholder="taglin" value={hero.tagline} onChange={e => setHero({ ...hero, tagline: e.target.value })} className="p-2 border rounded" />


         <input placeholder="Img link" value={hero.image} onChange={e => setHero({ ...hero, image: e.target.value })} className="p-2 border rounded" />
          </div>
        );


      case "About":
        return (
          <div className="grid gap-2">
            <textarea placeholder="Bio" value={about.bio} onChange={e =>setAbout({ ...about,bio: e.target.value })} className="p-2 border rounded w-full" rows={4} />
            <input placeholder="wmail" value={about.email} onChange={e =>setAbout({ ...about,email: e.target.value })} className="p-2 border rounded" />


            <input placeholder="phone" value={about.phone} onChange={e =>setAbout({ ...about,phone: e.target.value })} className="p-2 border rounded" />
            <input placeholder="location" value={about.location} onChange={e =>setAbout({...about,location:e.target.value })} className="p-2 border rounded" />


            <p className="mt-2 text-sm text-gray-600">Add social links (`platform|url` + Enter)</p>


            <input className="p-2 border rounded w-full"onKeyDown={e => {if (e.key === "Enter") {e.preventDefault();const v = e.target.value.trim();if (!v) return;const [platform, url] = v.split("|");if (platform && url) {setAbout(prev => ({ ...prev, socials: [...(prev.socials || []), { platform: platform.trim(), url: url.trim() }] }));e.target.value = "";}}}}placeholder="Show Demo Link"/>
            <div className="flex gap-2 mt-2 flex-wrap">{(about.socials || []).map((s, i) => <span key={i} className="px-3 py-1 bg-gray-100 rounded">{s.platform}</span>)}</div>
          </div>


        );
      case "Skills":
        return (
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
          <input value={skillInput} onChange={e=>setSkillInput(e.target.value)} placeholder="type a skills" className="p-2 border rounded flex-1" />
                   <button type="button" onClick={addSkill} className="px-4 py-2 bg-emerald-600 text-white rounded">add</button>
            </div>
            <div className="flex gap-2 flex-wrap">

              {skills.map((s, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded"><span>{s}</span>

                  <button type="button" className="text-red-500" onClick={() => removeSkill(i)}>x</button></div>))}</div>
          </div>
        );


      case "service":

        return (

          <div className="grid gap-2">
            {services.map((s, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-2">

                <input placeholder="Service Title" value={s.title} onChange={e => handleArrayChange(setServices, i, "title", e.target.value)} className="p-2 border rounded" />
                <input placeholder="Description" value={s.description} onChange={e => handleArrayChange(setServices, i, "description", e.target.value)} className="p-2 border rounded" /></div>))}


            <button type="button" onClick={() => addArrayItem(setServices, {title:"", description: ""})} className="px-3 py-2 bg-gray-100 rounded mt-2">service</button>
          </div>
        );
      case "projects":
        return (
          <div className="grid gap-2">
            {projects.map((p, i) => (
              <div key={i} className="grid md:grid-cols-3 gap-2">
                <input placeholder="Project tirle" value={p.title} onChange={e => handleArrayChange(setProjects, i, e.target.value)} className="p-2 border rounded" />


                <input placeholder="img urlL" value={p.image} onChange={e => handleArrayChange(setProjects, i, e.target.value)} className="p-2 border rounded" />

                <input placeholder="des..." value={p.description} onChange={e => handleArrayChange(setProjects, i,  e.target.value)} className="p-2 border rounded" />
              </div>
            ))}
            <button type="button" onClick={()=>addArrayItem(setProjects,{title:"", image: "",description: "" })} className="px-3 py-2 bg-gray-100 rounded mt-2">add</button>
          </div>
        );
      case "testimoniel":
        return (
          <div className="grid gap-2">
            {testimonials.map((t, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-2">
                <input placeholder="Client Name" value={t.client} onChange={e => handleArrayChange(setTestimonials, i,  e.target.value)} className="p-2 border rounded" />
                <input placeholder="Quote" value={t.quote} onChange={e => handleArrayChange(setTestimonials, i, e.target.value)} className="p-2 border rounded" />
              </div>
            ))}
            <button type="button" onClick={() => addArrayItem(setTestimonials, { client: "", quote: "" })} className="px-3 py-2 bg-gray-100 rounded mt-2"> add</button>
          </div>
        );
      case "blog":
        return (
          <div className="grid gap-2">
            {blog.map((b, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-2">

                <input placeholder="Title" value={b.title} onChange={e => handleArrayChange(setBlog, i,  e.target.value)} className="p-2 border rounded" />

                <input placeholder="Summary" value={b.summary} onChange={e => handleArrayChange(setBlog, i,  e.target.value)} className="p-2 border rounded" /></div>))}
            <button type="button" onClick={() => addArrayItem(setBlog, { title: "", summary: "" })} className="px-3 py-2 bg-gray-100 rounded mt-2">+ add Blog</button>
          </div>
        );
      case "contact":
        return (
          <div className="grid md:grid-cols-3 gap-2">


            <input placeholder="default msg" value={contact.message} onChange={e => setContact({ ...contact, message: e.target.value })} className="p-2 border rounded" />

            <input placeholder="email" value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })} className="p-2 border rounded" />

            <input placeholder="phone" value={contact.phone} onChange={e =>setContact({...contact,phone: e.target.value })} className="p-2 border rounded" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={submitForm} className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">

      <h3 className="text-xl font-semibold mb-4">{sections[step]} detail</h3>
      <div className="mb-4">{renderStep()}</div>

      <div className="flex justify-between mt-4">
        <button type="button" disabled={step === 0} onClick={prevStep} className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">Back</button>

        {step < sections.length - 1 ? (<button type="button" onClick={nextStep} className="px-4 py-2 bg-emerald-600 text-white rounded">Next</button>
        ) : (


          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded">Submit Final Form</button>)}</div></form>
  );
}

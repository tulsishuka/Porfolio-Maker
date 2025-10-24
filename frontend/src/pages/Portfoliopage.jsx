
            import HeroSection from "../components/FormSection/Hero";
          import Skills from "../components/FormSection/Skills";
                 import AboutMe from "../components/FormSection/About";
          import Services from "../components/FormSection/Services";

    import React, { useEffect, useState } from "react";
                import { useParams } from "react-router-dom";
import MultiStepForm from "../components/MultiSectionForm";
        import Portfolio from "../components/FormSection/Portfolio";
import Blog from "../components/FormSection/Blog";
import { API } from "../api";
import TemplateSelector from "../components/Template";
     import Footer from "../components/FormSection/Footer";
import Testimonials from "../components/FormSection/Testimonials";

export default function PortfolioPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    API.get(`/${id}`)
      .then(res => setData(res.data))
      .catch(console.error);
  }, [id]);

  async function handleSave(payload) {
    try {
      const res = await API.put(`/${id}`, payload);
      setData(res.data);
      setEditing(false);
    } catch (err) {
      console.error(err);
      alert("Mission failes");
    }
  }
  if (!data) {
  return <div className="text-center p-8">Loading...</div>;
}

 
  const bgClass = data.template === "template2" ? "bg-rose-50" : "bg-yellow-50";
  if (editing) {
    return (
      <div>
        <div className="mb-4 flex gap-2">
          <button onClick={() => setEditing(false)}className="px-3 py-2 bg-gray-100 rounded">Cencal</button>
        </div><MultiStepForm Formtemplate={data.template}initialData={data}onSubmit={handleSave}/></div>
    );
  }
  return (
    <div className={`${bgClass} min-h-screen relative`}>
      <button onClick={() => setEditing(true)}className="fixed bottom-6 right-6 px-4 py-2 bg-yellow-400 text-white rounded shadow-lg hover:bg-emerald-700 transition">Edit Profile</button>
      <div className="container mx-auto py-6">
        <div className="mt-6 bg-white rounded shadow p-6 space-y-6">
          <HeroSection hero={data.hero} template={data.template} />
          <AboutMe about={data.about} />
          <Skills skills={data.skills} />
          <Services services={data.services} />
          <Portfolio projects={data.projects} />
          <Testimonials testimonials={data.testimonials} />
          <Blog blog={data.blog} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

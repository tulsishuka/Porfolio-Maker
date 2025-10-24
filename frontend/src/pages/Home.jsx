                        import { useState } from "react"
                 import { useNavigate } from "react-router-dom"
       import TemplateSelector from "../components/Template.jsx"
          import MultiSectionForm from "../components/MultiSectionForm.jsx"
import { API } from "../api";

export default function Home() {
  const [template, setTemplate] = useState(null);
         const navigate = useNavigate();
  async function handleCreate(payload) {
    try {
      const res = await API.post("/", payload);
                 if (res.data && res.data._id) {
                navigate("/profiles");
                } else {
                     navigate("/profiles");
       }
                } catch (err) {
                console.error(err);
                   alert("Something false , try again");
                 }
  }
          return (
                <div className="p-6 max-w-4xl mx-auto">
              {!template ? (
               <TemplateSelector onSelect={setTemplate} />
    ) : (
               <div>
                 <button className="mb-4 px-3 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"onClick={() => setTemplate(null)}>← Back</button>
                       <MultiSectionForm template={template} onSubmit={handleCreate} /></div>)}
  </div>
)
}
export default function Portfolio({ projects = [] }) {
  return (
    <section className="py-12 bg-gray-100 text-center">

      <h2 className="text-2xl font-bold mb-6">Portfolio</h2>

      <div className="grid md:grid-cols-3 gap-6 px-6">
        {projects.length ? projects.map((paps,i)=>(

          <div key={i} className="bg-gray-100 rounded overflow-hidden shadow">
            <img src={paps.image} alt={paps.title} className="w-full h-40 object-cover" />
            <div className="p-3">

              <h3 className="font-semibold">{paps.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{paps.desc}</p>
            </div>

          </div>
        )) : <p className="text-gray-500">No more projects</p>}
      </div>
    </section>
  )
}

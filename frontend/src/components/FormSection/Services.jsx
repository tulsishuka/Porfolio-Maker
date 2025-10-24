export default function Services({ services = [] }) {
  return (
    <section className="py-12 bg-yellow-600 text-center">

      <h2 className="text-2xl font-bold mb-6">Services</h2>

      <div className="grid md:grid-cols-3 gap-6 px-6">
        
        {services.length ? services.map((serv,i)=>(
          <div key={i} className="bg-white p-6 rounded-xl shadow">

            <h3 className="font-semibold">{serv.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{serv.description}</p>
          </div>
        )) : <p className="text-gray-500">No services</p>}

      </div>
    </section>
  )
}

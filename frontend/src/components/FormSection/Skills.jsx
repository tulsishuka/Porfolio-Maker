export default function Skills({ skills = [] }) {
  return (
          <section className="py-12 bg-gray-100 text-center">


                          <h2 className="text-2xl font-bold mb-6">Skills</h2>
                              <div className="flex flex-wrap justify-center gap-4">{skills.length ? (

          skills.map((skill, i) => (<div key={i} className="bg-white shadow-md rounded-lg px-6 py-3 hover:shadow-lg transition-shadow duration-200">
              <span className="text-gray-800 font-medium">{skill}</span></div>
          ))
        ) : (
                    <p className="text-gray-500">No skills added</p>
        )}
      </div>
    </section>
  );
}

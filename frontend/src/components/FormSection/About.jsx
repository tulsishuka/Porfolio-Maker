export default function AboutMe({ about = {} }) {
  const infolist = [
    { label: "email", value: about.email },
    { label: "phone", value: about.phone },
    { label: "locetion", value: about.location }
  ]

  return (
    <section className="py-12 bg-yellow-600 flex justify-center">


      <div className="max-w-3xl w-full grid sm:grid-cols-3 gap-6">
        {infolist.map((information, index) =>information.value && (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-200">
                <h3 className="text-lg font-semibold mb-2">{information.label}</h3>


                <p className="text-gray-700 break-words">{information.value}</p></div>))}
      </div>
    </section>
  )
}

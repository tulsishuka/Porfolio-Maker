export default function Blog({ blogi = [] }) {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-6">Blog</h2>


      <div className="grid md:grid-cols-3 gap-6 px-6">


        {blogi.length ? blogi.map((carry,i)=>(
          <div key={i} className="bg-gray-100 p-6 rounded-xl">
            <h3 className="font-semibold">{carry.title}</h3>

            <p className="text-sm text-gray-600 mt-2">{carry.summary}</p></div>
        )) : <p className="text-gray-500">No blog posts</p>}

      </div>
    </section>
  )
}

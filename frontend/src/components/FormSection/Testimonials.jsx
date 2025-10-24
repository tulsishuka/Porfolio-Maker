export default function Testimonials({ testimonials = [] }) {
  return (
              <section className="py-12 bg-yellow-600 text-center">
      
                  <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
                            <div className="flex flex-wrap justify-center gap-6">
                                {testimonials.length ? testimonials.map((testy,i)=>(

                <blockquote key={i} className="bg-white p-6 rounded-xl shadow w-80">

                      <p className="italic text-gray-600">{testy.quote}</p>
                       <footer className="text-sm text-gray-800 mt-3">{testy.client}</footer>
                        </blockquote>
        )) : 
        <p className="text-gray-500">No testimonials</p>}
      </div>
    </section>
  );
}

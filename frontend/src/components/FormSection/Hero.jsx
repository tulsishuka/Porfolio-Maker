
export default function HeroSection({ hero = {}, template }) {
  if (template === "template2") {
    return (
      <div
        className="py-12"
        style={{ background: "linear-gradient(70deg,#fef3c7,#fdg88a)" }}>
          
        <div className="container mx-auto flex flex-col items-center">
          <img src={hero.image } alt={hero.name }className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-lg"/>
          <h1 className="text-3xl md:text-4xl font-bold mt-4">{hero.name}</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto flex flex-col items-center gap-4">


        <img src={hero.image }alt={hero.name}className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-2 border-gray-200 shadow-lg"/>
        <h1 className="text-2xl md:text-3xl font-bold">{hero.name}</h1>
      </div>
    </div>
  );
}

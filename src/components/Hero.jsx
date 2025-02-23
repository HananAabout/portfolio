
import imageqq from "../components/imageqq.webp"; // Assurez-vous que ce chemin est correct

export const Hero = () => {
  return (
    <section className="relative">
   
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-2xl transform -rotate-1"></div>

      <div className="relative flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl bg-white shadow-xl">
   
        <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-indigo-200">
          <img
            src={imageqq} 
            alt="Photo de Hanan Aabout"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text content */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Hanan Aabout
          </h1>
          <p className="text-2xl font-medium text-indigo-600 mb-4">
            Développeur Full Stack
          </p>
          <p className="text-gray-600 max-w-lg text-lg">
            Passionnée par le développement web et la création de sites web et 
            d'applications innovantes. Je transforme des idées en solutions digitales.
          </p>
        </div>
      </div>
    </section>
  );
};

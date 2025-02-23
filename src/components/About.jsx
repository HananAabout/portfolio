
export const About = () => {
  return (
    <section className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
        À Propos
      </h2>
      <p className="text-gray-700 mb-8 text-lg leading-relaxed text-center">
        Je suis <span className="font-semibold text-indigo-600">Hanan Aabout</span>, une stagiaire passionnée par le développement digital. 
        Actuellement en 2ᵉ année de développement digital option full stack, je me spécialise dans la création de sites web et 
        d'applications interactives. J'aime relever des défis techniques, apprendre de nouvelles technologies, 
        et concevoir des solutions modernes qui allient esthétique et performance. 
        Ce portfolio reflète mon parcours, mes compétences et les projets qui m'inspirent. 
        <span className="block mt-2">N'hésitez pas à me contacter pour collaborer ou en savoir plus !</span>
      </p>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-md transform hover:-translate-y-1 transition-transform duration-300">
          <p className="text-4xl font-bold text-indigo-600 mb-2">+2</p>
          <p className="text-gray-700 font-medium">Années d'expérience</p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-md transform hover:-translate-y-1 transition-transform duration-300">
          <p className="text-4xl font-bold text-indigo-600 mb-2">+3</p>
          <p className="text-gray-700 font-medium">Projets réalisés</p>
        </div>
      </div>
    </section>
  );
};

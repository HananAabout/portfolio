export const Projects = () => {
  const projects = [
    {
      title: "Site web statique",
      description: "Site statique présentant les services de la salle de coaching, incluant les offres, les horaires, les tarifs, et des témoignages clients. Il offre une navigation simple et intuitive, avec une section contact pour prendre rendez-vous. L'objectif est de promouvoir les services de coaching et attirer de nouveaux clients.",
      technologies: ["Html", "CSS","Bootstrap"],
      link: "https://site-statique-nu.vercel.app/", // Ajout du lien
    },
    {
      title: "Application de gestion d'abscence",
      description: "Cette application permet de suivre les absences des stagiaires. Les stagiaires peuvent signaler leurs absences, et les responsables peuvent les valider ou les refuser. Un historique des absences est disponible pour un suivi facile.",
      technologies: ["Html", "CSS","Bootstrap","PHP"],
      link: "https://github.com/HananAabout/gestion-absence", // Ajout du lien
    },
    {
      title: "Application des utilisateurs et leurs demandes",
      description: "Ce projet React consiste à créer une application permettant de gérer les utilisateurs et leurs demandes. Les administrateurs peuvent consulter, traiter et suivre les demandes soumises par les utilisateurs. Le système inclut des fonctionnalités comme l’ajout, la modification et la suppression des utilisateurs, ainsi qu’un suivi de l’état des demandes.",
      technologies: ["Html", "CSS","Bootstrap","React"],
      link: "https://application-login.vercel.app/", // Ajout du lien
    },
  ];

  return (
    <section className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
        Projets
      </h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 transform hover:-translate-y-1 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-white/50 text-indigo-600 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Lien vers la page du projet */}
            <div className="mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                Voir le projet
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

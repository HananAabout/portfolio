export const Experience = () => {
  const experiences = [
    {
      title: "Développement Front end",
      period: "2023 - Présent",
      description: "J'ai contribué à la création et à l'optimisation de sites web réactifs en utilisant des technologies comme HTML, CSS, JavaScript et React. J'ai travaillé à l'intégration de maquettes UI/UX, au développement de composants interactifs et à l'amélioration de l'expérience utilisateur. J'ai également collaboré avec les équipes back-end pour assurer une intégration fluide des API et effectué des tests de performance et de compatibilité entre navigateurs pour garantir la qualité des applications.",
    },
    {
      title: "Développeur Full Stack",
      period: "2023 - Présent",
      description: "J'ai travaillé sur la création et l'optimisation d'APIs en utilisant des technologies comme Node.js, et PHP. J'ai géré l'intégration de bases de données relationnelles (MySQL) et non relationnelles (MongoDB), assuré la mise en place de systèmes d'authentification sécurisés et participé à la gestion des requêtes côté serveur. J'ai également contribué à l'optimisation des performances des applications en améliorant les requêtes SQL et en mettant en place des mécanismes de cache.",
    },
    {
      title: "Gestion de projet agile",
      period: "2024 - Présent",
      description: "Expérience dans la gestion de projets selon la méthodologie Scrum, incluant la planification des sprints, la rédaction de user stories, et la gestion des démos ainsi qu'Expérience dans l’utilisation de Jira pour la création, la priorisation et la gestion des tâches et des bugs.",
    },
  ];

  return (
    <section className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
        Expérience
      </h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-indigo-500 before:to-blue-500 before:rounded-full"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{exp.title}</h3>
            <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

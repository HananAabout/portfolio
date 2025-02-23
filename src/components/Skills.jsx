import React from 'react';

export const Skills = () => {
  const skills = {
    "Frontend": ["Html","CSS","React", "Javascript"],
    "Backend": ["Node.js", "Python","Laravel","PHP"],
    "Base de données": ["MySQL","MongoDB"],
    "Outils": ["Git", "GitHub","Gitlab","Jira"],
  };

  return (
    <section className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
        Compétences
      </h2>
      <div className="space-y-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-600 rounded-lg text-sm font-medium transform hover:-translate-y-1 transition-transform duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
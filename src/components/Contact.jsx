
export const Contact = () => {
  return (
    <section className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
        Contact
      </h2>
      <div className="flex flex-wrap gap-4">
        <a
          href="https://mail.google.com/mail/u/0/#inbox"
          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl hover:from-indigo-600 hover:to-blue-600 transform hover:-translate-y-1 transition-all duration-300"
        >
          <span>Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/hanan-aabout-847a622b7/"
          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl hover:from-indigo-600 hover:to-blue-600 transform hover:-translate-y-1 transition-all duration-300"
        >
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/HananAabout/Application-Login"
          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl hover:from-indigo-600 hover:to-blue-600 transform hover:-translate-y-1 transition-all duration-300"
        >
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
};
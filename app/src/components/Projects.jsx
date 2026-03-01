function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Data Science */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Data Science</h3>
          <ul className="space-y-3 text-gray-700">
            <li>• Sentiment Analysis on Movie Reviews</li>
            <li>• Exploratory Data Analysis on Real Datasets</li>
            <li>• Machine Learning Classification Models</li>
          </ul>
        </div>

        {/* Web Development */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Web Development</h3>
          <ul className="space-y-3 text-gray-700">
            <li>• Personal Portfolio Website</li>
            <li>• React-based UI Applications</li>
            <li>• Responsive Web Interfaces</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
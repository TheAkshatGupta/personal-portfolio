function Skills() {
  const skills = [
    "Python",
    "Machine Learning",
    "Data Analysis",
    "React",
    "JavaScript",
    "HTML & CSS",
    "Tailwind CSS",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white p-4 text-center rounded-lg shadow-sm font-medium"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
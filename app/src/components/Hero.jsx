function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-sm uppercase tracking-widest text-indigo-500 mb-4">
        Mission: Identity
      </p>

      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
        Hi, I'm <span className="text-indigo-600">Akshat</span> 👋
      </h1>

      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        Data Science & Web Development enthusiast building intelligent systems
        and clean, scalable user interfaces.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
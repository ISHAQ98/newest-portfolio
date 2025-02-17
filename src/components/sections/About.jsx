function About() {
  const skills = [
    "Html",
    "Css",
    "JavaScript",
    "typeScript ",
    "React",
    "Next.js",
    "tailwindCSS",
    "Node.js",
    "AWS",
    "MongoDB",
    "GraphQL",
  ];
  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="max-w-3xl text-4xl font-bold mb-8 bg-gradient-to-r from-teal-500  to-indigo-600 bg-clip-text text-transparent text-center ">
          About Me
        </h2>

        <div className=" p-8 rounded-xl  border-white/10 border-2 hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl text-center font-bold mb-4">💼 Skills</h3>
            <div className="flex justify-center flex-wrap gap-2">
              {skills.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,13O,22.46,0.2)] transition "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl text-center font-bold mb-4">📚 Education</h3>
            <ul className=" pl-5 list-disc list-inside text-gray-300">
              <li>
                <strong>B.S. in Computer Science </strong> - X University (2017
                - 2022)
              </li>
              <li>
                CS50 , Data Structures, Web Development, Cloud Computing...
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

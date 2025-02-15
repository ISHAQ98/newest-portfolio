import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitlift from "../../assets/fitlift.png";
import viberr from "../../assets/viberr.png";

import Img from "../../Ui/Img";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function Projects() {
  const obj = { freshBurger, hipsster, viberr, fitlift };

  // console.log(Object.values(obj));
  const arr = Object.values(obj);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="max-w-3xl text-4xl font-bold mb-8 bg-gradient-to-r from-teal-500  to-indigo-600 bg-clip-text text-transparent text-center ">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {arr.map((ar, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.2)]  hover:-translate-y-1 transition-all hover:bg-cyan-900 "
            >
              <h3 className="font-semibold text-xl mb-3">Hotel Dashboard</h3>
              <p className="text-gray-300 mb-4">
                Scalable Dashboard App with CRUD operations manages all the
                bookings, users, guests and services.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Supabase", "Vercel"].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.1)] transition-all hover:text-white "
                  >
                    {tech}
                  </span>
                ))}
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className=" flex justify-between items-center font-bold  text-blue-400  transition-colors hover:text-white"
                  >
                    View Project
                    <ArrowRightIcon className="w-6 h-5  ml-3 inline " />
                    <Img item={ar} />
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/* <Project /> */}
          {/* <div className="p-6 rounded-xl border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.2)]  hover:-translate-y-1 transition-all hover:bg-cyan-900 ">
            <h3 className="font-semibold text-xl mb-3">Hotel Dashboard</h3>
            <p className="text-gray-300 mb-4">
              Scalable Dashboard App with CRUD operations manages all the
              bookings, users, guests and services.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Supabase", "Vercel"].map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.1)] transition-all hover:text-white "
                >
                  {tech}
                </span>
              ))}
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className=" flex justify-between items-center font-bold  text-blue-400  transition-colors hover:text-white"
                >
                  View Project
                  <ArrowRightIcon className="w-6 h-5  ml-3 inline " />
                  <Img item={freshBurger} />
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.2)]  hover:-translate-y-1 transition-all hover:bg-cyan-900 ">
            <h3 className="font-semibold text-xl mb-3">Hotel Dashboard</h3>
            <p className="text-gray-300 mb-4">
              Scalable Dashboard App with CRUD operations manages all the
              bookings, users, guests and services.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Supabase", "Vercel"].map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.1)] transition-all hover:text-white "
                >
                  {tech}
                </span>
              ))}
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className=" flex justify-between items-center font-bold  text-blue-400  transition-colors hover:text-white"
                >
                  View Project
                  <ArrowRightIcon className="w-6 h-5  ml-3 inline " />
                  <Img item={viberr} />
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.2)]  hover:-translate-y-1 transition-all hover:bg-cyan-900">
            <h3 className="font-semibold text-xl mb-3">Hotel Dashboard</h3>
            <p className="text-gray-300 mb-4">
              Scalable Dashboard App with CRUD operations manages all the
              bookings, users, guests and services.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Supabase", "Vercel"].map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.1)] transition-all hover:text-white "
                >
                  {tech}
                </span>
              ))}
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className=" flex justify-between items-center font-bold  text-blue-400  transition-colors hover:text-white"
                >
                  View Project
                  <ArrowRightIcon className="w-6 h-5  ml-3 inline " />
                  <img
                    className="max-w-fit"
                    src={hipsster}
                    alt="project-logo"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.2)]  hover:-translate-y-1 transition-all hover:bg-cyan-900">
            <h3 className="font-semibold text-xl mb-3">Hotel Dashboard</h3>
            <p className="text-gray-300 mb-4">
              Scalable Dashboard App with CRUD operations manages all the
              bookings, users, guests and services.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Supabase", "Vercel"].map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.1)] transition-all  hover:text-white"
                >
                  {tech}
                </span>
              ))}
              <div className="flex justify-between  items-center">
                <a
                  href="#"
                  className=" flex justify-between items-center font-bold  text-blue-400  transition-colors hover:text-white"
                >
                  View Project
                  <ArrowRightIcon className="w-6 h-5  ml-3 inline " />
                  <img className="max-w-fit" src={fitlift} alt="project-logo" />
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Projects;

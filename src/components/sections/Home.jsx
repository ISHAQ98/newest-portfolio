import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import cv from "../../assets/cv.pdf";
import profileImg from "../../assets/profileImg.png";

function Home() {
  return (
    <section
      id="home"
      className=" min-h-screen  items-center flex-col lg:flex-row-reverse justify-center gap-6  flex "
    >
      <div className="text-center z-10 px-4">
        <img
          className=" w-[250px] h-[350px] border-0 mt-20 lg:m-0 lg:max-w-[250px]  rounded-full s object-cover object-bottom hover:-translate-y-1 transition-all "
          src={profileImg}
          alt="img"
        />
      </div>
      <div className="text-center font-mono  z-10 px-4">
        <h1
          className="text-4xl md:text-6xl lg:max-w-[600px] font-bold mb-6 px-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent
          
          leading-right"
        >
          Hi, I am Ishaq Zinelabidine
        </h1>
        <p className="text-gray-300 text-lg mb-8  max-w-lg mx-auto">
          I am a frontend developer who loves creating interactive, scalable web
          applications. My purpose is to build solutions that offer dynamic UI,
          high performance and delightful UX.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a
            href="#contact"
            className=" bg-gradient-to-r flex flex-row from-teal-500 to-indigo-600 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246,0.4)]"
          >
            Contact me
          </a>
          <a
            href={cv}
            className="bg-gradient-to-r flex flex-row from-teal-500 to-indigo-600 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246,0.4)]"
            download
          >
            <p>Resume </p>
            <span>
              <ArrowDownTrayIcon className="w-6 h-5 ml-3 text-white" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;

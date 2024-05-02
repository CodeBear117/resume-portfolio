import ProjectCard from "./components/ProjectCard";
import Timeline from "./components/Timeline";
import { FaPython } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiPytorch } from "react-icons/si";

export default function Home() {
  return (
    <main>
      <div className="mt-4">
        <h2 className="font-bold text-lg">Summary</h2>
        <p>
          Experienced and qualified developer with over 4 years of professional
          work experience. Has strong programming and design aptitude through
          web development in both frontend and backend. Has strong foundational
          machine learning knowledge and is enthusiastic about the future of ML
          and AI. Displays a high level of analytic and strategic skills with
          proven ability to solve broad and complex problems. Is able to review
          and implement technical design changes quickly. Is always looking out
          for areas of improvement and efficiency in project management and
          delivery.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="font-bold text-lg mb-2">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-bold text-lg mb-2">Experience</h2>
        <Timeline />
      </div>

      <div className="mt-8">
        <h2 className="font-bold text-lg mb-2">Education</h2>
        <div className="bg-[#f8fafc] rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out">
          <div className=" text-gray-600 text-sm">2021 - 2023</div>
          <h3 className="font-semibold text-lg">Codecademy</h3>
          <p className="text-sm text-gray-700">
            Full Stack Engineer Certification
          </p>
        </div>
        <div className="mt-4 bg-[#f8fafc] rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out">
          <div className=" text-gray-600 text-sm">2015 - 2020</div>
          <h3 className="font-semibold text-lg">Monash University</h3>
          <p className="text-sm text-gray-700">
            Bachelor of Aerospace Engineering (Hons) & Bachelor of Commerce
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-bold text-lg">Tech Stack</h2>
        <div className="flex gap-4">
          <FaPython className="w-6 h-6" />
          <RiNextjsFill className="w-6 h-6" />
          <SiPytorch className="w-6 h-6" />
        </div>
      </div>
    </main>
  );
}

import ProjectCard from "./components/ProjectCard";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <main>
      <div className="mt-4">
        <h2 className="font-bold text-lg">Summary</h2>
        <p>
          With over four years of experience in software, automation, and
          robotics, I am a skilled and qualified engineer. Though I hold a
          degree in Aerospace Engineering, my role at Columbia Australia ignited
          a passion for robotics as I designed robotic tools and programs to
          automate manufacturing processes for hydrogen fuel cells. This
          experience deepened my love for programming, leading me to enhance my
          development skills at Webatoo Design Australia, where I focused on
          front-end projects. My strong foundational knowledge in machine
          learning, combined with my enthusiasm for integrating AI into web
          apps, is showcased through various projects on my GitHub - check it
          out below! I am genuinely passionate about the future of ML and AI,
          particularly at their intersection with robotics. As a quick learner
          and dedicated team player, I am eager to contribute to this exciting
          and impactful field.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="font-bold text-lg mb-2">Featured Projects</h2>
        <div className="grid lg:grid-cols-3 gap-3">
          <ProjectCard
            title="Providence"
            description="Providence is a smart personal budgeting tool featuring goal tracking, cashflow management and AI insights."
            media="providence-dashboard.webp"
            link="https://providence-zeta.vercel.app/"
          />
          <ProjectCard
            title="Here-to-help.ai"
            description="Here-to-help.ai is a tool for crisis support workers. It features AI call transcription and analysis. We were awarded first place for the 2024 AI Hackathon by Build Club."
            media="here-to-help-screenshot.png"
            link="https://www.youtube.com/watch?v=ZMN0bdank1U"
          />
          <ProjectCard
            title="Ausmetrics"
            description="Ausmetrics is a dashboard presenting current Australian economic data and summarising it with AI."
            media="ausmetrics-compressed.gif"
            link="https://ausmetrics.vercel.app/"
          />
          <ProjectCard
            title="Kanbag"
            description="Kanbag is helpful trip packing kanban board that features AI generated suggestions."
            media="kanbag-example.gif"
            link="https://kanbag.netlify.app/"
          />
          <ProjectCard
            title="Wool"
            description="Wool is a creative portfolio that looks and functions like a desktop UI with icons and draggable modals."
            media="acot-example.gif"
            link="https://andydcotton.com/"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-bold text-lg mb-2">Experience</h2>
        <Timeline />
      </div>

      <div className="mt-8">
        <h2 className="font-bold text-lg mb-2">Education</h2>
        <div className="bg-[#f8fafc] rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out">
          <div className=" text-gray-600 text-sm">2022 - 2024</div>
          <h3 className="font-semibold text-lg">Codecademy</h3>
          <p className="text-sm text-gray-700">
            Full Stack Engineer Certification
          </p>
          <p className="text-sm text-gray-400">Certification ID - 66EA97648D</p>
        </div>
        <div className="mt-4 bg-[#f8fafc] rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out">
          <div className=" text-gray-600 text-sm">2015 - 2019</div>
          <h3 className="font-semibold text-lg">Monash University</h3>
          <p className="text-sm text-gray-700">
            Bachelor of Aerospace Engineering (Hons) & Bachelor of Commerce
          </p>
        </div>
      </div>

      {/* <div className="mt-8">
        <h2 className="font-bold text-lg">Notes</h2>
        <p>
          You may notice the dates for Webatoo Design Australia and Columbia
          Australia clash. During this period, I was working part time as a web
          developer. I gained this position in a part-time capacity as I was
          leaving university, and I took up a full-time position at the
          conclusion of my work at Columbia Australia.
        </p>
        <br />
        <p>References will be provided on request.</p>
      </div> */}

      <div className="mt-8">
        <h2 className="font-bold text-lg">References</h2>
        <div className="mt-4 bg-[#f8fafc] rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out">
          <h3 className="font-semibold text-lg">Joel Benton</h3>
          <a
            href="mailto:joelbenton83@gmail.com"
            className="text-sm text-gray-700 underline"
          >
            joelbenton83@gmail.com
          </a>
          <p className="text-sm text-gray-700">0401 906 027</p>
          <p className="text-sm text-gray-400">
            Senior mechanical engineer and former manager at Columbia Australia
          </p>
        </div>
      </div>
    </main>
  );
}

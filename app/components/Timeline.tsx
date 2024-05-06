import React from "react";
import JobCard from "./JobCard";

const Timeline = () => {
  return (
    <div className="timeline relative">
      <JobCard
        company="Webatoo Design Australia"
        role="Frontend Developer"
        dates="Jan 2020 - Present"
        overview="Designing websites and web apps, focusing on front-end development. Tech stack encompasses TypeScript, Node, React, and Python. I work directly with clients and excel in functional design which I believe is essential for resolving complex programming tasks."
        details={
          <ul className="list-disc pl-5 text-sm text-gray-700">
            <li>
              Tech stack includes HTML, CSS, JavaScript, TypeScript, Python, and
              front-end frameworks including ReactJS, NodeJS and Tailwind CSS.
            </li>
            <li>
              Integration of Open AI API into backend workflows including
              interaction of LLMs with Stripe and Google APIs.
            </li>
            <li>
              Development of websites and web apps for clients in various
              industries and sectors, employing responsive/mobile-first design
              strategies. Websites have consistently ranked high in Google,
              attesting my skill in organic SEO practices.
            </li>
            <li>
              Wire-framing and design iteration, consultation with client and
              test-driven development with effective use of collaborative design
              tools such as Figma and Canva.
            </li>
            <li>Database development using PostgreSQL and AppWrite.</li>
            <li>
              Highly skilled in WordPress CMS for articles, publications, and
              media content.
            </li>
            <li>
              Strong understanding of Git version control software and CI/CD,
              having played a role across the full SDLC.
            </li>
          </ul>
        }
      />
      <JobCard
        company="Columbia Australia"
        role="Mechanical Engineer (Manufacturing Automation & Robotics)"
        dates="Feb 2021 - Oct 2022"
        overview="Programming and commissioning of robotic automated manufacturing lines for Hydrogen Fuel Cell production."
        details={
          <ul className="list-disc pl-5 text-sm text-gray-700">
            <li>
              I designed production-grade robot programs for high-volume
              automated manufacturing. My programs prioritised cycle time
              minimisation, modularity in order to adjust production volume
              rapidly, and safety.
            </li>
            <li>
              I designed and commissioned 3 complex robotic manufacturing
              processes for 3 key stages in the manufacture of hydrogen fuel
              cells. Namely, an automated sand-blasting process for
              surface-prep, an automated HVOF thermal spraying process, and an
              automated plasma coating process.
            </li>
            <li>
              I designed numerous robot end-of-arm tools (EOAT) that were used
              in extreme environments meaning they had to be internally cooled
              and wired. I developed complex CAD (Inventor and Solidworks) parts
              and assemblies, making use of OEM components such as pneumatics,
              and sensors.
            </li>
            <li>
              I coordinated testing and evaluation of new processes and designs
              which included the use of Finite Element Analysis (FEA) and
              Computational Fluid Dynamics (CFD) to analyse loads and gas
              dynamics within robotic cells. I often presented findings and
              recommended improvements to management.
            </li>
            <li>
              I fabricated parts in-house using standard machine shop equipment
              such as mills, lathes, bandsaws and GD&T tooling. I have hands on
              experience with materials such as Aluminium, Titanium and Steel,
              which I used selectively which developing robotic EOATs and
              peripherals.
            </li>
            <li>
              I developed comprehensive setup, usage, and maintenance
              documentation for robotic cells, facilitating easy reference for
              factory staff.
            </li>
          </ul>
        }
      />
      <JobCard
        company="Monash DeepNeuron"
        role="Deep Learning Engineer & Partnerships Manager"
        dates="May 2017 - Nov 2019"
        overview="Developed and configured convolutional neural networks (CNN) for image processing and classification using large datasets for various university research projects. Coordinated large-scale university events for students and sponsoring companies. Attracted engagement and sponsorship from companies including AWS, KPMG, Eliiza, and Monash University."
        details={
          <ul className="list-disc pl-5 text-sm text-gray-700">
            <li>
              Developed and configured convolutional neural networks (CNN) for
              image processing and classification using large datasets for
              projects related to university research and student engineering
              teams.
            </li>
            <li>
              Proficiency in Python for data processing and visualisation
              including use libraries such as PyTorch and fast.ai, datasets from
              Kaggle/Empiar, and hardware acceleration from Google.
            </li>
            <li>
              Coordinated large-scale university events for students and
              sponsoring companies. Attracted engagement and sponsorship from
              companies including AWS, KPMG, Eliiza, and Monash University.
              Demonstrated ability to coordinate activities and communication
              between multiple entities towards a common goal.
            </li>
            <li>
              <a
                href="https://youtu.be/Hun9Xon3ESY?si=WPME2ln90HrLgcwu"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Here
              </a>{" "}
              is a panel I hosted for over 100 students at Monash discussing
              Machine Learning and AI.
            </li>
          </ul>
        }
      />
      <JobCard
        company="PwC Australia"
        role="Intern"
        dates="Dec 2018 - Feb 2019"
        overview="Assisting in preparation of Auditor’s Report within the Annual Financial Report for ASX listed companies, demonstrating keen attention to detail and working to strict deadlines. Interacting with external and internal stakeholders in reviewing related controls documents for assigned areas of responsibility."
        details=""
      />
      <JobCard
        company="Tesla"
        role="Product Specialist"
        dates="Aug 2017 - Nov 2018"
        overview="Worked with advisors, test drivers, and the other departments (sales, energy) to drive positive customer experiences which eventually led to sales. Demonstrated an ability to develop rapport with a wide demographic of customers and clients."
        details=""
      />
    </div>
  );
};

export default Timeline;

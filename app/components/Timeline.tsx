import React from "react";
import JobCard from "./JobCard";

const Timeline = () => {
  return (
    <div className="timeline relative">
      <JobCard
        company="Webatoo Design Australia"
        link="https://www.webatoo.com.au/"
        role="Frontend Developer"
        dates="Jan 2020 - Present"
        overview="Designing websites and web apps, focusing on front-end development. I work directly with clients and excel in functional design which I believe is essential for resolving complex programming tasks. Increasingly involved in full-stack development."
        details={
          <ul className="list-disc pl-5 text-sm text-gray-700">
            <li>
              Tech stack includes HTML, CSS, JavaScript, TypeScript, Python, and
              modern frameworks including Next.js, React.js, Node.js and
              Tailwind CSS.
            </li>
            <li>
              I have Integrated Open AI’s API into backend workflows including
              interaction of LLMs with Stripe and Google APIs. I have engineered
              prompts to handle dynamic inputs from props and then formatted
              outputs into components that have then been displayed on the
              frontend.
            </li>
            <li>
              I have developed websites and web apps for clients in various
              industries and sectors, employing responsive/mobile-first design
              strategies. Websites have consistently ranked high in Google,
              attesting my skill in organic SEO practices. I have worked
              directly with clients and external teams to manage expectations,
              iterate and refine designs and suggest new methods based on
              testing and UX.
            </li>
            <li>
              I have conducted collaborative app wire-framing sessions and
              design iteration, including consultation with client, with
              effective use of collaborative design tools such as Figma and
              Canva.
            </li>
            <li>
              I have integrated databases into full-stack applications using
              Supabase, PostgreSQL and MongoDB. This includes authenticated and
              secure sessions for CRUD functionality through PKCE and oAuth2.0
              flow.
            </li>
            <li>
              • I am highly skilled in WordPress CMS for articles, publications,
              and media content.
            </li>
            <li>
              I have a strong understanding of Git version control software and
              CI/CD (GitHub and GitHub Actions), as well as Agile methodology
              and Scrum.
            </li>
          </ul>
        }
      />
      <JobCard
        company="Columbia Australia"
        link="https://youtu.be/9v5FbmLEE4Q?si=JBU5hPwZbnx3PxZR"
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
              My role encapsulted a great intersection between robotics and
              Machine Learning (ML); I configured and trained feature
              recognition algorithms to identify and classify reject parts from
              production that were subsequently removed by the robot.
            </li>
            <li>
              I designed and commissioned various complex robotic manufacturing
              processes for key stages in the manufacture of hydrogen fuel cells
              including sand-blasting, HVOF thermal spraying and plasma coating.
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
        link="https://www.deepneuron.org/"
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
                href="https://onlinelibrary.wiley.com/doi/10.1002/aisy.202200111?fbclid=IwAR1Kj7crIzEY9xKPcWmLjCf4GHKcjmxFc8xqBMDV7duyFgyKSROAX901Xrg"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Here
              </a>{" "}
              is a research paper that my team and I were accredited for, for
              our work in providing model development and data fitting for a
              research project into the classification of sperm-head morphology
              through ensembled deep learning.
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
        link="https://www.pwc.com.au/"
        role="Intern"
        dates="Dec 2018 - Feb 2019"
        overview="Assisting in preparation of Auditor’s Report within the Annual Financial Report for ASX listed companies, demonstrating keen attention to detail and working to strict deadlines. Interacting with external and internal stakeholders in reviewing related controls documents for assigned areas of responsibility."
        details=""
      />
      <JobCard
        company="Tesla"
        link="https://www.tesla.com/"
        role="Product Specialist"
        dates="Aug 2017 - Nov 2018"
        overview="Worked with advisors, test drivers, and the other departments (sales, energy) to drive positive customer experiences which eventually led to sales. Demonstrated an ability to develop rapport with a wide demographic of customers and clients."
        details=""
      />
    </div>
  );
};

export default Timeline;

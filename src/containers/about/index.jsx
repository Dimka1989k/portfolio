import PageHeaderContent from "./../../component/pageHeaderContent/index";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { FaGithub } from "react-icons/fa";

import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./styles.scss";
import {
  DiHtml5,
  DiJavascript,
  DiCss3,
  DiGithubBadge,
  DiAtom,
  DiGit,
} from "react-icons/di";

const personalDetails = [
  {
    label: "Name:",
    value: "Dmytro Kyselov",
  },

  {
    label: "Adress:",
    value: "Ukraine, Kropyvnytskyi",
  },
  {
    label: "Email:",
    value: "dima1989k@ukr.net",
  },
  {
    label: "Contact No:",
    value: "+38095 865 64 62",
  },
];

const jobSummary =
  "Responsible and hard working person with ability to learn and collaborate in rapidly changing environment. Worked throught 170+ hours of IT Bootkamp course, learning HTML, CSS, JavaScript, React and Node.js. Currently developing my skills in TypeScript. Eager to tuckle frontend development challenges to achive lasting impacts on user expierence. I am ready for new challenges and opportunities that may come way at company that is focused on solving complex problems and developing new technologies.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWraper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Front end Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformation">Personal information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: "30px" }}>
              <Link to="https://github.com/Dimka1989k" className="button">
                <FaGithub className="icon" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/kyselyovdmitry/"
                className="button-linkedin"
              >
                <BsLinkedin className="icon" />
              </Link>
              <Link
                to="https://www.facebook.com/profile.php?id=100018194863274"
                className="button-linkedin"
              >
                <BsFacebook className="icon" />
              </Link>
            </div>
          </Animate>
        </div>
        <div className="about__content__servicesWraper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWraper__innerContent">
              <div>
                <DiGit size={60} color="var(--team-main-color)" />
              </div>
              <div>
                <DiHtml5 size={60} color="var(--team-main-color)" />
              </div>
              <div>
                <DiJavascript size={60} color="var(--team-main-color)" />
              </div>
              <div>
                <DiCss3 size={60} color="var(--team-main-color)" />
              </div>
              <div>
                <DiGithubBadge size={60} color="var(--team-main-color)" />
              </div>
              <div>
                <DiAtom size={60} color="var(--team-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;

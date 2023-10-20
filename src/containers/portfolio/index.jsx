import { useState } from "react";
import PageHeaderContent from "./../../component/pageHeaderContent/index";
import { BsInfoCircleFill } from "react-icons/bs";

import image2 from "../../images/EventBooster.jpg";
import image3 from "../../images/IceCream.jpg";
import image4 from "../../images/ImageGallery.jpg";
import image5 from "../../images/Kapusta.jpg";
import image6 from "../../images/Movie.jpg";
import image7 from "../../images/Petly.jpg";
import image8 from "../../images/PhoneBook.jpg";
import image9 from "../../images/WebStudio.png";
import image10 from "../../images/Countries.png";
import image11 from "../../images/Weather.png";
import image12 from "../../images/hounter.png";
import image13 from "../../images/HomeProject.png";
import image14 from "../../images/Post.png";

import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "New Post",
    image: image14,
    link: "https://dimon1989k.github.io/test-sameit/",
    linkHithub: "https://github.com/Dimon1989k/test-sameit",
    description:
      "The application for searching branch locations and their shedule, as well as tracking the status of shipment tracking numbers (TTN).",
    tech: "[React, RTK, Styled-Components]",
  },
  {
    id: 2,
    name: "EventBooster",
    image: image2,
    link: "https://jekiekolya.github.io/Command-project-JS/index.html",
    linkHithub: "https://github.com/Dimon1989k/goit-markup-hw-08",
    description:
      "The application for ordering concert tickets. Role: Developer. Logic and stylization of the footer (pagination).",
    tech: "[HTML, SASS, JS]",
  },

  {
    id: 3,
    name: "IceCream",
    image: image3,
    link: "https://nikolaylyah.github.io/goit-final/",
    linkHithub: "https://github.com/Nikolaylyah/goit-final",
    description:
      "The website with a responsive layout. Role: Developer. Layout and stylization of the header and mobile menu.",
    tech: "[HTML, SASS, JS]",
  },
  {
    id: 2,
    name: "Image Gallery",
    image: image4,
    link: "https://dimon1989k.github.io/goit-react-hw-03-image-finder/",
    linkHithub: "https://github.com/Dimon1989k/goit-react-hw-04-images",
    description: "Image search app",
    tech: "[REACT, CSS]",
  },
  {
    id: 3,
    name: "Kapusta",
    image: image5,
    link: "https://hodosovsky.github.io/kapusta/login",
    linkHithub: "https://github.com/hodosovsky/kapusta",
    description:
      "The application to control your personal budget. Role: Developer. Logic and stylization of the login and registration window. Phonebook - The application to save search and delete phone numbers.",
    tech: "[React, RTK, Styled-Components, Swagger]",
  },
  {
    id: 2,
    name: "Movie",
    image: image6,
    link: "https://dimon1989k.github.io/goit-react-hw-05-movies/",
    linkHithub: "https://github.com/Dimon1989k/goit-react-hw-05-movies",
    description: "The application for searching favorite movies",
    tech: "[React, CSS]",
  },
  {
    id: 3,
    name: "Petly",
    image: image7,
    link: "https://petly-project-app.netlify.app/",
    linkHithub: "https://github.com/volodymyr-ok/petly-project",
    description:
      "The application for searching for buying and selling pets. Role: Developer. Logic and stylization of the login and registration window, home page, cards and a modal window for adding pets.",
    tech: "[React, RTK, Styled-Components, Swagger, Node]",
  },
  {
    id: 2,
    name: "Phonebook",
    image: image8,
    link: "https://dimon1989k.github.io/goit-react-hw-08-phonebook/",
    linkHithub: "https://github.com/Dimon1989k/goit-react-hw-08-phonebook",
    description: "The application to save search and delete phone numbers.",
    tech: "[React, CSS, RTK]",
  },
  {
    id: 3,
    name: "WebStudio",
    image: image9,
    link: "https://dimon1989k.github.io/goit-markup-hw-08/",
    linkHithub: "https://github.com/Dimon1989k/goit-markup-hw-08",
    description: "The simple landing page with apaptive layout design.",
    tech: "[HTML, CSS, SASS]",
  },
  {
    id: 2,
    name: "Countries",
    image: image10,
    link: "https://dimon1989k.github.io/goit-js-hw-10/",
    linkHithub: "https://github.com/Dimon1989k/goit-js-hw-10",
    description: "The application for searching countries.",
    tech: "[HTML, CSS, JS]",
  },
  {
    id: 2,
    name: "Weather",
    image: image11,
    link: "https://dimon1989k.github.io/weather/",
    linkHithub: "https://github.com/Dimon1989k/weather",
    description: "Simple weather application.",
    tech: "[React, CSS]",
  },
  {
    id: 3,
    name: "Hounter",
    image: image12,
    link: "https://dimon1989k.github.io/test-remote/",
    linkHithub: "https://github.com/Dimon1989k/test-remote",
    description: "The simple landing page with apaptive layout design.",
    tech: "[React, Styled-Components]",
  },

  {
    id: 2,
    name: "Home Project",
    image: image13,
    link: "https://dimon1989k.github.io/test-Smart/",
    linkHithub: "https://github.com/Dimon1989k/test-Smart",
    description: "The simple landing page with apaptive layout design.",
    tech: "[React, Styled-Components]",
  },
];

const Portfolio = () => {
  const [hoverValue, setHoverValue] = useState(null);
  function handleHover(index) {
    setHoverValue(index);
  }

  return (
    <>
      <section id="portfolio" className="portfolio">
        <PageHeaderContent
          headerText="My Portfolio"
          icon={<BsInfoCircleFill size={40} />}
        />

        <div className="portfolio__content">
          <div className="portfolio__content-cards">
            {portfolioData.map((item, index) => (
              <div
                className="portfolio__content-cards--item"
                key={`cardItem${item.name.trim()}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className="portfolio__content-cards--item--img-wrapper">
                  <a href="$">
                    <img src={item.image} alt="dummy dta" />
                  </a>
                </div>
                <div className="overlay">
                  {index === hoverValue && (
                    <div>
                      <p>{item.name}</p>
                      <button onClick={() => window.open(item.link)}>
                        VISIT WEBSITE
                      </button>
                      <button onClick={() => window.open(item.linkHithub)}>
                        VISIT GITHUB
                      </button>
                      <h1>{item.description}</h1>
                      <h1>{item.tech}</h1>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

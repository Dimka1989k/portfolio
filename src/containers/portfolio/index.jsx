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
import image9 from "../../images/WebStudio.jpg";
import image10 from "../../images/Countries.png";
import image11 from "../../images/Weather.png";
import image12 from "../../images/hounter.png";
import image13 from "../../images/HomeProject.png";
import image14 from "../../images/Post.png";

import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "EventBooster",
    image: image2,
    link: "https://jekiekolya.github.io/Command-project-JS/index.html",
    linkHithub: "https://github.com/Dimon1989k/goit-markup-hw-08",
  },

  {
    id: 3,
    name: "IceCream",
    image: image3,
    link: "https://nikolaylyah.github.io/goit-final/",
    linkHithub: "https://github.com/Nikolaylyah/goit-final",
  },
  {
    id: 2,
    name: "ImageGallery",
    image: image4,
    link: "https://dimon1989k.github.io/goit-react-hw-03-image-finder/",
    linkHithub: "https://github.com/Dimon1989k/goit-react-hw-04-images",
  },
  {
    id: 3,
    name: "Kapusta",
    image: image5,
    link: "https://hodosovsky.github.io/kapusta/login",
    linkHithub: "https://github.com/hodosovsky/kapusta",
  },
  {
    id: 2,
    name: "Movie",
    image: image6,
    link: "https://dimon1989k.github.io/goit-react-hw-05-movies/",
    linkHithub: "https://github.com/Dimon1989k/goit-react-hw-05-movies",
  },
  {
    id: 3,
    name: "Petly",
    image: image7,
    link: "https://petly-project-app.netlify.app/",
    linkHithub: "https://github.com/volodymyr-ok/petly-project",
  },
  {
    id: 2,
    name: "Phonebook",
    image: image8,
    link: "https://dimon1989k.github.io/goit-react-hw-08-phonebook/",
    linkHithub: "https://github.com/Dimon1989k/goit-react-hw-08-phonebook",
  },
  {
    id: 3,
    name: "WebStudio",
    image: image9,
    link: "https://dimon1989k.github.io/goit-markup-hw-08/",
    linkHithub: "https://github.com/Dimon1989k/goit-markup-hw-08",
  },
  {
    id: 2,
    name: "Countries",
    image: image10,
    link: "https://dimon1989k.github.io/goit-js-hw-10/",
    linkHithub: "https://github.com/Dimon1989k/goit-js-hw-10",
  },
  {
    id: 2,
    name: "Weather",
    image: image11,
    link: "https://dimon1989k.github.io/weather/",
    linkHithub: "https://github.com/Dimon1989k/weather",
  },
  {
    id: 3,
    name: "Hounter",
    image: image12,
    link: "https://dimon1989k.github.io/test-remote/",
    linkHithub: "https://github.com/Dimon1989k/test-remote",
  },

  {
    id: 2,
    name: "Home Project",
    image: image13,
    link: "https://dimon1989k.github.io/test-Smart/",
    linkHithub: "https://github.com/Dimon1989k/test-Smart",
  },

  {
    id: 2,
    name: "Нова Пошта",
    image: image14,
    link: "https://dimon1989k.github.io/test-sameit/",
    linkHithub: "https://github.com/Dimon1989k/test-sameit",
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

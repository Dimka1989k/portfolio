import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about");
  };
  return (
    <section id="Home" className="home">
      <div className="home__text">
        <h1>
          Hello! I am Dmytro Kyselov
          <br />
          Front end Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigate}>My contacts</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;

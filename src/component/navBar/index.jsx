import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { SlUserFollowing } from "react-icons/sl";
import "./styles.scss";

const data = [
  {
    label: "HOME",
    to: "/portfolio",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },

  {
    label: "PORTFOLIO",
    to: "/myportfolio",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
];

const NavBar = () => {
  const [toogleIcon, setToogleIcon] = useState(false);

  const handleToogleIcon = () => {
    setToogleIcon(!toogleIcon);
  };

  const closeMenu = () => {
    setToogleIcon(false);
  };

  return (
    <>
      <div>
        <nav className="navbar">
          <div className="navbar__container">
            <Link to={"/portfolio"} className="navbar__container__logo">
              <SlUserFollowing size={30} />
            </Link>
          </div>
          <ul
            className={`navbar__container__menu ${toogleIcon ? "active" : ""}`}
          >
            {data.map((item, key) => (
              <li key={key} className="navbar__container__menu__item">
                <Link
                  to={item.to}
                  className="navbar__container__menu__item__links"
                  onClick={closeMenu} // Закриваємо меню при натисканні
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav__icon" onClick={handleToogleIcon}>
            {toogleIcon ? <HiOutlineX size={30} /> : <FaBars size={30} />}
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
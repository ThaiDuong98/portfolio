import React, { useEffect, useRef, useState } from "react";
import { FaFacebook, FaLinkedin, FaBars, FaPlus } from "react-icons/fa";
import useElementOnScreen from "../../hook/useElementOnScreen";
import "./header.css";

const HeaderPage = ({scrollRef, handleClick, activeHeaderMenu, observeActiveComponent}) => {
  const [active, setActive] = useState(1);
  const test = useRef(null)
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px 0px -200px 0px",
    threshold: 0.4
  })

  useEffect(() => {
    setActive(activeHeaderMenu)
  }, [activeHeaderMenu])

  useEffect(() => {
    if(isVisible){
      observeActiveComponent(1)
    }
  }, [isVisible])

  const activeMenu = (id) => {
    setActive(id);
    let menu = document.querySelector("ul");
    let close = document.querySelector(".close-menu-icon");
    let open = document.querySelector(".open-menu-icon");
    close.classList.toggle("open");
    menu.classList.toggle("open");
    open.classList.toggle("hide");
    handleClick()
  };

  const removeMenu = () => {
    let menu = document.querySelector("ul");
    let close = document.querySelector(".close-menu-icon");
    let open = document.querySelector(".open-menu-icon");
    close.classList.remove("open");
    menu.classList.remove("open");
    open.classList.remove("hide");
  };

  const toggleMenu = () => {
    let menu = document.querySelector("ul");
    let close = document.querySelector(".close-menu-icon");
    let open = document.querySelector(".open-menu-icon");
    close.classList.toggle("open");
    menu.classList.toggle("open");
    open.classList.toggle("hide");
  };

  const distinguishNavbar = () => {
    const navbar = document.querySelector(".nav-container")
    navbar.classList.toggle("active", window.scrollY > 0)
  }

  useEffect(() => {
    window.addEventListener("scroll", distinguishNavbar)

    return () => {
      window.removeEventListener("scroll", distinguishNavbar)
    }
  }, [])

  const handleClickOutside = (e) => {
    if(test.current && !test.current.contains(e.target)){
      removeMenu()
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [test])

  return (
    <header ref={scrollRef}>
      <div className="header-container" id="#">
        <nav className="nav-container" ref={test}>
          <h1>Portfolio.</h1>
          <ul>
            <li onClick={() => activeMenu(1)}>
              <a href="#" className={active === 1 ? "active" : ""}>
                Home
              </a>
            </li>
            <li onClick={() => activeMenu(2)}>
              <a href="#about" className={active === 2 ? "active" : ""}>
                About
              </a>
            </li>
            <li onClick={() => activeMenu(3)}>
              <a href="#experience" className={active === 3 ? "active" : ""}>
                Experiences
              </a>
            </li>
            <li onClick={() => activeMenu(4)}>
              <a href="#skill" className={active === 4 ? "active" : ""}>
                Skill
              </a>
            </li>
            <li onClick={() => activeMenu(5)}>
              <a href="#project" className={active === 5 ? "active" : ""}>
                Project
              </a>
            </li>
          </ul>
          <i className="open-menu-icon" onClick={toggleMenu}>
            <FaBars />
          </i>
          <i className="close-menu-icon" onClick={toggleMenu}>
            <FaPlus />
          </i>
        </nav>

        <section className="hero" ref={containerRef}>
          <div className={isVisible ? "hero-left active" : "hero-left"}>
            <h3>Hello, it's me</h3>
            <h1>Pham Thai Duong</h1>
            <h5>And I'm a front-end developer</h5>
            <div className="social-icon">
              <i className="icon">
                <FaFacebook />
              </i>
              <i className="icon">
                <FaLinkedin />
              </i>
            </div>
            <button className="btn-download">Download cv</button>
          </div>

          <div className={isVisible ? "hero-right active" : "hero-right"}>
            <img src="/imgs/me.jpg" />
          </div>
        </section>
      </div>
    </header>
  );
};

export default HeaderPage;
